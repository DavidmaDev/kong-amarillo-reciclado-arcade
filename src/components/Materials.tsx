
import { Card, CardContent } from "@/components/ui/card";

const materials = [
  {
    name: "Madera Reciclada",
    description: "Tableros recuperados de muebles viejos para la estructura principal",
    icon: "🪵"
  },
  {
    name: "Botones Reutilizados",
    description: "Controles recuperados de dispositivos electrónicos obsoletos",
    icon: "🔘"
  },
  {
    name: "Pantalla Recuperada",
    description: "Monitor LCD restaurado que estaba destinado a desecharse",
    icon: "🖥️"
  },
  {
    name: "Circuitos Renovados",
    description: "Componentes electrónicos de segunda mano probados y funcionales",
    icon: "🔌"
  },
  {
    name: "Pintura Ecológica",
    description: "Acabados realizados con pinturas de bajo impacto ambiental",
    icon: "🎨"
  },
  {
    name: "Vidrio Reciclado",
    description: "Cubierta frontal hecha con vidrio rescatado",
    icon: "🪟"
  },
];

const Materials = () => {
  return (
    <section id="materiales" className="py-20 bg-arcade-yellow">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-arcade-brown mb-4">Materiales Reciclados</h2>
          <p className="text-arcade-brown max-w-2xl mx-auto text-lg">
            Nuestra máquina arcade está construida casi en su totalidad
            con materiales recuperados y reciclados, dando nueva vida a componentes
            que de otro modo terminarían como residuos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <Card key={index} className="pixel-borders bg-arcade-beige overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{material.icon}</div>
                <h3 className="text-arcade-brown text-xl font-bold mb-2">{material.name}</h3>
                <p className="text-arcade-brown">{material.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
