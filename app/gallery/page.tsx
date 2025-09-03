import React from 'react'

const Gallery = () => {
  const images = [
    {
      src: '/gallery/1.jpeg',
      title: 'Sunset View',
      desc: 'A breathtaking sunset over the hills.',
    },
    {
      src: '/gallery/2.jpeg',
      title: 'City Lights',
      desc: 'The city comes alive at night.',
    },
    {
      src: '/gallery/3.jpeg',
      title: 'Mountain Peaks',
      desc: 'Snow-covered mountains touching the sky.',
    },
    {
      src: '/gallery/4.jpeg',
      title: 'Calm Beach',
      desc: 'Waves gently hitting the golden sand.',
    },
    {
      src: '/gallery/5.jpeg',
      title: 'Forest Path',
      desc: 'A peaceful walk through the woods.',
    },
    {
      src: '/gallery/6.jpeg',
      title: 'Desert Dunes',
      desc: 'Golden dunes shaped by the wind.',
    },
    {
      src: '/gallery/7.jpeg',
      title: 'Flower Field',
      desc: 'Endless fields of colorful blossoms.',
    },
    {
      src: '/gallery/8.jpeg',
      title: 'Ancient Temple',
      desc: 'A glimpse into history and culture.',
    },
    {
      src: '/gallery/9.jpeg',
      title: 'Starry Night',
      desc: 'The Milky Way shining bright above.',
    },
  ]

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Gallery</h1>

      <div className="grid grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg bg-white"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
