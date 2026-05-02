import React from 'react';
import { IoSunnySharp } from 'react-icons/io5';

const SummerTips = () => {
    return (
       <div className="my-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-1 justify-center">
        <IoSunnySharp className="text-yellow-400 w-9 h-9" />
         Summer Care Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="p-5 bg-base-200 rounded-xl shadow">
          <h3 className="font-semibold">💧 Stay Hydrated</h3>
          <p className="text-sm text-gray-600">
            Drink plenty of water to stay cool and fresh during summer.
          </p>
        </div>

        <div className="p-5 bg-base-200 rounded-xl shadow">
          <h3 className="font-semibold">🧴 Use Sunscreen</h3>
          <p className="text-sm text-gray-600">
            Protect your skin from harmful UV rays with sunscreen.
          </p>
        </div>

        <div className="p-5 bg-base-200 rounded-xl shadow">
          <h3 className="font-semibold">👕 Wear Light Clothes</h3>
          <p className="text-sm text-gray-600">
            Choose breathable fabrics to stay comfortable in heat.
          </p>
        </div>

      </div>
    </div>
    );
};

export default SummerTips;