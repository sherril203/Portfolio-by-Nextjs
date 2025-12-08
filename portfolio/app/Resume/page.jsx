import React from 'react';

const Page = () => {
  return (
    <div className="bg-linear-to-r from-orange-100 to-gray-50 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-center text-3xl font-bold mt-7 p-4">Resume</h1>

      <iframe
        src="https://drive.google.com/file/d/1_zur39GZN4H9x81dQy64N-TMvdly0Ajp/preview"
        width="50%"
        height="800"
        className="border rounded-lg shadow-lg"
        allow="autoplay"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Page;
