import SiteHeader from "@/components/layout/SiteHeader";
import ChapterNav from "@/components/layout/ChapterNav";
import MobileProgressDots from "@/components/layout/MobileProgressDots";
import Hero from "@/components/chapters/Hero";
import Ch01Barndom from "@/components/chapters/Ch01Barndom";
import Ch02BliverChili from "@/components/chapters/Ch02BliverChili";
import Ch03FarOgSon from "@/components/chapters/Ch03FarOgSon";
import Ch04Transportportefolje from "@/components/chapters/Ch04Transportportefolje";
import Ch05FarensServiceafdeling from "@/components/chapters/Ch05FarensServiceafdeling";
import Ch06CivilianMode from "@/components/chapters/Ch06CivilianMode";
import Ch07CS2Division from "@/components/chapters/Ch07CS2Division";
import Ch08HornsletOperations from "@/components/chapters/Ch08HornsletOperations";
import Ch09IvanAksen from "@/components/chapters/Ch09IvanAksen";
import Ch10LillebrorStatus from "@/components/chapters/Ch10LillebrorStatus";
import Ch11_24Marts from "@/components/chapters/Ch11_24Marts";
import Ch12FraDinFar from "@/components/chapters/Ch12FraDinFar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ChapterNav />
      <MobileProgressDots />
      <main>
        <Hero />
        <Ch01Barndom />
        <Ch02BliverChili />
        <Ch03FarOgSon />
        <Ch04Transportportefolje />
        <Ch05FarensServiceafdeling />
        <Ch06CivilianMode />
        <Ch07CS2Division />
        <Ch08HornsletOperations />
        <Ch09IvanAksen />
        <Ch10LillebrorStatus />
        <Ch11_24Marts />
        <Ch12FraDinFar />
      </main>
    </>
  );
}
