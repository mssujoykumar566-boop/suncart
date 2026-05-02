import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner/>
     <SummerTips/>
     <TopBrands/>

     <PopularProducts/>
   
    </div>
  );
}
