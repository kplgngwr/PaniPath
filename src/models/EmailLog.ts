import mongoose, { Schema, Document } from "mongoose";

export interface EmailLog extends Document {
  email: string;
  token: string;
  emailData: Array<{ subject: string; text: string; timestamp: Date }>;
}

const EmailLogSchema: Schema<EmailLog> = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,  // Ensure email is unique
    trim: true,
  },
  token: {
    type: String,
    required: [true, "Token is required"],
  },
  emailData: [
    {
      subject: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const EmailLogModel = mongoose.models.EmailLog || mongoose.model<EmailLog>("EmailLog", EmailLogSchema);

export default EmailLogModel;
