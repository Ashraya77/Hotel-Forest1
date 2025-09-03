"use client"
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-hot-toast';

const SignupPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const {signInWithGoogle} = useAuthStore()
  const auth = getAuth();
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success("User registered successfully!");

      
      router.push("/")
  
    } catch (err: any) {
     console.log(err.message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center "
     style={{ backgroundImage: "url('/7.jpg')" }}
    >
      <form 
        onSubmit={handleSubmit} 
        className="bg-white/50 p-6 rounded-2xl shadow-md flex flex-col gap-4 w-80 "
      >
        <h1 className="text-xl font-bold text-center">Sign Up</h1>

        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          
        />

        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          
        />

        <button 
          type="submit" 
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
         <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 bg-white-500 hover:bg-red-600 text-black  py-2 rounded-lg transition"
        >
        <img src="/google.png"
        className="h-8 w-8"
        alt="" />  Continue with Google
        </button>
      </form>
    
    </div>
  )
}

export default SignupPage
