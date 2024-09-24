// Import necessary modules
import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function CenteredFooter({ company, links, socials, light }) {
  const { href, name } = company;
  const navigate = useNavigate(); // Initialize navigate

  const year = new Date().getFullYear();

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      component="a"
      onClick={() => navigate(link.href)} // Use navigate instead of href
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
      sx={{ cursor: "pointer" }} // Ensure the link is styled as clickable
    >
      {link.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component="a"
      onClick={() => navigate(social.link)} // Use navigate instead of href
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
      sx={{ cursor: "pointer" }} // Ensure the link is styled as clickable
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year}{" "}
            <MKTypography
              component="a"
              onClick={() => navigate(href)} // Use navigate instead of href
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
              sx={{ cursor: "pointer" }} // Ensure the link is styled as clickable
            >
              {name}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  company: { href: "https://adevi.com.np/", name: "Adevi" },
  links: [
    { href: "/", name: "Company" },
    { href: "/support", name: "About Us" },
    { href: "/about", name: "Team" },
    { href: "/predict", name: "Products" },
    { href: "/contact", name: "Contact Us" },
  ],
  socials: [
    { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com" },
    { icon: <TwitterIcon fontSize="small" />, link: "https://twitter.com" },
    { icon: <InstagramIcon fontSize="small" />, link: "https://www.instagram.com" },
    { icon: <PinterestIcon fontSize="small" />, link: "https://ro.pinterest.com" },
    { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/Axkratos" },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  light: PropTypes.bool,
};

export default CenteredFooter;
