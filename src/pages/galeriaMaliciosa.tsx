import { useState } from "react";

type postagemDTO = {
   id: number
   name: string
   capaVideo: string
   video: string
}

const videos: postagemDTO[] = [
   { id: 1, name: "Vídeo 1", capaVideo: "thumb1.jpg", video: "video1.mp4" },
   { id: 2, name: "Vídeo 2", capaVideo: "thumb2.jpg", video: "video2.mp4" },
   { id: 3, name: "Vídeo 3", capaVideo: "thumb3.jpg", video: "video3.mp4" },
];

export function GaleriaMaliciosa() {
   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
   const [search, setSearch] = useState("");

   const filteredVideos = videos.filter((video) =>
      video.name.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <div className="flex flex-col min-h-screen">
         {/* Header */}
         <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
            Galeria de Vídeos
         </header>

         {/* Search Bar */}
         <div className="p-4">
            <input
               type="text"
               placeholder="Pesquisar vídeos..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full p-2 border rounded-md"
            />
         </div>

         {/* Main Content */}
         <main className="flex-grow p-6 max-w-4xl mx-auto">
            {selectedVideo ? (
               <div className="mb-4">
                  <video
                     src={selectedVideo}
                     controls
                     autoPlay
                     className="w-full rounded-lg shadow-lg"
                  />
                  <button
                     className="mt-2 text-blue-500 hover:underline"
                     onClick={() => setSelectedVideo(null)}
                  >
                     Voltar à Galeria
                  </button>
               </div>
            ) : (
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredVideos.map((video) => (
                     <div
                        key={video.id}
                        className="relative cursor-pointer"
                        onClick={() => setSelectedVideo(video.video)}
                     >
                        <img
                           src={video.capaVideo}
                           alt={video.name}
                           className="w-full rounded-lg shadow-md hover:opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <span className="text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">▶</span>
                        </div>
                        <p className="text-center mt-2 font-semibold">{video.name}</p>
                     </div>
                  ))}
               </div>
            )}
         </main>

         {/* Footer */}
         <footer className="bg-gray-800 text-white text-center p-4 mt-6">
            © 2025 Galeria de Vídeos. Todos os direitos reservados.
         </footer>
      </div>
   );
}
