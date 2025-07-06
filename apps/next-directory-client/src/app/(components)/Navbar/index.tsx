'use client';

import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {
            console.log('hej');
          }}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
