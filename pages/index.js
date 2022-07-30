import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paras Waykole</title>
      </Head>

      <Header />
      <article>
        <h1 className="title">About me</h1>
        <div className="content">
          <p>
            I&apos;m a maker at heart and an engineer by profession with
            designing skills. Based out of India.
          </p>
          <p>
            Building and making things has always been my favourite thing to do.
            I started building 2D PC games since the age of 12 (built ~5 PC games). 
            Later in 2014, started a mobile gaming company where I created around 6 Mobile Game titles.
          </p>
          <p>
            In 2016, I started building Superbot, an AI bot to discover and get things done. 
            On chat recharges, bill payments, cab booking, reminders, food recommendations nearby, etc. 
            I worked on this for more than 2 years simultaneously while completing my degree.
          </p>
          <p>
            In 2018, I founded NoDoubt App, an App for Exam takers to get their
            doubts answered, initially for GRE Exam. Got more than 3000+ Active
            Users in very few months. NoDoubt was also part of YCombinator
            Startup School 2018 – Advisor Track.
          </p>
          <p>
            In 2019, I worked as Product Engineer at DoseFM (Acquired by
            ClearTax). Later, I joined an amazing startup team to build voice
            messaging app. Meanwhile also built 360Katas (A slack app for
            getting 360 degree feedback).
          </p>
          <p>
            Currently, I am leading tech and building bip.so in Golang &amp;
            React.
          </p>
          <p>
            I&apos;m enthusiastic about all things tech especially AI
            Conversational Systems, Autonomous Vehicles, AI/ML, Internet and
            Mobile. Generally, building things for Internet and Mobile.
          </p>
          <p>
            I work on side-projects in my free time. One is{" "}
            <Link
              rel="noreferrer noopener"
              href="https://slashbase.com/"
              target="_blank"
            >
              <a>Slashbase.com</a>
            </Link>
            . I like trekking and exploring, swimming, reading books, listening
            to podcasts.
          </p>
          <p>
            Lets connect on:{" "}
            <Link
              href="https://twitter.com/ParasWaykole"
              rel="noreferrer noopener"
              target="_blank"
            >
              <a>Twitter</a>
            </Link>{" "}
            |{" "}
            <Link
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/paras-waykole/"
              target="_blank"
            >
              <a>LinkedIn</a>
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
