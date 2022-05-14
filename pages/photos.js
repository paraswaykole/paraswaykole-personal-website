import Head from "next/head";
import Link from "next/link";
import Gallery from "react-photo-gallery";
import Header from "../components/header";

export default function Home() {
  const photos = [
    {
      src: "/photos/temp0.jpg",
      width: 1080,
      height: 810,
    },
    {
      src: "/photos/temp0.1.jpg",
      width: 1080,
      height: 810,
    },
    {
      src: "/photos/temp1.webp",
      width: 3,
      height: 2,
    },
    {
      src: "/photos/temp2.webp",
      width: 3,
      height: 2,
    },
    {
      src: "/photos/temp0.2.jpg",
      width: 1080,
      height: 810,
    },
  ];

  const onImageClick = (e, photos) => {
    window.open(photos.photo.src);
  };

  return (
    <>
      <Head>
        <title>Paras Waykole - Photos</title>
      </Head>

      <Header />
      <article>
        <h1 className="title">Photos</h1>
        <div className="content">
          <Gallery
            photos={photos}
            direction="column"
            columns={3}
            onClick={onImageClick}
          />
        </div>
      </article>
    </>
  );
}
