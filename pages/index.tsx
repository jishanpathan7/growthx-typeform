import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { questrialFont } from "@/utils";
import { MainContent, ProgressBar } from "@/components";
import classNames from "classnames";
import { SharedStatesProvider, useQuestions } from "@/contexts";
import { useEffect, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  const { percent } = useQuestions();

  return (
    <>
      <Head>
        <title>Typeform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Typeform built for a take home assignment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {showLoader ? (
          <div className={styles.initialContainer}>
            <Image
              src="/growth-x-logo.png"
              alt="growthx-logo"
              width={100}
              height={25}
            />
            <span className={styles.loader}></span>
          </div>
        ) : (
          <>
            <header className={styles.header}>
              <ProgressBar width={percent} />
              <Image
                src="/growth-x-logo.png"
                alt="GrowthX logo"
                width={96}
                height={24}
              />
            </header>
            <main className={classNames(styles.main, questrialFont.className)}>
              <SharedStatesProvider>
                <MainContent />
              </SharedStatesProvider>
            </main>
          </>
        )}
      </div>
    </>
  );
}
