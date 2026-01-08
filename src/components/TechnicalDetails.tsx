import { Card } from "@/components/ui/card";
import { Shield, Server, Zap, Clock } from "lucide-react";

const TechnicalDetails = () => {
  const features = [
    {
      icon: Server,
      title: "Automatización Fail Fast",
      description: "Flujos de automatización dedicados",
    },
    {
      icon: Zap,
      title: "Gemini Flash IA",
      description: "Modelo de lenguaje de última generación",
    },
    {
      icon: Shield,
      title: "Conexión Simba/DIAN",
      description: "Integración certificada para facturación",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Monitoreo y soporte continuo",
    },
  ];

  return (
    <Card className="p-6 md:p-8 bg-card border-border shadow-card">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Reserva de Capacidad Garantizada
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Los planes aseguran disponibilidad 24/7 de infraestructura Fail Fast, Gemini Flash IA y 
          conexión Simba/DIAN para tu operación sin interrupciones.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
          >
            <div className="p-3 rounded-full bg-primary/10 mb-3">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TechnicalDetails;