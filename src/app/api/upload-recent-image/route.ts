import { NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request: Request) {
    await dbConnect();

    try {
        const formData = await request.formData();
        const file = formData.get('image') as File;

        console.log(formData);
        console.log(file);

        if (!file) {
            return NextResponse.json(
                { status: false, message: "No file uploaded" },
                { status: 400 }
            );
        }

        // Convert File to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Cloudinary
        const result = await new Promise((resolve, reject) => {
            cloudinary.v2.uploader.upload_stream(
                { resource_type: "auto" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        // @ts-ignore (result might not have secure_url)
        const imageUrl = result.secure_url;

        return NextResponse.json(
            {
                status: true,
                message: "Image Uploaded Successfully",
                imageUrl: imageUrl
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error uploading image ", error);
        return NextResponse.json(
            {
                status: false,
                message: "Error uploading image"
            },
            { status: 500 }
        );
    }
}