
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  {
    thumbnail: "Vista Frontal",
    title: "Vista Frontal de la Máquina",
    description: "Diseño completo de la cabina con los gráficos de Donkey Kong"
  },
  {
    thumbnail: "Vista Lateral",
    title: "Perfil Lateral",
    description: "Detalles del acabado lateral y sistema de ventilación"
  },
  {
    thumbnail: "Panel de Control",
    title: "Panel de Controles",
    description: "Joystick y botones reciclados con disposición clásica"
  },
  {
    thumbnail: "Interior",
    title: "Vista Interior",
    description: "Organización interna de componentes electrónicos reciclados"
  },
  {
    thumbnail: "Pantalla en Acción",
    title: "Juego en Acción",
    description: "La máquina funcionando con el juego original de Donkey Kong"
  },
  {
    thumbnail: "Detalles Artísticos",
    title: "Artwork Personalizado",
    description: "Elementos artísticos personalizados pintados a mano"
  }
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openGallery = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  return (
    <section id="galeria" className="py-20 bg-arcade-darkyellow">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-arcade-beige mb-4">Galería</h2>
          <p className="text-arcade-beige max-w-2xl mx-auto">
            Explora nuestra máquina arcade de Donkey Kong construida con materiales reciclados
            desde diferentes ángulos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-square pixel-borders bg-arcade-black p-3 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => openGallery(index)}
            >
              <div className="h-full bg-arcade-brown flex items-center justify-center text-center p-4">
                <div>
                  <p className="text-arcade-beige text-lg font-bold mb-2">{image.thumbnail}</p>
                  <p className="text-sm text-arcade-beige opacity-70">Click para ampliar</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-arcade-yellow pixel-borders p-0 max-w-4xl">
          <div className="p-6">
            <h3 className="text-arcade-brown text-2xl font-bold mb-2">
              {images[selectedImage].title}
            </h3>
            <p className="text-arcade-brown mb-4">
              {images[selectedImage].description}
            </p>
            
            <div className="aspect-video bg-arcade-black flex items-center justify-center">
              <p className="text-arcade-beige">Imagen de {images[selectedImage].title}</p>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                className="pixel-btn bg-arcade-brown"
                onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
              >
                Anterior
              </button>
              <button 
                className="pixel-btn"
                onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
              >
                Siguiente
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
