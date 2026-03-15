import React from 'react';
import { UserAuth } from '../context/AuthContext';
import iconMoney from '../assets/report-money.svg';
import { DropdownMenuAvatar } from './DropdownMenu';

export function Navbar() {
  const { session } = UserAuth();

  return (
    <div className='bg-white p-2'>
      <div className='container flex items-center justify-between mx-auto '>
        <div className='flex gap-2 items-center justify-center'>
          <img
            src={iconMoney}
            className='flex items-center justify-center p-2 bg-[#1C69E3] rounded-xl'
          />
          <p className='font-bold text-xl'>FinTrack</p>
        </div>
        <div>
          <DropdownMenuAvatar email={session?.user?.email} />
        </div>
      </div>
    </div>
  );
}
