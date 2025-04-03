import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import EmailLog from '@/models/EmailLog';

export async function GET(request: NextRequest) {
    await dbConnect();

    try {
        const { pathname } = new URL(request.url);
        const id = pathname.split('/').pop();
        console.log(id);
        if (!id) {
            return NextResponse.json(
                {
                    status: false,
                    message: "Token not provided"
                },
                { status: 400 }
            );
        }

        const user = await EmailLog.findOne({ token: id });
        
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
                data: user,
                message: "Email log sent successfully",
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