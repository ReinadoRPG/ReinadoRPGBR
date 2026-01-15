import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiDiscord, SiWhatsapp, SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import ServerStatus from "./ServerStatus";
import backgroundImage from "@assets/background_1765854796078.jpg";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (value: string, type: string) => {
    navigator.clipboard.writeText(value);
    setCopiedType(type);
    toast({
      title: "IP Copiado!",
      description: `${value} copiado com sucesso.`,
    });
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <h1
          className="font-medieval text-5xl md:text-7xl text-amber-400 drop-shadow-lg"
          data-testid="text-hero-title"
        >
          ReinadoRPG
        </h1>
        <p className="font-body text-xl md:text-2xl text-amber-100/90 max-w-2xl">
          Aventure-se em um mundo de fantasia, batalhas epicas e magia!
          Junte-se a nossa comunidade e construa seu legado.
        </p>

        <ServerStatus />

        <div className="flex flex-col sm:flex-row gap-4 mt-4 flex-wrap justify-center">
          <Button
            size="lg"
            className="bg-indigo-600 text-white font-medieval text-lg gap-2 px-8"
            onClick={() => window.open("https://discord.gg/5jvwssAV9t", "_blank")}
            data-testid="button-discord"
          >
            <SiDiscord className="w-5 h-5" />
            Entrar no Discord
          </Button>
          <Button
            size="lg"
            className="bg-green-600 text-white font-medieval text-lg gap-2 px-8"
            onClick={() => window.open("https://chat.whatsapp.com/EyBu39XdT7LEYKy4OXibOp", "_blank")}
            data-testid="button-whatsapp-group"
          >
            <SiWhatsapp className="w-5 h-5" />
            Grupo WhatsApp
          </Button>
          <Button
            size="lg"
            className="bg-black text-white font-medieval text-lg gap-2 px-8 hover:bg-black/80"
            onClick={() => window.open("https://tiktok.com", "_blank")}
            data-testid="button-tiktok"
          >
            <SiTiktok className="w-5 h-5" />
            TikTok
          </Button>
          <Button
            size="lg"
            className="bg-pink-600 text-white font-medieval text-lg gap-2 px-8 hover:bg-pink-700"
            onClick={() => window.open("https://instagram.com", "_blank")}
            data-testid="button-instagram"
          >
            <SiInstagram className="w-5 h-5" />
            Instagram
          </Button>
          <Button
            size="lg"
            className="bg-red-600 text-white font-medieval text-lg gap-2 px-8 hover:bg-red-700"
            onClick={() => window.open("https://youtube.com", "_blank")}
            data-testid="button-youtube"
          >
            <SiYoutube className="w-5 h-5" />
            YouTube
          </Button>
        </div>

        <Card className="mt-8 bg-black/60 backdrop-blur-sm border-amber-900/50 p-6 max-w-md w-full">
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medieval text-amber-300 text-sm">Java</p>
                <code className="font-mono text-amber-400 text-lg" data-testid="text-ip-java">
                  jogar.reinadorpg.com.br
                </code>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="border-amber-500/40 text-amber-300 hover:text-amber-100 hover:bg-amber-900/20"
                onClick={() => handleCopy("jogar.reinadorpg.com.br", "java")}
              >
                {copiedType === "java" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medieval text-amber-300 text-sm">Bedrock/Mobile</p>
                <code className="font-mono text-amber-400 text-lg" data-testid="text-ip-bedrock">
                  sd-br7.blazebr.com:25575
                </code>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="border-amber-500/40 text-amber-300 hover:text-amber-100 hover:bg-amber-900/20"
                onClick={() => handleCopy("sd-br7.blazebr.com:25575", "bedrock")}
              >
                {copiedType === "bedrock" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
