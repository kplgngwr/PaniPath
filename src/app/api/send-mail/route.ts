import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import EmailLog from '@/models/EmailLog'; // Import the model for storing email logs

function generateToken() {
    return crypto.randomBytes(20).toString('hex');
}

export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const { to, subject, text } = await request.json();

        const token = generateToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER || '',
                pass: process.env.MAIL_PASSWORD || '',
            },
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to,
            subject,
            html: `<p>${text}</p><p>Your token: <strong>${token}</strong></p>`,
        };

        await transporter.sendMail(mailOptions);

        // Check if the email already exists in the database
        const emailLog = await EmailLog.findOne({ email: to });

        if (emailLog) {
            // If email log exists, push new email data to the emailData array
            emailLog.emailData.push({
                subject: subject || 'No Subject',
                text: text || 'No Text',
                timestamp: new Date(),
            });

            // Save the updated email log
            await emailLog.save();
        } else {
            // If email log doesn't exist, create a new entry
            const newEmailLog = new EmailLog({
                email: to,
                token,
                emailData: [{
                    subject: subject || 'No Subject',
                    text: text || 'No Text',
                    timestamp: new Date(),
                }],
            });

            // Save the new email log
            await newEmailLog.save();
        }

        return NextResponse.json({
            status: true,
            message: "Mail Sent Successfully",
            token, // Optionally return the token in the response
        }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({
            status: false,
            message: "Error in sending mail",
        }, { status: 500 });
    }
}
