import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { items, totalItems, totalPrice, addItem, removeItem, clearCart, checkout } = useCart();

  const handleCheckout = () => {
    setShowTermsModal(true);
  };

  const confirmCheckout = () => {
    if (!acceptedTerms) return;

    const message = `Olá ReinadoRPG! Gostaria de finalizar minha compra:\n\n${items
      .map((item) => `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}`)
      .join("\n")}\n\n*Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/14998199235?text=${encodedMessage}`, "_blank");
    
    setIsOpen(false);
    setShowTermsModal(false);
    clearCart();
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-amber-400"
            data-testid="button-cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-stone-900 dark:bg-stone-900 border-amber-900/50 w-80">
          <SheetHeader>
            <SheetTitle className="font-medieval text-amber-400 text-xl text-center">Baú de Compras</SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 flex flex-col gap-4 h-[calc(100vh-200px)] overflow-y-auto pr-2">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full opacity-40">
                <ShoppingCart className="w-12 h-12 mb-2" />
                <p className="text-amber-200 text-center font-body italic">O seu baú está vazio...</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-stone-800/50 border border-amber-900/20 rounded-lg p-4 flex flex-col gap-2"
                  data-testid={`cart-item-${item.id}`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-medieval text-amber-300 text-sm leading-tight">{item.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-900 hover:text-red-500 h-6 w-6"
                      onClick={() => {
                        for (let i = 0; i < item.quantity; i++) {
                          removeItem(item.id);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-amber-800/50 text-amber-600"
                        onClick={() => removeItem(item.id)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="text-amber-200 w-6 text-center font-medieval">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-amber-800/50 text-amber-600"
                        onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <span className="text-amber-400 font-bold font-medieval">
                      R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-stone-900 border-t border-amber-900/50 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-6">
                <span className="font-medieval text-amber-600">Total do Apoio:</span>
                <span className="font-medieval text-amber-400 text-2xl">
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <Button
                className="w-full bg-amber-700 hover:bg-amber-600 text-white font-medieval h-12 text-lg border-b-4 border-amber-900 active:border-b-0 active:translate-y-1 transition-all"
                onClick={handleCheckout}
                data-testid="button-checkout"
              >
                Finalizar Compra
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Dialog open={showTermsModal} onOpenChange={setShowTermsModal}>
        <DialogContent className="bg-stone-950 border-2 border-amber-600/50 text-amber-100 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-medieval text-2xl text-amber-500 text-center">
              Termos de Aquisição
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm font-body text-amber-100/80 leading-relaxed">
              Antes de prosseguir para o WhatsApp, confirme que você leu e concorda com os 
              <Link href="/termos" className="text-amber-500 hover:underline mx-1 inline-flex items-center gap-1" onClick={() => setShowTermsModal(false)}>
                Termos de Uso <ExternalLink className="w-3 h-3" />
              </Link>
              do ReinadoRPG.
            </p>
            <div className="flex items-start space-x-3 bg-amber-900/10 p-4 rounded-lg border border-amber-900/30">
              <Checkbox
                id="accept-terms-modal"
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                className="mt-1 border-amber-700 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
              />
              <Label
                htmlFor="accept-terms-modal"
                className="text-sm font-body text-amber-200 cursor-pointer leading-tight"
              >
                Eu aceito os termos de uso e entendo que as aquisições são doações 
                para a manutenção do reino.
              </Label>
            </div>
          </div>
          <DialogFooter className="flex flex-col gap-2 sm:flex-col">
            <Button
              className="w-full font-medieval bg-amber-700 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed h-11"
              disabled={!acceptedTerms}
              onClick={confirmCheckout}
            >
              Confirmar e Ir para WhatsApp
            </Button>
            <Button
              variant="ghost"
              className="w-full font-medieval text-amber-700 hover:text-amber-500"
              onClick={() => setShowTermsModal(false)}
            >
              Cancelar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
