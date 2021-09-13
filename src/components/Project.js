import {
  Backdrop,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Launch, Close } from "@material-ui/icons";
import { Box } from "@material-ui/system";
import { motion } from "framer-motion";
import { useState } from "react";
import CustomButton from "./CustomButtom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Project = ({ index, p, inView }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [learnMore, setLearnMore] = useState(false);
  return (
    <>
      <Grid
        item
        xs={12}
        sm={10}
        md={6}
        component={motion.div}
        initial={{
          y: "20vh",
          opacity: 0,
          position: "relative",
        }}
        animate={inView && { y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.6,
          delay: index * 0.25,
        }}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <motion.img
          src={p.images[0]}
          alt={p.images[0]}
          style={{
            width: "100%",
            objectFit: "cover",
            height: 300,
          }}
          animate={{
            opacity: showDetails ? 0 : 1,
            transition: { duration: 0.4 },
          }}
        />
        <Box
          component={motion.div}
          sx={{
            position: "absolute",
            top: 0,
            width: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          animate={{
            y: showDetails ? 65 : -0,
            opacity: showDetails ? 1 : 0,
            transition: {
              type: "tweeen",
              duration: 0.4,
            },
          }}
        >
          <Typography color="#000" variant="h5" fontWeight="700">
            {p.name}
          </Typography>
          <Typography color="secondary">{p.techUsed}</Typography>
        </Box>
        <Box
          component={motion.div}
          sx={{
            position: "absolute",
            bottom: 0,
            width: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={{
            y: showDetails ? -65 : 0,
            opacity: showDetails ? 1 : 0,
            transition: {
              type: "tweeen",
              duration: 0.4,
            },
          }}
        >
          <CustomButton
            text="LEARN MORE"
            borderColor="secondary.main"
            textColor="grey.A700"
            fontSize="12"
            hoverBg="secondary.main"
            onClick={() => setLearnMore(true)}
          />
        </Box>
      </Grid>
      <Backdrop
        open={learnMore}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.appBar + 1,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card
          sx={{
            width: {
              sm: "90vw",
              md: "80vw",
              lg: "60vw",
            },
            userSelect: "none",
          }}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            emulateTouch
            stopOnHover
          >
            {p.images.map((image, index) => (
              <CardMedia
                key={index}
                component="img"
                image={image}
                alt={image + index}
              />
            ))}
          </Carousel>
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              {/* {p.link.split("//")[1]} */}
              {p.name}
            </Typography>
            <Typography color="text.secondary" fontWeight="bold">
              {p.type}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {p.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between" alignItems="center">
              <CustomButton
                href={p.link}
                borderColor="secondary.main"
                fontSize="12"
                hoverBg="secondary.main"
                text="VIEW WEBSITE"
                backgroundColor="secondary.main"
                startIcon={<Launch />}
                onClick={() => window.open(p.link, "_blank")}
              />
              <IconButton onClick={() => setLearnMore(false)}>
                <Close sx={{ color: "text.secondary" }} />
              </IconButton>
            </Grid>
          </CardActions>
        </Card>
      </Backdrop>
    </>
  );
};

export default Project;
