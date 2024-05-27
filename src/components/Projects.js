import { Grid } from "@material-ui/core";
import { InView } from "react-intersection-observer";
import Project from "./Project";

const PROJECTS = [
  {
    images: ["movies.jpg", "movies1.jpg", "movies2.jpg"],
    name: "Movies&Series Website",
    type: "TMDB Website",
    techUsed: "Next.js / TMDB API",
    description: `Shows information about movies and series with searching functionality, Consuming TMDB Api.`,
    link: "https://movies-website.vercel.app",
    github: "https://github.com/ziadgaafar/movies-website",
  },
  {
    images: ["ecommerce.jpg", "ecommerce1.jpg"],
    name: "Ecommerce Shop",
    type: "Online Shop",
    techUsed: "Next.js / Express.js / MongoDB",
    description:
      "Full-Stack Ecommerce website with Stripe Checkout, Authentication and authorization, Admin role for managing, adding and deleting products, orders, categories and accounts.",
    link: "https://ecommerce-shop-three.vercel.app",
    github: "https://github.com/ziadgaafar/ecommerce-shop",
  },
  {
    images: ["dolla.jpg"],
    name: "dolla",
    type: "Landing Page",
    techUsed: "React / Styled-Components",
    description: "Simple react app with styled-component and smooth-scroll.",
    link: "https://hardcore-rosalind-839155.netlify.app",
    github: "https://github.com/ziadgaafar/dolla",
  },
  {
    images: ["smarteduservices-1.jpg", "smarteduservices-2.jpg"],
    name: "smarteduservices",
    type: "Freelancing System",
    techUsed: "React / Tailwindcss / Formik",
    description: "System for managing freelancing projects, freenalcers, clients, customer service and customer support.",
    link: null,
    github: null,
  },
  {
    images: ["octagator-1.jpg", "octagator-2.jpg"],
    name: "octagator",
    type: "Custom Wordpress Plugins",
    techUsed: "React / Tailwindcss / Formik",
    description: "Custom Wordpress plugins for managins products, warehouses, orders, selling partners, accounting and more.",
    link: null,
    github: null,
  },
];

const Projects = () => {
  return (
    <InView threshold={0.3}>
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
