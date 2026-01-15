import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Coloque seu mp3 em: attached_assets/music.mp3 (alias @assets)
// Exemplo de import (garanta que o arquivo exista): import musicFile from "@assets/music.mp3";
// Se preferir, altere MUSIC_URL abaixo para o caminho desejado.
const MUSIC_URL = "/assets/music.mp3"; // rota pública (ou use import musicFile from '@assets/music.mp3' se preferir)

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("reinado_music") === "true";
    }
    return false;
  });

  useEffect(() => {
    // Cria o audio dinamicamente para evitar erro no SSR
    if (typeof window === "undefined") return;

    if (!audioRef.current) {
      try {
        audioRef.current = new Audio(MUSIC_URL);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.35;
      } catch (e) {
        // se arquivo não existir, evita erro
        console.warn("MusicToggle: não foi possível carregar a música:", e);
      }
    }

    const audio = audioRef.current!;
    if (isPlaying) {
      audio?.play().catch(() => {
        // Autoplay pode falhar por políticas do browser, ignora
      });
    } else {
      audio?.pause();
      if (audio) audio.currentTime = 0;
    }

    localStorage.setItem("reinado_music", isPlaying ? "true" : "false");

    return () => {
      // Não destruímos o audio (para poder persistir entre trocas de componentes),
      // mas pausamos na desmontagem.
      audioRef.current?.pause();
    };
  }, [isPlaying]);

  const toggle = () => setIsPlaying((p) => !p);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="text-amber-500 dark:text-amber-400"
      title={isPlaying ? "Desligar música" : "Ligar música"}
      aria-pressed={isPlaying}
      data-testid="button-music-toggle"
    >
      <Music className="w-4 h-4 mr-2" />
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </Button>
  );
}