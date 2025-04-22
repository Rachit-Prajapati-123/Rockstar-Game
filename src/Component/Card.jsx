import React from 'react';

const Card = ({ data, id }) => {
  return (
    <div
      key={id}
      className="bg-black border border-[#282828] rounded-lg object-contain m-5 max-w-[100vw] grid"
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-auto object-cover rounded-t-lg contain-layout"
      />
      <div className="p-6">
        <div className="flex gap-4 pb-2">
          <h2 className="text-lg font-semibold text-white">{data.title}</h2>
          <h3 className="text-gray-400 font-semibold">{data.time}</h3>
        </div>
        <h1 className="text-2xl font-semibold text-white">{data.paragraph}</h1>
      </div>
    </div>
  );
};

export default Card;
