import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CurrencyToggleProps {
  isCOP: boolean;
  onToggle: (value: boolean) => void;
}

const CurrencyToggle = ({ isCOP, onToggle }: CurrencyToggleProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full bg-card px-4 py-2 shadow-card border border-border">
      <Label 
        htmlFor="currency-toggle" 
        className={`text-sm font-medium transition-colors ${!isCOP ? 'text-foreground' : 'text-muted-foreground'}`}
      >
        USD
      </Label>
      <Switch
        id="currency-toggle"
        checked={isCOP}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-primary"
      />
      <Label 
        htmlFor="currency-toggle" 
        className={`text-sm font-medium transition-colors ${isCOP ? 'text-foreground' : 'text-muted-foreground'}`}
      >
        COP
      </Label>
    </div>
  );
};

export default CurrencyToggle;