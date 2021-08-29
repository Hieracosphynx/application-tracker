import mongoose from 'mongoose';
import config from 'config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to database!');
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;
