import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: number;
  isCOP: boolean;
  interactions: number;
  users: number;
  docs: number;
  costPerInteraction: number;
  isElite?: boolean;
  isRecommended?: boolean;
}

const PricingCard = ({
  name,
  price,
  isCOP,
  interactions,
  users,
  docs,
  costPerInteraction,
  isElite = false,
  isRecommended = false,
}: PricingCardProps) => {
  const EXCHANGE_RATE = 4000;
  const displayPrice = isCOP ? price * EXCHANGE_RATE : price;
  const displayCostPerInteraction = isCOP 
    ? costPerInteraction * EXCHANGE_RATE 
    : costPerInteraction;

  const formatPrice = (value: number) => {
    if (isCOP) {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatInteractionCost = (value: number) => {
    if (isCOP) {
      return `$${Math.round(value)} COP`;
    }
    return `$${value.toFixed(2)} USD`;
  };

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover-lift ${
        isElite
          ? 'border-primary/30 card-elite ring-1 ring-primary/20'
          : 'border-border shadow-card'
      }`}
    >
      {isElite && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow-lg">
            <Sparkles className="w-3 h-3 mr-1" />
            Best Value
          </Badge>
        </div>
      )}
      
      {isRecommended && !isElite && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold border border-primary/30 bg-primary/10 text-primary">
            Recomendado
          </Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">
          {interactions.toLocaleString()} interacciones/mes
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">
            {formatPrice(displayPrice)}
          </span>
          <span className="text-muted-foreground text-sm">/mes</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Costo por interacción: <span className="font-medium text-foreground">{formatInteractionCost(displayCostPerInteraction)}</span>
        </p>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        <li className="flex items-center gap-2 text-sm text-foreground">
          <Check className="w-4 h-4 text-primary flex-shrink-0" />
          <span>{interactions.toLocaleString()} interacciones IA</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-foreground">
          <Check className="w-4 h-4 text-primary flex-shrink-0" />
          <span>{users} usuarios activos</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-foreground">
          <Check className="w-4 h-4 text-primary flex-shrink-0" />
          <span>{docs.toLocaleString()} docs DIAN incluidos</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-foreground">
          <Check className="w-4 h-4 text-primary flex-shrink-0" />
          <span>Soporte prioritario 24/7</span>
        </li>
      </ul>

      <Button
        className={`w-full ${
          isElite
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        {isElite ? 'Comenzar ahora' : 'Seleccionar plan'}
      </Button>
    </div>
  );
};

export default PricingCard;