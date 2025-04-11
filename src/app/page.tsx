"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { PreLoader } from "@/Components/Preloader/preloader";
import { BackgroundBeams } from "@/Components/ui/background-beams";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const loadingStates = [
    { text: "Initializing..." },
    { text: "Fetching data..." },
    { text: "Processing..." },
    { text: "Finalizing..." },
    { text: "Complete!" },
  ];

  const handleLoaderComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      {/* {loading ? (
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
      )} */}
    </div>
  );
}
