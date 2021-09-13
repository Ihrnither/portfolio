import { Box, Typography } from "@material-ui/core";
import CustomButton from "./CustomButtom";
import Particles from "./Particles";
import { Link } from "react-scroll";

const NAME = "Ziad Gaafar";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundColor: "#252934",
        position: "relative",
      }}
    >
      <Particles />
      <Typography
        align="center"
        sx={{
          typography: {
            xs: "h5",
            sm: "h4",
            md: "h3",
          },
        }}
      >
        {`Hello, I'm `}
        <Box component="strong" sx={{ color: "secondary.main" }}>
          {NAME}
        </Box>
        {`,`} <br />
        {`I'm a full-stack web developer.`}
      </Typography>
      <Link to="about" smooth spy={true} duration={500}>
        <CustomButton
          arrowIcon
          text="View my work"
          scrollTo="about"
          marginTop={2}
          fontSize={{ xs: 16, sm: 20, md: 24 }}
        />
      </Link>
    </Box>
  );
};

export default Home;
