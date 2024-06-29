"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useRouter } from 'next/navigation';
import { BackgroundBeams } from "@/Components/ui/background-beams";
import { PreLoader } from "@/Components/Preloader/preloader";

export default function Home() {
  // const router = useRouter();
  const [loading, setLoading] = useState(true);
  const loadingStates = [
    { text: "Initializing..." },
    { text: "Fetching data..." },
    { text: "Processing..." },
    { text: "Finalizing..." },
    { text: "Complete!" },
  ];

  const handleLoaderComplete = () => {
    // router.push('/home');
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
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
        <>
          <div className="bg-black h-screen">
            <div className="container">
              <h1>Home</h1>
              <p>Welcome to the home page! Here is some more content.</p>
              <Link href="/projects">Projects</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
