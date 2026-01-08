import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowDown, TrendingDown } from "lucide-react";

interface CostBreakdownProps {
  isCOP: boolean;
}

const CostBreakdown = ({ isCOP }: CostBreakdownProps) => {
  const EXCHANGE_RATE = 4000;

  const plans = [
    { name: "Growth 3K", cost: 0.06, color: "bg-secondary text-secondary-foreground" },
    { name: "Growth 5K", cost: 0.05, color: "bg-secondary text-secondary-foreground" },
    { name: "Growth 8K", cost: 0.04, color: "bg-primary text-primary-foreground" },
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
          <h2 className="text-lg font-semibold text-foreground">Costo por Interacción</h2>
          <p className="text-sm text-muted-foreground">Comparativa de costos unitarios</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
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
      </div>

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