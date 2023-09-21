import { Heading } from "@chakra-ui/react";

interface TProps {
  title: string;
}

const AuthTitle = ({ title }: TProps) => {
  return (
    <Heading mb={8} textAlign={"center"}>
      {title}
    </Heading>
  );
};

export default AuthTitle;
