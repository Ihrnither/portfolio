import Head from "next/head";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Section from "../src/components/Section";
import About from "../src/components/About";
import Contact from "../src/components/Contact.js";
import Projects from "../src/components/Projects";
import { Container, Stack } from "@material-ui/core";
import Footer from "../src/components/Footer";

const SECTIONS = [
  { title: "About", component: <About /> },
  { title: "Projects", bgColor: "#f5f5f5", component: <Projects /> },
  {
    title: "Contact",
    bgColor: "#252934",
    textColor: "#fff",
    component: <Contact />,
  },
];

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Ziad Gaafar</title>
        <meta name="description" content="Porftolio Website for Ziad Gaafar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      <Header />
      {SECTIONS.map((s, index) => (
        <Section
          key={index}
          title={s.title}
          bgColor={s.bgColor}
          textColor={s.textColor}
          index={index}
        >
          <Stack sx={{ marginTop: 12 }}>
            <Container>{s.component}</Container>
          </Stack>
        </Section>
      ))}
      <Footer />
    </>
  );
}
