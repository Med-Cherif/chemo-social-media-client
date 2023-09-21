import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface TProps {
  text: string;
  link: string;
}

const AuthBottomText = ({ text, link }: TProps) => {
  return (
    <Text textAlign={"center"} mt="4">
      <Link to={link}>{text}</Link>
    </Text>
  );
};

export default AuthBottomText;
