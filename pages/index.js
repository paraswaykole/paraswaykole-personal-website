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
            I&apos;m a dev/builder/maker at heart and an engineer by profession with
            designing skills. Based out of India.
          </p>
          <p>
            Building things on computer has always been my favourite thing to do.
            I started building 2D PC games around the age of 12 (built ~5 2D PC games). 
            Later in 2014, started a mobile gaming company where I created around 6 Mobile Game titles.
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
            In 2019, I worked as Product Engineer at DoseFM (Acquired by
            ClearTax). Later, I joined an amazing startup team to help build 
            voice messaging app. Meanwhile, also built 360Katas (A slack app for
            getting 360 degree feedback). In 2021-22, I was Lead Product 
            Engineer at bip.so.
          </p>
          <p>
            Currently, I am building <Link
              rel="noreferrer noopener"
              href="https://slashbase.com/"
              target="_blank"
            ><a>Slashbase</a></Link> full-time. Slashbase is an in-browser collaborative database IDE for your dev/data workflows. It also has an open-source version on&nbsp;
            <Link 
            rel="noreferrer noopener"
            href="https://github.com/slashbaseide/slashbase"
            target="_blank"><a>GitHub</a></Link>.
          </p>
          <p>
            I&apos;m enthusiastic about all things tech especially AI
            Conversational Systems, Autonomous Vehicles, AI/ML, Internet and
            Mobile. Generally, building things for Internet and Mobile.
          </p>
          <p>
            Apart from work, I like trekking and exploring, swimming, reading books, listening
            to podcasts.
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
