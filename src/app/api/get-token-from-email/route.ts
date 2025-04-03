import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import EmailLog from '@/models/EmailLog';

export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const { email } = await request.json()
        const user = await EmailLog.findOne({ email });

        if (!user) {
            return NextResponse.json(
                {
                    status: false,
                    message: "User not found"
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                status: true,
                token: user.token,
                message: "User found successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            {
                status: false,
                message: "Error in mail",
            },
            { status: 500 }
        );
    }
}