import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { X, Bell } from "lucide-react";

// CONFIGURAÇÃO DOS AVISOS
// Mude 'AVISOS_ATIVOS' para false se quiser desativar o sistema de avisos
const AVISOS_ATIVOS = true;

// ARRAY DE AVISOS
// Mude o 'id' para que o aviso reapareça para todos os usuários
const avisosData = [
  {
    id: "14.01.2026",
    titulo: "⚔ Aviso do Reino!",
    mensagem: "Bem-vindos ao ReinadoRPG! Explore nosso novo mapa e aproveite as promoções da loja!",
  },
];

export function Announcements() {
  const [activeAvisos, setActiveAvisos] = useState<typeof avisosData>([]);
  const [dontShowAgain, setDontShowAgain] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!AVISOS_ATIVOS) return;

    const filtered = avisosData.filter((aviso) => {
      const isHidden = localStorage.getItem(`avisoReinadoRPG_${aviso.id}`) === "oculto";
      return !isHidden;
    });
    setActiveAvisos(filtered);
  }, []);

  const handleDismiss = (id: string) => {
    if (dontShowAgain[id]) {
      localStorage.setItem(`avisoReinadoRPG_${id}`, "oculto");
    }
    setActiveAvisos((prev) => prev.filter((a) => a.id !== id));
  };

  if (!AVISOS_ATIVOS || activeAvisos.length === 0) return null;

  return (
    <div className="fixed bottom-24 right-6 z-[60] flex flex-col gap-4 max-w-[280px] w-full pointer-events-none">
      <AnimatePresence>
        {activeAvisos.map((aviso) => (
          <motion.div
            key={aviso.id}
            initial={ { opacity: 0, x: 50, scale: 0.9 } }
            animate={ { opacity: 1, x: 0, scale: 1 } }
            exit={ { opacity: 0, scale: 0.5, transition: { duration: 0.2 } } }
            className="pointer-events-auto"
          >
            <Card className="bg-stone-950/95 border-2 border-amber-600/50 shadow-[0_0_15px_rgba(217,119,6,0.2)] overflow-hidden">
              <CardHeader className="bg-amber-900/20 pb-2 flex flex-row items-center justify-between border-b border-amber-900/30">
                <CardTitle className="font-medieval text-amber-500 flex items-center gap-2 text-lg">
                  <Bell className="w-4 h-4" />
                  {aviso.titulo}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-amber-700 hover:text-amber-500"
                  onClick={() => handleDismiss(aviso.id)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="font-body text-amber-100/90 leading-relaxed text-sm">
                  {aviso.mensagem}
                </p>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`dont-show-${aviso.id}`}
                    checked={dontShowAgain[aviso.id] || false}
                    onCheckedChange={(checked) => 
                      setDontShowAgain(prev => ({ ...prev, [aviso.id]: checked === true }))
                    }
                    className="border-amber-700 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                  />
                  <Label
                    htmlFor={`dont-show-${aviso.id}`}
                    className="text-xs text-amber-700 cursor-pointer font-body"
                  >
                    Não exibir novamente
                  </Label>
                </div>

                <Button
                  className="w-full font-medieval bg-amber-700 hover:bg-amber-600 text-white border-b-4 border-amber-900 active:border-b-0 active:translate-y-1 transition-all"
                  onClick={() => handleDismiss(aviso.id)}
                >
                  Entendido!
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
