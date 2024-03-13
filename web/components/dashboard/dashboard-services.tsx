import {
  Connection,
  PublicKey,
  Keypair,
  StakeProgram,
  LAMPORTS_PER_SOL,
  Authorized,
} from '@solana/web3.js';

import walletData from './wallet.json';
import connectDB from '@/utils/db';
// const connection = new Connection('http://localhost:3000', 'confirmed');
const wallet = Keypair.fromSecretKey(new Uint8Array(walletData));
const stakeAccount = Keypair.generate();
const validatorVoteAccount = new PublicKey(
  'FwR3PbjS5iyqzLiLugrBqKSa5EKZ4vK9SKs7eQXtT59f'
);
const STAKE_PROGRAM_PK = new PublicKey(
  'Stake11111111111111111111111111111111111111'
);
const WALLET_OFFSET = 44;
const DATA_SIZE = 200;
export async function connect_Db() {
  connectDB();
}
export async function fundAccount(
  connection: Connection,
  accountToFund: Keypair,
  lamports = LAMPORTS_PER_SOL
) {
  const { blockhash, lastValidBlockHeight } =
    await connection.getLatestBlockhash();
  try {
    const signature = await connection.requestAirdrop(
      accountToFund.publicKey,
      lamports
    );
    const result = await connection.confirmTransaction(
      { signature, blockhash, lastValidBlockHeight },
      'finalized'
    );
    if (result.value.err) {
      throw new Error(`Failed to confirm airdrop: ${result.value.err}`);
    }
    console.log('Wallet funded', signature);
  } catch (error) {
    console.error(error);
  }
  return;
}

export async function createStakeAccount(
  connection: Connection,
  {
    wallet,
    stakeAccount,
    lamports,
  }: { wallet: Keypair; stakeAccount: Keypair; lamports?: number }
) {
  const transaction = StakeProgram.createAccount({
    fromPubkey: wallet.publicKey,
    stakePubkey: stakeAccount.publicKey,
    authorized: new Authorized(wallet.publicKey, wallet.publicKey),
    lamports: lamports ?? LAMPORTS_PER_SOL,
  });
  try {
    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash();
    transaction.feePayer = wallet.publicKey;
    transaction.recentBlockhash = blockhash;
    transaction.lastValidBlockHeight = lastValidBlockHeight;
    transaction.sign(wallet, stakeAccount);
    const signature = await connection.sendRawTransaction(
      transaction.serialize()
    );
    const result = await connection.confirmTransaction(
      { signature, blockhash, lastValidBlockHeight },
      'finalized'
    );
    if (result.value.err) {
      throw new Error(`Failed to confirm airdrop: ${result.value.err}`);
    }
    console.log('Stake Account created', signature);
  } catch (error) {
    console.error(error);
  }
  return;
}

export async function delegateStakeAccount(
  connection: Connection,
  {
    stakeAccount,
    validatorVoteAccount,
    authorized,
  }: {
    stakeAccount: Keypair;
    validatorVoteAccount: PublicKey;
    authorized: Keypair;
  }
) {
  const transaction = StakeProgram.delegate({
    stakePubkey: stakeAccount.publicKey,
    authorizedPubkey: authorized.publicKey,
    votePubkey: validatorVoteAccount,
  });
  try {
    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash();
    transaction.feePayer = authorized.publicKey;
    transaction.recentBlockhash = blockhash;
    transaction.lastValidBlockHeight = lastValidBlockHeight;
    transaction.sign(authorized);
    const signature = await connection.sendRawTransaction(
      transaction.serialize()
    );
    const result = await connection.confirmTransaction(
      { signature, blockhash, lastValidBlockHeight },
      'finalized'
    );
    if (result.value.err) {
      throw new Error(`Failed to confirm airdrop: ${result.value.err}`);
    }
    console.log('Stake Account delegated to vote account', signature);
  } catch (error) {
    console.error(error);
  }
  return;
}

export async function getStakeAccountInfo(
  connection: Connection,
  stakeAccount: PublicKey
) {
  try {
    const info = await connection.getStakeActivation(stakeAccount);
    console.log(`Stake account status: ${info.state}`);
  } catch (error) {
    console.error(error);
  }
  return;
}

export async function stakeAmount(
  connection: Connection,
  amountToStake: number
) {
  try {
    console.log('connectionis,,', connection);
    console.log('api ammount ...', stakeAccount);
    // Fund user's account
    // await fundAccount(connection,wallet);

    // Create a new stake account
    const lamportsToStake = amountToStake * LAMPORTS_PER_SOL; // Convert SOL to lamports
    await createStakeAccount(connection, {
      wallet,
      stakeAccount,
      lamports: lamportsToStake,
    });

    // Delegate the stake account to a validator vote account
    await delegateStakeAccount(connection, {
      stakeAccount,
      validatorVoteAccount,
      authorized: wallet,
    });

    // Optionally, fetch and display stake account information
    await getStakeAccountInfo(connection, stakeAccount.publicKey);

    console.log('Staking process completed successfully.');
  } catch (error) {
    console.error('Error while staking:', error);
  }
}

export async function getStakeAccounts(connection: Connection, wallet: string) {
  console.log('connnection is..', connection);
  console.log('wallet public key is...', wallet);

  const stakeAccounts = await connection.getParsedProgramAccounts(
    STAKE_PROGRAM_PK,
    {
      filters: [
        {
          dataSize: DATA_SIZE, // number of bytes
        },
        {
          memcmp: {
            offset: WALLET_OFFSET, // number of bytes
            bytes: wallet, // base58 encoded string
          },
        },
      ],
    }
  );
  return stakeAccounts;
}
