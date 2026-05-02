"use client";

import Lottie from "lottie-react";
import loadingAnim from "@/assets/loading.json";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={loadingAnim} loop={true} />
    </div>
  );
}