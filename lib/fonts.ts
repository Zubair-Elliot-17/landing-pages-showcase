import {
  Manrope,
  Archivo_Black,
  Poppins,
  Space_Grotesk,
  Inter,
  Nunito_Sans,
  Oswald,
  Playfair_Display,
  Work_Sans,
  Bebas_Neue,
} from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "600"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const fontMap = {
  manrope,
  archivoBlack,
  poppins,
  spaceGrotesk,
  inter,
  nunitoSans,
  oswald,
  playfairDisplay,
  workSans,
  bebasNeue,
} as const;

export type FontKey = keyof typeof fontMap;
