
const features = [
  {
    title: "Juego Original",
    description: "Emula fielmente la versión clásica de arcade de Donkey Kong lanzada por Nintendo en 1981",
    icon: "🎮"
  },
  {
    title: "Controles Auténticos",
    description: "Joystick y botones con la misma disposición y sensación que la máquina original",
    icon: "🕹️"
  },
  {
    title: "Sonido de Época",
    description: "Reproducciones fieles de los efectos sonoros y música del juego original",
    icon: "🔊"
  },
  {
    title: "Modo Multijugador",
    description: "Permite alternar entre jugadores como en la experiencia arcade original",
    icon: "👥"
  }
];

const Features = () => {
  return (
    <section id="caracteristicas" className="py-20 bg-arcade-brown">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-arcade-beige mb-6">Características del Juego</h2>
            <p className="text-arcade-beige mb-8 text-lg">
              Nuestra máquina arcade reciclada ofrece la experiencia completa y auténtica del 
              clásico Donkey Kong, con todas las características que hicieron este juego legendario.
            </p>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-arcade-beige text-xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-arcade-beige opacity-80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pixel-borders p-4 bg-arcade-black rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-[4/3] bg-arcade-black flex flex-col items-center justify-center p-4">
              <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
                  {Array(64).fill(null).map((_, i) => (
                    <div key={i} className={`border border-arcade-beige ${i % 3 === 0 ? 'bg-arcade-red' : ''}`}></div>
                  ))}
                </div>
                
                <div className="text-arcade-yellow text-center">
                  <div className="text-4xl mb-4 font-pixel">GAME PLAY</div>
                  <div className="flex justify-center space-x-2">
                    <span className="inline-block w-3 h-3 bg-arcade-red animate-pulse"></span>
                    <span className="inline-block w-3 h-3 bg-arcade-red animate-pulse delay-75"></span>
                    <span className="inline-block w-3 h-3 bg-arcade-red animate-pulse delay-150"></span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-arcade-brown w-full text-center p-2 pixel-borders">
                <p className="text-arcade-beige text-sm">Presiona START para jugar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
