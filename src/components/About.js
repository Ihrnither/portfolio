import {
  Box,
  Grid,
  Stack,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import SpeedIcon from "@material-ui/icons/Speed";
import MonitorIcon from "@material-ui/icons/DesktopWindows";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import DynamicFormIcon from "@material-ui/icons/DynamicForm";
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
      <Box sx={{ position: "relative" }}>
        <MonitorIcon sx={{ color: "white", fontSize: 64 }} />
        <PhoneAndroidIcon
          fontSize="large"
          sx={{
            color: "white",
            position: "absolute",
            top: "40%",
            left: "60%",
          }}
        />
      </Box>
    ),
  },
  {
    label: "Intuitive",
    description: "Strong preference for easy to use, intuitive UX/UI.",
    icon: <EmojiObjectsIcon sx={{ color: "white", fontSize: 64 }} />,
  },
  {
    label: "Dynamic",
    description:
      "Websites don't have to be static, I love making pages come to life.",
    icon: <DynamicFormIcon sx={{ color: "white", fontSize: 64 }} />,
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
                  Who's this guy?
                </Typography>
                <Typography align="center">
                  I'm a Full-Stack Web Developer in Egypt. I have been
                  performing as a web developer for 2 years and am still in the
                  process of gaining more experience through more years. As
                  you're reading this, I'm working to develop my skills.
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
