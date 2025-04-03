import mongoose, { ConnectOptions } from "mongoose";

interface ConnectionObject {
    isConnected?: number;
}

const connection: ConnectionObject = {};

export default async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log("DB already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '', {}) // Options in braces
        connection.isConnected = db.connections[0].readyState;
        console.log("DB connected successfully");
    } catch (error) {
        console.log("DB connection failed");
        process.exit(1);
    }
}