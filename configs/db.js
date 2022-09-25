import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://priyajit:indiatimes@cluster0.bb04n.mongodb.net/book-library?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Database Connected");
      }
    );
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB
