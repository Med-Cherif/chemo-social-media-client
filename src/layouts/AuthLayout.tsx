import { Outlet } from "react-router-dom";
import {
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Container,
  Center,
} from "@chakra-ui/react";
import authBg from "../assets/auth-bg.jpg";
import PublicRoute from "../components/guards/PublicRoute";

const AuthLayout = () => {
  return (
    <PublicRoute>
      <Container maxW={"container.lg"}>
        <Center minH={"100vh"} py={12}>
          <SimpleGrid w={"100%"} columns={[1, null, 2]}>
            <Box
              bg={"gray.100"}
              display={{ base: "none", md: "block" }}
              backgroundImage={`url(${authBg})`}
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
            ></Box>
            <Box>
              <Card>
                <CardBody>
                  <Outlet />
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </Center>
      </Container>
    </PublicRoute>
  );
};

export default AuthLayout;
