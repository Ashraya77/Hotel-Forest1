"use client"
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import React from 'react';


const Page = () => {
    const {logout} = useAuthStore();

    const router = useRouter();

    const handleLogOut = async()=>{
    await logout()
    router.push("/")
  }
  return (
    <div className="flex h-220 mx-60">
     <div className="bg-green-100 border rounded-2xl p-8 w-1/3 m-5">
        <h1 className="text-3xl font-bold text-center mb-6">Profile Settings</h1>
        <ul className="space-y-4 mb-6">
          <li className="cursor-pointer hover:text-teal-500">Personal Details</li>
          <li className="cursor-pointer hover:text-teal-500">Payment Information</li>
          <li className="cursor-pointer hover:text-teal-500">Safety</li>
          <li className="cursor-pointer hover:text-teal-500">Preferences</li>
        </ul>

        <button
        onClick={handleLogOut}
        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition">
          Logout
        </button>
      </div>

      <div className="flex-1 bg-white rounded-2xl p-8 m-5">
        <h1 className="text-4xl font-semibold mb-4">Personal Details</h1>
        <p className="text-gray-600">View and edit your personal details here.</p>
        <img src="1.jpg"
        className='h-30 w-30 rounded-full m-5'
        alt="" />

        <div className='text-2xl p-5 flex flex-col gap-5'>
        <h1>Name:  </h1>
        <h1>Address: </h1>
        <h1>Address: </h1>  
        </div>
      
      </div>
    </div>
  );
};

export default Page;
