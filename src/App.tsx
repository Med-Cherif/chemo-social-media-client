import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import { Box } from "@chakra-ui/react";
import allRoutes from "./data/allRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  const { auth: authRoutes } = allRoutes;

  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          {authRoutes.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
