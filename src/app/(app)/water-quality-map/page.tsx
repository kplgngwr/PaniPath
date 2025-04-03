'use client'

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [iframeMessage, setIframeMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleIframeLogs = (event: any) => {
      if (event.data?.type === 'iframe-log') {
        console.log('Iframe Log:', ...event.data.data);
        setIframeMessage(event.data.data.join(' '));
      }
    };

    window.addEventListener('message', handleIframeLogs);

    const iframe = document.createElement('iframe');
    iframe.src = "https://ee-adityaberry2004.projects.earthengine.app/view/sih";
    iframe.height = "900";
    iframe.width = "100%";
    iframe.style.border = 'none';
    iframe.onload = () => {
      iframe.contentWindow?.postMessage({ type: 'get-local-storage' }, '*');
    };

    document.body.appendChild(iframe);

    return () => {
      window.removeEventListener('message', handleIframeLogs);
      document.body.removeChild(iframe);
    };
  }, []);

  return (
    <div className='select-none'>
      <div className='h-16 w-56 xl:w-64 bg-[#FAFAFA] absolute right-0'></div>
      <iframe
        src="https://ee-adityaberry2004.projects.earthengine.app/view/sih"
        height={900}
        width="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Page;