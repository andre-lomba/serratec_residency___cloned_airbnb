import Casa1_1 from "../../assets/images/casas/1.1.jpeg";
import Casa1_2 from "../../assets/images/casas/1.2.jpeg";
import Casa1_3 from "../../assets/images/casas/1.3.jpeg";
import Casa2_1 from "../../assets/images/casas/2.0.jpeg";
import Casa2_2 from "../../assets/images/casas/2.2.jpeg";
import Casa2_3 from "../../assets/images/casas/2.3.jpeg";
import Casa3_1 from "../../assets/images/casas/3.1.jpeg";
import Casa3_2 from "../../assets/images/casas/3.2.jpeg";
import Casa3_3 from "../../assets/images/casas/3.3.jpeg";
import { Casa } from "../CasaClass/Casa";

export const CASAS: Casa[] = [
  new Casa(
    [Casa1_1, Casa1_2, Casa1_3],
    "Paraty, Brasil",
    "4,94",
    164,
    5,
    "28 de jun.",
    "6.391"
  ),
  new Casa(
    [Casa2_1, Casa2_2, Casa2_3],
    "Petrópolis, Brasil",
    "4,8",
    60,
    5,
    "25 - 30 de jun.",
    "2.511"
  ),
  new Casa(
    [Casa3_1, Casa3_2, Casa3_3],
    "Bairro Mellos, Brasil",
    "4,99",
    237,
    5,
    "23 - 28 de jul.",
    "7.018"
  ),
];
