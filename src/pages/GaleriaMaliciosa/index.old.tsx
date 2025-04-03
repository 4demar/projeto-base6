import { useState } from "react";
import { FaPlay } from "react-icons/fa";

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
   { id: 4, name: "Vídeo 4", capaVideo: "thumb4.jpg", video: "video4.mp4" },
];

export function GaleriaMaliciosa() {
   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
   const [search, setSearch] = useState("");

   const filteredVideos = videos.filter((video) =>
      video.name.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <div className="d-flex flex-column min-vh-100">
         {/* Header */}
         <header className="bg-primary text-white text-center py-3">
            <h1>Galeria de Vídeos</h1>
         </header>

         {/* Search Bar */}
         <div className="container mt-3">
            <input
               type="text"
               className="form-control"
               placeholder="Pesquisar vídeos..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
         </div>

         {/* Main Content */}
         <main className="container my-4 flex-grow-1">
            {selectedVideo ? (
               <div className="text-center">
                  <video src={selectedVideo} controls autoPlay className="w-100 rounded shadow" />
                  <button className="btn btn-link mt-3" onClick={() => setSelectedVideo(null)}>
                     Voltar à Galeria
                  </button>
               </div>
            ) : (
               <div className="row g-3">
                  {filteredVideos.map((video) => (
                     <div key={video.id} className="col-6 col-md-4">
                        <div
                           className="card border-0 shadow-sm position-relative cursor-pointer"
                           onClick={() => setSelectedVideo(video.video)}
                        >
                           <img src={video.capaVideo} alt={video.name} className="card-img-top" />
                           <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 text-white rounded-circle p-2">
                              <FaPlay />
                           </div>

                           <div className="card-body text-center">
                              <h6 className="card-title">{video.name}</h6>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </main>

         {/* Footer */}
         <footer className="bg-dark text-white text-center py-3 mt-4">
            © 2025 Galeria de Vídeos. Todos os direitos reservados.
         </footer>
      </div>
   );
}
