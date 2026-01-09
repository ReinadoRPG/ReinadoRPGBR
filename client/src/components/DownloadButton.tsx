import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DownloadButton() {
  const handleDownload = () => {
    window.open("https://www.minecraft.net/pt-br/download", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleDownload}
            size="lg"
            className="rounded-full w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 shadow-lg shadow-amber-900/50 border-2 border-amber-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-amber-800/50"
            data-testid="button-download"
          >
            <Download className="w-6 h-6 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-stone-900 border-amber-700/50 text-amber-200">
          <p>Baixar Minecraft</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
