"use client";
import React, { useState } from "react";
import { PreLoader } from "@/Components/Preloader/preloader";
import { PortfolioSidebar } from "@/Components/sidebar/sidebar";
import Dashboard from "@/Components/Dashboard/dashboard";

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
        <> */}
          {/* <div className="flex">
            <PortfolioSidebar/>
            <Dashboard/>
          </div> */}
        {/* </>
      )} */}
    </div>
  );
}
