import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultFooter from "examples/Footers/CenteredFooter";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";

function AboutUs() {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate('/predict');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              About Our AI-Powered House Price Prediction
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We leverage cutting-edge AI technology to provide accurate and reliable house price predictions. Our mission is to empower home buyers, sellers, and real estate professionals with insights that make decision-making easier.
            </MKTypography>
            <MKButton
              color="info"
              sx={{ color: ({ palette: { white } }) => white.main }}
              onClick={handlePredictClick}
            >
              Try Prediction
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Connect with us
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                onClick={() => handleSocialClick('https://www.facebook.com')}
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                onClick={() => handleSocialClick('https://www.instagram.com')}
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                onClick={() => handleSocialClick('https://twitter.com')}
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                onClick={() => handleSocialClick('https://www.linkedin.com')}
              >
                <i className="fab fa-linkedin" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Team title="Our Team" description="Meet the experts behind our AI-powered solution." />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
