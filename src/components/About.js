import {
  Box,
  Grid,
  Stack,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import SpeedIcon from "@material-ui/icons/Speed";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const ITEMS = [
  {
    label: "Fast",
    description:
      "Fast load times and lag free interaction, my highest priority.",
    icon: <SpeedIcon sx={{ color: "white", fontSize: 64 }} />,
  },
  {
    label: "Responsive",
    description: "My layouts will work on any device, big or small.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M22 17h-4v-7h4m1-2h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4 6h18V4H4a2 2 0 0 0-2 2v11H0v3h14v-3H4V6z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    label: "Intuitive",
    description: "Strong preference for easy to use, intuitive UX/UI.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    label: "Dynamic",
    description:
      "Websites don't have to be static, I love making pages come to life.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M13.13 22.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1M5.64 12.5l-3.83-1.63l6.1-2.77C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39S16.66.269 11 5.93c-2.19 2.19-3.5 4.6-4.35 6.71c-.28.75-.09 1.57.46 2.13l2.13 2.12c.55.56 1.37.74 2.12.46A19.1 19.1 0 0 0 18.07 13c5.66-5.66 3.54-10.61 3.54-10.61m-7.07 7.07c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.77.78.78 2.05 0 2.83c-.78.78-2.05.78-2.83 0m-5.66 7.07l-1.41-1.41l1.41 1.41M6.24 22l3.64-3.64c-.34-.09-.67-.24-.97-.45L4.83 22h1.41M2 22h1.41l4.77-4.76l-1.42-1.41L2 20.59V22m0-2.83l4.09-4.08c-.21-.3-.36-.62-.45-.97L2 17.76v1.41z"
          fill="#fff"
        />
      </svg>
    ),
  },
];

const SKILLS = [
  { name: "HTML", value: 85 },
  { name: "CSS", value: 85 },
  { name: "Javascript", value: 80 },
  { name: "React", value: 70 },
  { name: "Node.js", value: 65 },
  { name: "MongoDB", value: 60 },
  { name: "Next.js", value: 65 },
];

const About = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        component={motion.div}
        initial="hidden"
        animate="visible"
      >
        {ITEMS.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Stack alignItems="center">
              <InView threshold={1}>
                {({ ref, inView }) => (
                  <Box
                    ref={ref}
                    component={motion.div}
                    initial={{ rotateY: 60, opacity: 0 }}
                    animate={inView && { rotateY: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.25,
                    }}
                  >
                    <Box
                      sx={{
                        float: "left",
                        borderRight: "30px solid #05C2C9",
                        borderBottom: "52px solid transparent",
                        borderTop: "52px solid transparent",
                      }}
                    ></Box>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        float: "left",
                        width: 60,
                        height: 104,
                        backgroundColor: "#05C2C9",
                      }}
                    >
                      {item.icon}
                    </Grid>
                    <Box
                      sx={{
                        float: "left",
                        borderLeft: "30px solid #05C2C9",
                        borderBottom: "52px solid transparent",
                        borderTop: "52px solid transparent",
                      }}
                    ></Box>
                  </Box>
                )}
              </InView>
              <InView threshold={1}>
                {({ ref, inView }) => (
                  <Grid
                    ref={ref}
                    container
                    justifyContent="center"
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={inView && { opacity: 1 }}
                    transition={{ delay: index * 0.25 }}
                  >
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      sx={{ marginTop: 1 }}
                    >
                      <strong>{item.label}</strong>
                    </Typography>
                    <Typography align="center">{item.description}</Typography>
                  </Grid>
                )}
              </InView>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid container sx={{ mt: 8 }} spacing={2} alignItems="center">
        <InView threshold={0.7}>
          {({ inView, ref }) => (
            <Grid
              item
              xs={12}
              md={6}
              ref={ref}
              component={motion.div}
              initial={{ x: "-10vw", opacity: 0 }}
              animate={inView && { x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
            >
              <Stack alignItems="center">
                <Grid container justifyContent="center">
                  <Grid item>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        marginBottom: 24,
                        height: 250,
                        width: 288.5,
                        clipPath:
                          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      }}
                      src="ziad.jpeg"
                      alt="ziad gaafar"
                    />
                  </Grid>
                </Grid>
                <Typography
                  color="textSecondary"
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                >
                  {`Who's this guy?`}
                </Typography>
                <Typography align="center">
                  {`I'm a Full-Stack Web Developer in Egypt. I have been
                  performing as a web developer for 2 years and am still in the
                  process of gaining more experience through more years. As
                  you're reading this, I'm working to develop my skills.`}
                </Typography>
              </Stack>
            </Grid>
          )}
        </InView>
        <InView threshold={0.7}>
          {({ ref, inView }) => (
            <Grid
              item
              xs={12}
              md={6}
              ref={ref}
              component={motion.div}
              initial={{ x: "10vw", opacity: 0 }}
              animate={inView && { x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
            >
              <Stack spacing={2}>
                {SKILLS.map((s, index) => (
                  <Grid key={index} container sx={{ position: "relative" }}>
                    <Grid item xs={2} sx={{ backgroundColor: "info.main" }}>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: 1 }}
                      >
                        <Typography
                          color="white"
                          sx={{
                            typography: "body2",
                            fontSize: {
                              xs: 10,
                              sm: 14,
                            },
                          }}
                        >
                          <strong>{s.name}</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        value={s.value}
                        color="inherit"
                        variant="determinate"
                        sx={{
                          height: 28,
                          color: "info.dark",
                        }}
                      />
                    </Grid>
                    <Grid item sx={{ position: "absolute", right: 8 }}>
                      {s.value}%
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </Grid>
          )}
        </InView>
      </Grid>
    </>
  );
};

export default About;
