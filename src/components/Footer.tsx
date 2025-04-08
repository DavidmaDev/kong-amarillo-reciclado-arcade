
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-arcade-black text-arcade-beige py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-arcade-yellow mb-4">DONKEY KONG ARCADE</h3>
            <p className="mb-4 opacity-80">
              Proyecto de reciclaje y gaming retro, combinando nostalgia y sostenibilidad
              en una experiencia arcade auténtica.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-arcade-yellow mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-arcade-red transition-colors">Inicio</a></li>
              <li><a href="#materiales" className="hover:text-arcade-red transition-colors">Materiales</a></li>
              <li><a href="#galeria" className="hover:text-arcade-red transition-colors">Galería</a></li>
              <li><a href="#caracteristicas" className="hover:text-arcade-red transition-colors">Características</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-arcade-yellow mb-4">Contacto</h4>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full p-2 bg-arcade-brown border-2 border-arcade-yellow text-arcade-beige"
              />
              <Button className="pixel-btn w-full">Suscribirse</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-arcade-brown mt-8 pt-8 text-center opacity-70">
          <p>&copy; {new Date().getFullYear()} Donkey Kong Arcade Reciclado. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
