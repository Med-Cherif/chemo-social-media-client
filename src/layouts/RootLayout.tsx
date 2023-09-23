import { Outlet } from "react-router-dom";
import ProtectedRoute from "../components/guards/ProtectedRoute";
import Header from "../components/layouts/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/layouts/Sidebar";

const RootLayout = () => {
  return (
    <ProtectedRoute>
      <Grid templateColumns={"250px 1fr"}>
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>
          <Header />
          <Outlet />
        </GridItem>
      </Grid>
    </ProtectedRoute>
  );
};

export default RootLayout;
