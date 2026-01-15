import { Download, Monitor, Smartphone, Package, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function DownloadButton() {
  const { toast } = useToast();
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [showLauncherChoice, setShowLauncherChoice] = useState(false);

  const copyIP = (ip: string, type: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedType(type);
    toast({
      title: "IP Copiado!",
      description: `${ip} copiado com sucesso.`,
    });
    setTimeout(() => setCopiedType(null), 2000);
  };

  // Links configuráveis para o Launcher (mude conforme quiser)
  const LAUNCHER_PC_URL = "https://www.dropbox.com/scl/fi/rwf73xudtvywzspnteq4n/ReinadoPack.zip?rlkey=ey2b21e1hpijd3isys9g0wgtl&st=8kq8ewlv&dl=1";
  const LAUNCHER_MOBILE_URL = "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe";

  const handleLauncherChoice = (target: "pc" | "mobile") => {
    setShowLauncherChoice(false);
    if (target === "pc") {
      // Baixar versão PC (alterar link acima conforme tiver o instalador)
      window.open(LAUNCHER_PC_URL, "_blank");
    } else {
      // Redirecionar para Play Store / página mobile
      window.open(LAUNCHER_MOBILE_URL, "_blank");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="rounded-full w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 shadow-lg shadow-amber-900/50 border-2 border-amber-500/30"
                data-testid="button-download"
              >
                <Download className="w-6 h-6 text-white" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-stone-900 border-amber-700/50 text-amber-200">
            <p>Baixar Minecraft</p>
          </TooltipContent>
        </Tooltip>

        <DialogContent className="bg-stone-900 border-amber-700/50 text-amber-100 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-medieval text-3xl text-amber-400 text-center mb-2">
              Escolha sua Versão
            </DialogTitle>
            <DialogDescription className="text-center text-amber-200/80 font-body">
              Selecione a plataforma ou instalador desejado
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 h-16 border-amber-500/30 hover:bg-amber-900/20 hover:text-amber-400 hover:border-amber-500/60 transition-all group"
                onClick={() => window.open("https://www.dropbox.com/scl/fi/rwf73xudtvywzspnteq4n/ReinadoPack.zip?rlkey=ey2b21e1hpijd3isys9g0wgtl&st=8kq8ewlv&dl=1", "_blank")}
              >
                <Monitor className="w-6 h-6 mr-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="font-medieval text-lg">Resource Java Edition</span>
                  <span className="text-xs text-muted-foreground">Para PC</span>
                </div>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 border-amber-500/30 hover:bg-amber-900/20 text-amber-500"
                onClick={() => copyIP("jogar.reinadorpg.com.br", "java")}
              >
                {copiedType === 'java' ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 h-16 border-amber-500/30 hover:bg-amber-900/20 hover:text-amber-400 hover:border-amber-500/60 transition-all group"
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.mojang.minecraftpe", "_blank")}
              >
                <Smartphone className="w-6 h-6 mr-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="font-medieval text-lg">Bedrock Edition</span>
                  <span className="text-xs text-muted-foreground">Celular/Win 10+</span>
                </div>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 border-amber-500/30 hover:bg-amber-900/20 text-amber-500"
                onClick={() => copyIP("sd-br7.blazebr.com:25575", "bedrock")}
              >
                {copiedType === 'bedrock' ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </Button>
            </div>

            <Button
              variant="outline"
              className="h-16 border-amber-500/30 hover:bg-amber-900/20 hover:text-amber-400 hover:border-amber-500/60 transition-all group"
              onClick={() => setShowLauncherChoice(true)}
            >
              <Package className="w-6 h-6 mr-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                <span className="font-medieval text-lg">Launcher Oficial</span>
                <span className="text-xs text-muted-foreground">ReinadoRPG Installer</span>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog secundário para escolha do Launcher (PC / Mobile) */}
      {showLauncherChoice && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="bg-black/50 absolute inset-0" onClick={() => setShowLauncherChoice(false)} />
          <div className="bg-stone-900 border-amber-700/50 text-amber-100 sm:max-w-sm w-full mx-4 p-6 z-10 rounded-md border-2">
            <h3 className="font-medieval text-2xl text-amber-400 mb-3 text-center">Launcher Oficial</h3>
            <p className="text-amber-200/80 mb-4 text-sm text-center">Deseja baixar o Launcher para PC ou para Celular?</p>
            <div className="flex gap-3">
              <Button className="flex-1 bg-amber-700 hover:bg-amber-600" onClick={() => handleLauncherChoice("pc")}>PC</Button>
              <Button variant="outline" className="flex-1 border-amber-700/40 text-amber-200" onClick={() => handleLauncherChoice("mobile")}>Celular</Button>
            </div>
            <div className="mt-4 text-center">
              <Button variant="ghost" className="text-amber-500" onClick={() => setShowLauncherChoice(false)}>Cancelar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}