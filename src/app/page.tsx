"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { PreLoader } from "@/Components/Preloader/preloader";
import { BackgroundBeams } from "@/Components/ui/background-beams";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const loadingStates = [
    { text: "Importing creativity..." },
    { text: "Slapping on some Tailwind..." },
    { text: "Prettifying code like a champ 😎 ..." },
    { text: "Rendering awesomeness..." },
    { text: "Injecting animations..." },
    { text: "Done! Looks good on mobile too. 👀" },
  ];

  const handleLoaderComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      {loading ? (
        <>
          <PreLoader
            loadingStates={loadingStates}
            loading={true}
            onComplete={handleLoaderComplete}
          />
          <BackgroundBeams />
        </>
      ) : (
        <>{redirect("/about")}</>
      )}
    </div>
  );
}
