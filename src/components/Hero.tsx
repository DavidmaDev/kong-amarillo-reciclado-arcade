
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center overflow-hidden bg-arcade-darkyellow">
      <div className="absolute inset-0 opacity-10">
        {/* Using encoded SVG to avoid parsing issues */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Crect%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23663300%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px]"></div>
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
                {/* Donkey Kong image */}
                <img 
                  src="/img/ImagenArcade" 
                  alt="Donkey Kong Arcade Machine" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
