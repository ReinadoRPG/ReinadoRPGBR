import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Volume2, VolumeX } from "lucide-react";
import musicTrack from "@assets/music.mp3";

export default function MusicToggleButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={musicTrack} loop onEnded={() => setIsPlaying(false)} />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-gradient-to-br from-stone-700 to-stone-900 hover:from-stone-600 hover:to-stone-800 shadow-lg shadow-black/50 border-2 border-amber-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-amber-800/30"
            onClick={togglePlayback}
            aria-pressed={isPlaying}
            data-testid="button-music-toggle"
          >
            {isPlaying ? <Volume2 className="w-6 h-6 text-amber-200" /> : <VolumeX className="w-6 h-6 text-amber-200" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-stone-900 border-amber-700/50 text-amber-200">
          <p>{isPlaying ? "Música ligada" : "Música desligada"}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
