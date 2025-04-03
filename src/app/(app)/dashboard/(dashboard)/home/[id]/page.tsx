'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type EmailLog = {
  token: string;
  email: string;
  subject: string;
  text: string;
};

const EmailLogPage: React.FC = () => {
  const { id: token } = useParams();
  const [emailLog, setEmailLog] = useState<EmailLog | null>(null);
  const [emailBody, setEmailBody] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      const fetchEmailLog = async () => {
        try {
          const response = await fetch(`/api/get-email-log/${token}`);
          if (response.ok) {
            const data = await response.json();
            setEmailLog(data.data as EmailLog);
            console.log(data);
          } else {
            console.error('Failed to fetch email log');
          }
        } catch (error) {
          console.error('Error fetching email log:', error);
        }
      };

      fetchEmailLog();
    }
  }, [token]);

  const handleSendEmail = async () => {
    if (!emailLog) return;

    setSending(true);
    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: emailLog.email,
          subject: 'Response to Water Report',
          text: emailBody,
        }),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        const result = await response.json();
        alert(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Email Log Details</h1>
      {emailLog ? (
        <>
          <div className="mb-4">
            <p className="text-lg"><strong>Token:</strong> {emailLog.token}</p>
            <p className="text-lg"><strong>Subject:</strong> {emailLog.subject}</p>
            <p className="text-lg"><strong>Text:</strong> 
              {emailLog.text ? (
                emailLog.text.split(' ').map((word, index) => {
                  const urlPattern = /(https?:\/\/[^\s]+)/g;
                  return urlPattern.test(word) ? (
                    <a key={index} href={word} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{word}</a>
                  ) : (
                    <span key={index}>{word} </span>
                  );
                })
              ) : (
                <span>No text available</span>
              )}
            </p>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">Email Body:</label>
            <Input
              type="text"
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              placeholder="Enter your message"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <Button
              onClick={handleSendEmail}
              disabled={sending || !emailBody.trim()}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              {sending ? 'Sending...' : 'Send Email'}
            </Button>
          </div>
        </>
      ) : (
        <p className="text-center text-lg text-gray-600">Loading email log...</p>
      )}
    </div>
  );
};

export default EmailLogPage;
