"use client"
import {motion} from "framer-motion"
export default function HomeGallery() {


    return (
        <>
        <div className="bg-stone-200 py-10">

        
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <motion.div
            initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
            >

            <h1 className="text-3xl font-semibold text-[#28382C] text-center mx-auto mt-10">Our Recent Gallery</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            <div className="flex items-center gap-2 h-[400px] w-full max-w-340 mt-10 mx-auto mb-10">
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="1.jpg"
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="7.jpg"
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="8.jpg"
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="9.jpg"
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="10.jpg"
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="13.jpg"
                        alt="image" />
                </div>
            </div>
                        </motion.div>

            </div>
        </>
    );
};