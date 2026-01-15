import { Download, Monitor, Smartphone, Package, Copy, Check, Laptop, Smartphone as PhoneIcon } from "lucide-react";
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
import MusicToggleButton from "@/components/MusicToggleButton";

export default function DownloadButton() {
  const { toast } = useToast();
  const [copiedType, setCopiedType] = useState<string | null>(null);
  // Atualize os links abaixo quando os instaladores estiverem prontos.
  const launcherLinks = {
    pc: "#",
    mobile: "#",
  };

  const copyIP = (ip: string, type: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedType(type);
    toast({
      title: "IP Copiado!",
      description: `${ip} copiado com sucesso.`,
    });
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <div className="flex items-center gap-3">
        <MusicToggleButton />
        <Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 shadow-lg shadow-amber-900/50 border-2 border-amber-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-amber-800/50"
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
                  {copiedType === "java" ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
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
                  {copiedType === "bedrock" ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                </Button>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-16 border-amber-500/30 hover:bg-amber-900/20 hover:text-amber-400 hover:border-amber-500/60 transition-all group"
                  >
                    <Package className="w-6 h-6 mr-4 text-amber-500 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col items-start">
                      <span className="font-medieval text-lg">Launcher Oficial</span>
                      <span className="text-xs text-muted-foreground">ReinadoRPG Installer</span>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-stone-900 border-amber-700/50 text-amber-100 sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle className="font-medieval text-2xl text-amber-400 text-center">
                      Qual launcher deseja?
                    </DialogTitle>
                    <DialogDescription className="text-center text-amber-200/80 font-body">
                      Escolha a plataforma do instalador.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-3 mt-4">
                    <Button
                      variant="outline"
                      className="h-14 border-amber-500/30 hover:bg-amber-900/20 hover:text-amber-400 hover:border-amber-500/60 transition-all group justify-start"
                      onClick={() => window.open(launcherLinks.pc, "_blank")}
                    >
                      <Laptop className="w-5 h-5 mr-3 text-amber-500 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col items-start">
                        <span className="font-medieval text-lg">Launcher Para PC</span>
                        <span className="text-xs text-muted-foreground">Windows / Mac</span>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-14 border-amber-500/30 hover:bg-amber-900/20 hover:text-amber-400 hover:border-amber-500/60 transition-all group justify-start"
                      onClick={() => window.open(launcherLinks.mobile, "_blank")}
                    >
                      <PhoneIcon className="w-5 h-5 mr-3 text-amber-500 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col items-start">
                        <span className="font-medieval text-lg">Launcher Para Celular</span>
                        <span className="text-xs text-muted-foreground">Android / iOS</span>
                      </div>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
