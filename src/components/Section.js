import { Typography, Stack, Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Section = ({ children, bgColor, title, textColor, index }) => {
  return (
    <Stack
      id={title.toLowerCase()}
      alignItems="center"
      component="section"
      id={title.toLowerCase()}
      sx={{
        backgroundColor: bgColor ? bgColor : "#fff",
        paddingY: title.toLowerCase() === "contact" ? 24 : 8,
        paddingBottom: 8,
        color: textColor ? textColor : "#444649",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <InView threshold={1}>
        {({ ref, inView }) => (
          <Typography
            ref={ref}
            component={motion.h4}
            initial={{ x: index % 2 === 0 ? "-20vw" : "20vw", opacity: 0 }}
            animate={inView && { x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variant="h4"
          >
            <Box
              component={motion.div}
              initial={{ x: index % 2 === 0 ? "-20vw" : "20vw", opacity: 0 }}
              animate={inView && { x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              sx={{
                position: "relative",
                width: "70px",
                height: "4px",
                background: textColor ? textColor : "#444649",
                left: "calc(50% - 35px)",
                position: "absolute",
                bottom: -20,
              }}
            ></Box>
            <strong>{title}</strong>
          </Typography>
        )}
      </InView>
      {children}
    </Stack>
  );
};

export default Section;
