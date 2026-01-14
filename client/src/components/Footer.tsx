import { Separator } from "@/components/ui/separator";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import { Link } from "wouter";

const socialLinks = [
  { id: "tiktok", icon: <SiTiktok />, link: "https://www.tiktok.com/@reinadorpg", color: "hover:text-[#EE1D52]" },
  { id: "instagram", icon: <SiInstagram />, link: "https://www.instagram.com/reinadorpgoficial", color: "hover:text-[#E4405F]" },
  { id: "youtube", icon: <SiYoutube />, link: "https://www.youtube.com/@ReinadoRPGBR", color: "hover:text-[#FF0000]" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-stone-950 dark:bg-stone-950 border-t border-amber-900/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="font-medieval text-3xl text-amber-500 dark:text-amber-400 mb-2">ReinadoRPG</p>
            <p className="font-body text-amber-200/60 max-w-md">
              Sua jornada épica começa aqui. Explore, conquiste e torne-se uma lenda em nosso reino.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-amber-700 dark:text-amber-200/40 transition-all hover:scale-125 ${social.color}`}
                data-testid={`link-social-${social.id}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <Separator className="mb-6 bg-amber-900/30" />
        <div className="text-center">
          <div className="font-body text-amber-700 dark:text-amber-200/70 text-sm space-y-2">
            <p>© 2025 ReinadoRPG</p>
            <p>Todos os direitos reservados.</p>
            <Link href="/termos">
              <span className="text-amber-500 hover:text-amber-400 cursor-pointer underline underline-offset-4">
                Termos de Uso e Privacidade
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
