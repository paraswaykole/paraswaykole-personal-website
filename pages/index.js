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
            I&apos;m a developer / product experimenter / maker-builder at heart and an engineer by profession with
            designing skills. I&apos;m based out of India.
          </p>
          <p>
            Building things on computer has always been my favourite thing to do.
            I started building 2D PC games around the age of 12 (built ~5 2D PC games). 
            Later in 2014, started a mobile gaming company where I created around 6 Mobile Game titles. 
            I got featured in Yourstory and multiple local newspapers for my story.
          </p>
          <p>
            In 2016, I started building Superbot, an AI chat bot to discover and get things done. 
            On chat recharges, bill payments, cab booking, reminders, food recommendations nearby, etc. 
            I worked on this for more than 2 years simultaneously while completing my degree.
          </p>
          <p>
            In 2018, I founded NoDoubt App, an App for exam takers to get their
            doubts answered, initially for GRE Exam. Got more than 3000+ Active
            Users in very few months. NoDoubt was accepted on Advisor Track of 
            YCombinator Startup School 2018.
          </p>
          <p>
            In 2019-20, I worked as Product Engineer at DoseFM (Acquired by
            ClearTax). Later, I joined PhonePost to help build 
            voice messaging app. Meanwhile, also built 360Katas (A slack app for
            getting 360 degree feedback). 
          </p>
          <p>
            In 2021-22, I was Lead Product Engineer at bip.so. We built a git-based document versioning system
            for DAOs and communities. There I lead the frontend and backend efforts to build the initial first version 
            in Golang and React. I also built the git backend service in golang that used database to store and retreive git objects 
            and references using libgit2 library. Had to write some low-level code in C++ to make that work.
          </p>
          <p>
            In 2023, I founded Slashbase full-time. Slashbase is an open-source database IDE for dev/data workflows. Managed to write a single-codebase to build desktop app and server app from same.
            Built the community of 18 open-source contributors and 50+ discord members. Also, got $2500 github sponsorship for the project from Appwrite OSS Fund.
          </p>
          <p>
            Currently, I&apos;m working full-time as SDE3 at Loco (Live Game Streaming Platform) and simultaneously pursuing my masters (M.Tech in Software Engineering) at BITS Pilani WILP.
          </p>
          <p>
            I&apos;m enthusiastic about all things tech especially AI
            Conversational Systems, Autonomous Vehicles, AI/ML, Internet and
            Mobile. Generally, experimenting and building things for Internet and Mobile.
          </p>
          <p>
            Lets connect on:{" "}
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
