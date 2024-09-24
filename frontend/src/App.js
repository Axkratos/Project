import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Predict from "layouts/pages/landing-pages/HouseForm";
import SignInBasic from "pages/LandingPages/SignIn";
import SignUpBasic from "pages/LandingPages/SignUp";
import Navbar from "../src/pages/LandingPages/Navbar.js"; // Import your Navbar component
import routes from "routes.js";
import AdminDashboard from "layouts/pages/landing-pages/Admin/index.js";
import UserData from "layouts/pages/landing-pages/UserData/index.js";

export default function App() {
  const { pathname } = useLocation();
  const [userEmail, setUserEmail] = useState(null);

  // Set user email based on local storage
  useEffect(() => {
    const email = localStorage.getItem("email");
    setUserEmail(email);
  }, []);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar 
        brand="Adevi"
        routes={[
          { name: "Home", route: "/" },
          { name: "About Us", route: "/about" },
          { name: "Contact Us", route: "/contact" },
          { name: "Support", route: "/support" }
        ]}
        transparent
        
      /> 
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Presentation />} />
        <Route path="/signin" element={<SignInBasic />} />
        <Route path="/signup" element={<SignUpBasic />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/data" element={<UserData />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
