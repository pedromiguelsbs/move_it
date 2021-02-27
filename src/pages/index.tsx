import Head from "next/head";

import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import { CompletedChallenges } from "../Components/CompletedChallenges";
import { Countdown } from "../Components/Countdown";
import { ChallengeBox } from "../Components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
