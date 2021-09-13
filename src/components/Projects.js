import { Grid } from "@material-ui/core";
import { InView } from "react-intersection-observer";
import Project from "./Project";

const PROJECTS = [
  {
    images: ["movies.png", "movies1.png", "movies2.png"],
    name: "Movies&Series Website",
    type: "TMDB Website",
    techUsed: "Next.js / TMDB API",
    description: `Shows information about movies and series with searching functionality, Consuming TMDB Api.`,
    link: "https://movies-website.vercel.app",
  },
  {
    images: ["ecommerce.png", "ecommerce1.png"],
    name: "Ecommerce Shop",
    type: "Online Shop",
    techUsed: "Next.js / Express.js / MongoDB",
    description:
      "Full-Stack Ecommerce website with Stripe Checkout, Authentication and authorization, Admin role for managing, adding and deleting products, orders, categories and accounts.",
    link: "https://ecommerce-shop-three.vercel.app",
  },
  {
    images: ["dolla.png"],
    name: "dolla",
    type: "Landing Page",
    techUsed: "React / Styled-Components",
    description: "Simple react app with styled-component and smooth-scroll.",
    link: "https://hardcore-rosalind-839155.netlify.app",
  },
];

const Projects = () => {
  return (
    <InView threshold={0.6}>
      {({ ref, inView }) => (
        <Grid container ref={ref} justifyContent="center">
          {PROJECTS.map((p, index) => (
            <Project key={index} index={index} p={p} inView={inView} />
          ))}
        </Grid>
      )}
    </InView>
  );
};

export default Projects;
