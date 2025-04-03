'use client'

import React from 'react';

const Page = () => {

  return (
    <div className='select-none'>
      <div className='h-16 w-56 xl:w-64 bg-[#FAFAFA] absolute right-0'></div>
      <iframe
        src="https://ee-adityaberry2004.projects.earthengine.app/view/vegitation"
        height={900}
        width="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Page;