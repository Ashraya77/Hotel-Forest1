import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop",
    title: "Mountain Vista"
  },
  {
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=736&auto=format&fit=crop",
    title: "Ocean Waves"
  },
  {
    src: "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?q=80&w=736&auto=format&fit=crop",
    title: "Urban Skyline"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=736&auto=format&fit=crop",
    title: "Beach Sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=736&auto=format&fit=crop",
    title: "Street Fashion"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=736&auto=format&fit=crop",
    title: "Modern Design"
  }
];

function ImageCard({ image, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-56 flex-1 min-w-[250px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
      }}
    >
      <img
        src={image.src}
        alt={image.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Dark overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-end p-4 text-white transition-all duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <h2 className="text-xl font-medium mb-2">{image.title}</h2>
        <button className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors w-fit group/btn">
          Show More
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="min-h-screen w-full bg-white py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Our Latest Memories
          </h1>
          <p className="text-sm lg:text-base text-slate-500 max-w-2xl mx-auto">
            A visual collection of our most recent works - each piece crafted with
            intention, emotion, and style.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {galleryImages.map((image, idx) => (
            <ImageCard key={idx} image={image} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}