import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Zap } from "lucide-react";

interface ROICalculatorProps {
  isCOP: boolean;
}

const PLANS = [
  { name: "Starter 500", interactions: 3000, price: 650 },
  { name: "Starter 1K", interactions: 5000, price: 735 },
  { name: "Starter 2K", interactions: 8000, price: 795 },
];

const ROICalculator = ({ isCOP }: ROICalculatorProps) => {
  const [dailyAppointments, setDailyAppointments] = useState([30]);

  const monthlyMessages = useMemo(() => {
    return dailyAppointments[0] * 3 * 30;
  }, [dailyAppointments]);

  const recommendedPlan = useMemo(() => {
    for (const plan of PLANS) {
      if (monthlyMessages <= plan.interactions) {
        return plan;
      }
    }
    return PLANS[PLANS.length - 1];
  }, [monthlyMessages]);

  const utilizationPercentage = useMemo(() => {
    return Math.min(100, Math.round((monthlyMessages / recommendedPlan.interactions) * 100));
  }, [monthlyMessages, recommendedPlan]);

  const EXCHANGE_RATE = 4000;

  const formatPrice = (value: number) => {
    const displayValue = isCOP ? value * EXCHANGE_RATE : value;
    if (isCOP) {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(displayValue);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(displayValue);
  };

  return (
    <Card className="p-6 md:p-8 bg-card border-border shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Calculadora ROI</h2>
          <p className="text-sm text-muted-foreground">Encuentra el plan perfecto para tu clínica</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Slider Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-foreground">
              Citas diarias atendidas
            </label>
            <span className="text-2xl font-bold text-primary">
              {dailyAppointments[0]}
            </span>
          </div>
          <Slider
            value={dailyAppointments}
            onValueChange={setDailyAppointments}
            max={150}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0 citas</span>
            <span>150 citas</span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Mensajes/Mes
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {monthlyMessages.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {dailyAppointments[0]} citas × 3 msg × 30 días
            </p>
          </div>

          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Plan Ideal
              </span>
            </div>
            <p className="text-2xl font-bold text-primary">
              {recommendedPlan.name}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {formatPrice(recommendedPlan.price)}/mes
            </p>
          </div>

          <div className="p-4 rounded-xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Utilización
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {utilizationPercentage}%
            </p>
            <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${utilizationPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Recommendation Message */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
          <p className="text-center text-foreground">
            <span className="text-muted-foreground">Tu plan ideal basado en este flujo es: </span>
            <span className="font-semibold text-primary">{recommendedPlan.name}</span>
            <span className="text-muted-foreground"> con capacidad para </span>
            <span className="font-semibold">{recommendedPlan.interactions.toLocaleString()}</span>
            <span className="text-muted-foreground"> interacciones IA mensuales.</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ROICalculator;