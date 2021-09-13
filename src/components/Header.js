import {
  Container,
  Grid,
  Hidden,
  IconButton,
  Link,
  Stack,
} from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import { Box } from "@material-ui/system";
import MenuIcon from "@material-ui/icons/Menu";

const LINKS = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

const Header = () => {
  const [active, setActive] = useState("");
  const [headerFixed, setHeaderFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (active === "home") return setHeaderFixed(false);
    setHeaderFixed(true);
  }, [active]);

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setDisplay(true);
      }, 150);
    } else {
      setTimeout(() => {
        setDisplay(false);
      }, 150);
    }
  }, [menuOpen]);

  return (
    <>
      <Grid
        component="header"
        alignItems="center"
        container
        sx={{
          backgroundColor: "primary.main",
          height: 50,
          position: headerFixed ? "sticky" : "static",
          top: headerFixed && 0,
          zIndex: 99,
          borderBottom: (theme) => `3px solid ${theme.palette.info.main}`,
        }}
      >
        <Container>
          <Hidden smDown>
            {LINKS.map((link, index) => (
              <LinkScroll
                key={index}
                to={link.href.toLowerCase()}
                smooth
                spy={true}
                duration={500}
                offset={index !== 0 ? -50 : 0}
                onSetActive={() => setActive(link.href.toLowerCase())}
              >
                <Link
                  underline="none"
                  color={
                    active === link.href.toLowerCase()
                      ? "secondary.main"
                      : "white"
                  }
                  component="span"
                  sx={{
                    cursor: "pointer",
                    marginRight: 3,
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  {link.label.toUpperCase()}
                </Link>
              </LinkScroll>
            ))}
          </Hidden>
          <Hidden smUp>
            <Grid container justifyContent="flex-end">
              <IconButton onClick={() => setMenuOpen((prev) => !prev)}>
                <MenuIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Hidden>
        </Container>
        <Hidden smUp>
          <Box
            component={motion.div}
            animate={{
              height: menuOpen ? 192 : 0,
              display: menuOpen && "block",
            }}
            transition={{ type: "tween" }}
            sx={{
              width: 1,
              height: 192,
              background: "#333333",
              position: "sticky",
              top: active === "home" ? 0 : 50,
              zIndex: 2,
            }}
            onClick={() => setMenuOpen(false)}
          >
            <Stack spacing={2} sx={{ padding: 3 }}>
              {LINKS.map((link, index) => (
                <Link
                  key={index}
                  underline="none"
                  color={
                    active === link.href.toLowerCase()
                      ? "secondary.main"
                      : "white"
                  }
                  component="span"
                  sx={{
                    display: display ? "block" : "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  <LinkScroll
                    onClick={() => setMenuOpen(false)}
                    to={link.href.toLowerCase()}
                    smooth
                    spy={true}
                    duration={500}
                    offset={index !== 0 ? -50 : 0}
                    onSetActive={() => setActive(link.href.toLowerCase())}
                  >
                    {link.label.toUpperCase()}
                  </LinkScroll>
                </Link>
              ))}
            </Stack>
          </Box>
        </Hidden>
      </Grid>
    </>
  );
};

export default Header;
