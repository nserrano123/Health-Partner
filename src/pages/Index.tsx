import { useState } from "react";
import CurrencyToggle from "@/components/CurrencyToggle";
import PricingCard from "@/components/PricingCard";
import ROICalculator from "@/components/ROICalculator";
import CostBreakdown from "@/components/CostBreakdown";
import TechnicalDetails from "@/components/TechnicalDetails";

const Index = () => {
  const [isCOP, setIsCOP] = useState(false);

  const plans = [
    {
      name: "Growth  3K",
      price: 650,
      interactions: 3000,
      users: 15,
      enterprise: 3,
      docs: 1000,
      costPerInteraction: 0.06,
    },
    {
      name: "Growth 5K",
      price: 735,
      interactions: 5000,
      users: 15,
      enterprise: 3,
      docs: 2000,
      costPerInteraction: 0.05,
    },
    {
      name: "Growth 8K",
      price: 795,
      interactions: 8000,
      users: 15,
      enterprise: 3,
      docs: 3000,
      costPerInteraction: 0.04,
      isElite: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Evolución Digital{" "}
                <span className="text-gradient">ESVITAL</span>
              </h1>
              <h2 className="text-2xl font-bold text-foreground">
                Plan Growth{" "}
                {/* <span className="text-gradient">ESVITAL</span> */}
              </h2>
              
              <p className="text-sm text-muted-foreground">
                Pricing
              </p>
            </div>
            <CurrencyToggle isCOP={isCOP} onToggle={setIsCOP} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automatiza tu clínica con{" "}
            <span className="text-gradient">Inteligencia Artificial</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tu flujo de pacientes.
          </p>
        </section>

        {/* Pricing Cards */}
        <section 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          style={{ animationDelay: "0.1s" }}
        >
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <PricingCard
                {...plan}
                isCOP={isCOP}
              />
            </div>
          ))}
        </section>

        {/* ROI Calculator
        <section 
          className="animate-fade-in" 
          style={{ animationDelay: "0.4s" }}
        >
          <ROICalculator isCOP={isCOP} />
        </section> */}

        {/* Cost Breakdown */}
        <section 
          className="animate-fade-in" 
          style={{ animationDelay: "0.5s" }}
        >
          <CostBreakdown isCOP={isCOP} />
        </section>

        {/* Technical Details */}
        <section 
          className="animate-fade-in" 
          style={{ animationDelay: "0.6s" }}
        >
          <TechnicalDetails />
        </section>

        {/* Footer Note */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Tasa de cambio: 1 USD = 4,000 COP • Precios sujetos a cambios
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;