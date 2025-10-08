import dblGroup from "@/public/images/dblGroup.jpg";
import bti from "@/public/images/bti.jpg";
import bComplex from "@/public/images/bashundharaComplex.png";
import bCement from "@/public/images/bCement.jpg";
import bDredging from "@/public/images/bDredging.jpg";
import bPaper from "@/public/images/bPaper.png";
import kaiAltech from "@/public/images/kaiAltech.png";
import Olila from "@/public/images/Olila.webp";
import colorWoven from "@/public/images/colorWoven.png";
import bagsandpacks from "@/public/images/bagsandpacks.png";
import raduga from "@/public/images/raduga.png";
import faisalandfahad from "@/public/images/faisalandfahad.png";
import sinobangla from "@/public/images/sinobangla.jpg";
import liberty from "@/public/images/liberty.png";
import interpac from "@/public/images/interpac.png";
import integraphics from "@/public/images/integraphics.avif";
import dtm from "@/public/images/dtm.jpg";

const companies = [
  { id: "dblGroup", name: "DBL Group", logo: dblGroup },
  { id: "btlGroup", name: "Building Technology & Ideas Ltd(bit)", logo: bti },
  {
    id: "bComplex",
    name: "Bashundhara Industrial Complex (Bashundhara Cement)",
    logo: bComplex,
  },

  { id: "bDredging", name: "Bashundhara Dredging Ltd", logo: bDredging },
  { id: "bPaper", name: "Bashundhara Paper Mills Ltd", logo: bPaper },
  { id: "kaiAltech", name: "Kai Altech Group", logo: kaiAltech },
  { id: "Olila", name: "Olila Gas Industries Ltd", logo: Olila },
  { id: "colorWoven", name: "ColorWoven Industries Ltd", logo: colorWoven },
];

const companies2 = [
  { id: "bagsandpacks", name: "Bags and Packs Ind.Ltd", logo: bagsandpacks },
  { id: "raduga", name: "Raduga Industries Ltd", logo: raduga },
  {
    id: "faisalandfahad",
    name: "Faisal and Fahad Industries Ltd",
    logo: faisalandfahad,
  },
  { id: "sinobangla", name: "Sino Bangla Land scaping Ltd", logo: sinobangla },
  { id: "liberty", name: "Liberty Chemical Industries Ltd", logo: liberty },
  { id: "interpac", name: "Inter Pac Ltd", logo: interpac },
  { id: "integraphics", name: "InteGraphics Ltd", logo: integraphics },
  { id: "dtm", name: "DTM Industrial Sourcing Ltd", logo: dtm },
];

export const getComapanies = () => {
  return companies;
};
export const getComapanies2 = () => {
  return companies2;
};
