import { Grid, IconButton, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { animateScroll as scroll } from "react-scroll";
import { Facebook, LinkedIn, GitHub } from "@material-ui/icons";

const ICONS = [
  { href: "https://facebook.com/ziadg3fr", icon: <Facebook /> },
  {
    href: "https://www.linkedin.com/in/ziad-gaafar-096a381a0/",
    icon: <LinkedIn />,
  },
  { href: "https://github.com/ziadgaafar", icon: <GitHub /> },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        pb: 6,
      }}
    >
      <Grid container justifyContent="center">
        <IconButton
          onClick={() => scroll.scrollToTop()}
          sx={{
            transform: "translateY(-25px)",
            width: 45,
            height: 50,
            backgroundColor: "secondary.main",
            borderRadius: "0px",
            ":hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          <DoubleArrowIcon
            fontSize="large"
            sx={{ color: "white", transform: "rotate(-90deg)" }}
          />
        </IconButton>
      </Grid>

      <Grid container alignItems="center" justifyContent="center">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ py: 2 }}
          spacing={4}
        >
          {ICONS.map((i, index) => (
            <Grid key={index} item>
              <IconButton
                component="a"
                href={i.href}
                target="_blank"
                sx={{
                  color: "#fff",
                  borderRadius: "0px",
                  width: 55,
                  height: 55,
                  backgroundColor: "#262f38",
                  ":hover": {
                    backgroundColor: "info.main",
                  },
                }}
              >
                {i.icon}
              </IconButton>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ opacity: 0.5 }}
        >
          <Typography sx={{ mr: 0.5, fontSize: 14 }}>ZIAD GAAFAR</Typography>
          <Typography sx={{ fontSize: 16, color: "secondary.main" }}>
            &copy;
          </Typography>
          <Typography sx={{ fontSize: 16, mb: 0.5, color: "secondary.main" }}>
            2021
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
