
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center overflow-hidden bg-arcade-darkyellow">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><rect width=\"10\" height=\"10\" fill=\"%23663300\"/></svg>')] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="mb-6 text-arcade-brown leading-tight">
            <span className="block">DONKEY KONG</span>
            <span className="text-arcade-red animate-blink">RECICLADO</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-arcade-beige max-w-lg">
            Una máquina arcade construida con materiales reciclados, 
            rindiendo homenaje al clásico juego de Nintendo pero con 
            conciencia ecológica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="pixel-btn">Ver Proyecto</Button>
            <Button variant="outline" className="bg-transparent border-4 border-arcade-brown text-arcade-brown hover:bg-arcade-brown hover:text-arcade-beige">
              Cómo se Hizo
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="pixel-borders bg-arcade-brown p-4 max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="pixel-borders bg-arcade-black p-2">
              <div className="aspect-square bg-black relative overflow-hidden">
                {/* Placeholder for arcade machine image */}
                <div className="absolute inset-0 flex items-center justify-center bg-arcade-black text-arcade-yellow">
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-2">DONKEY KONG</p>
                    <p className="text-sm">Imagen de la Máquina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
