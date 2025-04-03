import mongoose, { Schema, Document } from "mongoose";

export interface Report extends Document {
    name: string;
    mobile: string;
    email: string;
    image: string;
    coordinates: string;
    feedback:string;
};

const ReportSchema: Schema<Report> = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    mobile: {
        type: String,
        required: [true, "Mobile is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter a Valid Email Address"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
        trim: true,
    },
    coordinates: {
        type: String,
        required: [true, "Coordinates is required"],
        trim: true,
    },
    feedback: {
        type: String,
        required: [true, "Feedback is required"],
        trim: true,
    },
});


const ReportModel = (mongoose.models.Report as mongoose.Model<Report>) || (mongoose.model<Report>("Report", ReportSchema));

export default ReportModel;