import Head from "next/head";
import Gallery from "react-photo-gallery";
import Header from "../components/header";

export default function Home() {
  const photos = [
    {
      src: "/photos/modified/dawki-meghalaya-boats.jpg",
      width: 6000,
      height: 4000,
    },
    {
      src: "/photos/modified/dawki-meghalaya-boats-and-sun.jpg",
      width: 6000,
      height: 4000,
    },
    {
      src: "/photos/modified/dzukou-valley.jpg",
      width: 6000,
      height: 4000,
    },
    {
      src: "/photos/modified/meghalaya-nongriat.jpg",
      width: 6000,
      height: 4000,
    },
  ];

  const onImageClick = (e, photos) => {
    window.open(photos.photo.src.replace("/modified/", "/"));
  };

  return (
    <>
      <Head>
        <title>Paras Waykole - Photos</title>
      </Head>

      <Header />
      <article>
        <h1 className="title">Travel &amp; Photography</h1>
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
