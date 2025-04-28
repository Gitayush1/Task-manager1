import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Mongoose 6 and MongoDB 4.x+ no longer require `useNewUrlParser` and `useUnifiedTopology`
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);  // Exit the process with failure
  }
};

export default connectDB;
