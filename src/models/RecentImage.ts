import mongoose, { Schema, Document } from "mongoose";

export interface RecentImage extends Document {
    wetlandName: string;
    coordinates: string;
    district: string;
    wetlandType: string;
    wetlandSubType: string;
    area:number;
    khasraNo:string;
};

const RecentImageSchema: Schema<RecentImage> = new Schema({
    wetlandName: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    coordinates: {
        type: String,
        required: [true, "Coordinates is required"],
        trim: true,
    },
    district: {
        type: String,
        required: [true, "District is required"],
        trim: true,
    },
    wetlandType: {
        type: String,
        required: [true, "Wetland Type is required"],
    },
    wetlandSubType: {
        type: String,
        required: [true, "Wetland SubType is required"],
    },
    area: {
        type: Number,
        required: [true, "Area is required"],
        trim: true,
    },
    
    khasraNo: {
        type: String,
        required: [true, "Khasra No is required"],
        trim: true,
    },
});


const RecentImageModel = (mongoose.models.RecentImage as mongoose.Model<RecentImage>) || (mongoose.model<RecentImage>("RecentImage", RecentImageSchema));

export default RecentImageModel;