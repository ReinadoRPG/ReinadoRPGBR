import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface ShopItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  popular?: boolean;
  packageItems?: string[];
}

export default function ShopItem({
  id,
  name,
  description,
  price,
  icon,
  popular,
  packageItems,
}: ShopItemProps) {
  const [showPackage, setShowPackage] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, name, price });
    setShowFeedback(true);
  };

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => setShowFeedback(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback]);

  return (
    <Card
      className="bg-stone-900/90 dark:bg-stone-900/90 border-amber-900/50 relative overflow-visible"
      data-testid={`shop-item-${id}`}
    >
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={ { opacity: 0, x: 20, scale: 0.95 } }
            animate={ { opacity: 1, x: 0, scale: 1 } }
            exit={ { opacity: 0, x: 10, scale: 0.95 } }
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-48 bg-amber-600 text-white p-3 rounded-lg shadow-xl border border-amber-400 flex items-center gap-2 pointer-events-none"
          >
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span className="font-medieval text-sm leading-tight">Adicionado ao carrinho!</span>
          </motion.div>
        )}
      </AnimatePresence>      {popular && (
        <Badge
          className="absolute -top-2 -right-2 bg-amber-600 text-white font-medieval"
          data-testid={`badge-popular-${id}`}
        >
          Popular
        </Badge>
      )}

      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="text-amber-400">{icon}</div>
        <div className="flex-1">
          <h3 className="font-medieval text-lg text-amber-300">{name}</h3>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="font-body text-amber-200/80 text-sm">{description}</p>

        {packageItems && packageItems.length > 0 && (
          <div>
            <Button
              variant="ghost"
              size="sm"
              className="text-amber-400 w-full justify-between"
              onClick={() => setShowPackage(!showPackage)}
              data-testid={`button-view-package-${id}`}
            >
              {showPackage ? "Fechar" : "Ver Pacote"}
              {showPackage ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>

            {showPackage && (
              <div className="mt-2 bg-stone-800/50 rounded-lg p-3 space-y-1">
                {packageItems.map((item, index) => (
                  <p
                    key={index}
                    className="text-amber-200/70 text-xs font-body flex items-start gap-2"
                  >
                    <span className="text-amber-500">-</span>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-2 gap-2 flex-wrap">
          <span className="font-medieval text-xl text-amber-400">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          <Button
            className="bg-amber-700 text-white font-medieval gap-2"
            onClick={handleAddToCart}
            data-testid={`button-add-cart-${id}`}
          >
            <Plus className="w-4 h-4" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
