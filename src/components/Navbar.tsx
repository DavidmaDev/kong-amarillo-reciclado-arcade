
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-arcade-yellow py-4 sticky top-0 z-50 border-b-4 border-arcade-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg md:text-2xl font-bold uppercase tracking-widest text-arcade-brown">
            <span className="animate-pixel-shift inline-block">D</span>ONKEY 
            <span className="animate-pixel-shift inline-block ml-1">K</span>ONG 
            <span className="text-arcade-red">ARCADE</span>
          </h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#materiales">Materiales</NavLink>
          <NavLink href="#galeria">Galería</NavLink>
          <NavLink href="#caracteristicas">Características</NavLink>
        </div>
        <Button className="pixel-btn">Contacto</Button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-arcade-brown font-bold hover:text-arcade-red transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;
