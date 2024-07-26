import mongoose from "mongoose";

const userChatsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    chats: [
      {
        _id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now, // Use Date.now as a function
        },
      },
    ],
  },
  { timestamps: true } // This will automatically add `createdAt` and `updatedAt` fields
);

export default mongoose.models.userchats ||
  mongoose.model("userchats", userChatsSchema);
