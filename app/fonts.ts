// app/fonts.ts

import { Inter_Tight, Instrument_Serif } from "next/font/google";

export const interTight = Inter_Tight({
  subsets: ["latin"],
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});