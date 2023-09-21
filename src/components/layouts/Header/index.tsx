import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useUser";

const Header = () => {
  const { onLogout } = useLogout();
  return (
    <Box as={"header"} px={8} py={4}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Link to={"/"}>
          <Heading size="lg">Chemo</Heading>
        </Link>
        <Box>2</Box>
        <Box>
          <Button onClick={onLogout}>Logout</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
