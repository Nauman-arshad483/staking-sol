import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://naumanarshad483:eFTn500NzQInrxGk@sol.jj6qbc9.mongodb.net/?retryWrites=true&w=majority&appName=sol"

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI,{
        autoIndex: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    // process.exit(1);
  }
};

export default connectDB;
