import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowDown, TrendingDown } from "lucide-react";

interface CostBreakdownProps {
  isCOP: boolean;
}

const CostBreakdown = ({ isCOP }: CostBreakdownProps) => {
  const EXCHANGE_RATE = 4000;

  const plans = [
    { name: "Starter 500", cost: 0.06, color: "bg-secondary text-secondary-foreground" },
    { name: "Starter 1K", cost: 0.05, color: "bg-secondary text-secondary-foreground" },
    { name: "Starter 2K", cost: 0.04, color: "bg-primary text-primary-foreground" },
  ];

  const formatCost = (value: number) => {
    const displayValue = isCOP ? value * EXCHANGE_RATE : value;
    if (isCOP) {
      return `$${Math.round(displayValue)} COP`;
    }
    return `$${value.toFixed(2)} USD`;
  };

  const savings = ((0.06 - 0.04) / 0.06 * 100).toFixed(0);

  return (
    <Card className="p-6 bg-card border-border shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <TrendingDown className="w-5 h-5 text-primary" />
        </div>
        <div>
           <div> <h2 className="text-lg font-semibold text-foreground">Tipos de Interacciones - AI Agent</h2> <br />
          </div>
         

          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
            <li>
              <strong>Atención Inbound:</strong> Respuestas a dudas y agendamiento iniciado por el paciente.
            </li>
            <li>
              <strong>Agendamiento Outbound Operativo:</strong> Programación y confirmación de citas.
            </li>
            <li>
              <strong>Esquema de Recordatorios de Cita:</strong> Hasta tres (3) avisos previos a la fecha reservada.
            </li>
            <li>
              <strong>Gestión de Cumpleaños:</strong> Saludo automatizado con contenido multimedia.
            </li>
            <li>
              <strong>Recordatorios de Procedimiento (Recurrencia):</strong> Avisos proactivos según la periodicidad médica de cada tratamiento para fomentar la continuidad del paciente.
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        {plans.map((plan, index) => (
          <div key={plan.name} className="flex items-center gap-2">
            <Badge className={`${plan.color} px-3 py-1.5 text-sm font-medium`}>
              {plan.name}: {formatCost(plan.cost)}
            </Badge>
            {index < plans.length - 1 && (
              <ArrowDown className="w-4 h-4 text-primary rotate-[-90deg]" />
            )}
          </div>
        ))}
      </div> */}

      {/* <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-sm text-muted-foreground">
          Con el <span className="font-semibold text-primary">Plan Growth</span> ahorras hasta{" "}
          <span className="font-bold text-primary">{savings}%</span> por interacción vs Essential
        </p>
      </div> */}
    </Card>
  );
};

export default CostBreakdown;