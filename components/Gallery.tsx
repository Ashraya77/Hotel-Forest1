export default function Gallery() {
  return (
    <>
      <div className="my-10 min-h-screen w-full px-60">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>

        <h1 className="text-3xl font-semibold text-center">
          Our Latest Memories
        </h1>

        <p className="text-sm text-slate-500 text-center mt-2">
          A visual collection of our most recent works - each piece crafted with
          intention, emotion, and style.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-12 gap-4">
          <div className="relative group rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop"
              alt="image"
              className="h-56 w-auto object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                {/* SVG here */}
              </a>
            </div>
          </div>

          {/* Repeat other images similarly */}
        </div>
      </div>
    </>
  );
}
