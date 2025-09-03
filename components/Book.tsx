"use client"
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const Book = () => {

  const router = useRouter()
  const { user  } = useAuthStore();

  const click = ()=>{
    if(!user){
      toast.error("Please Login First")
      router.push("/login");
    }else{
      router.push("/rooms")
    }
  }
  return (
    <div className="-mt-0 top-5 left-0 relative z-1 flex justify-center">
        <div className=''>
            <button
            onClick={click}
            className='bg-amber-300 p-2 rounded-xl  hover:bg-amber-500 px-10 py-3  flex items-center'>
            View Available Rooms
        </button>
        </div>
        
    </div>
  )
}

export default Book
