import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface TProps extends ButtonProps {
  text: string;
}

const AuthSubmitButton = ({ text, ...rest }: TProps) => {
  return (
    <Button type="submit" w={"100%"} colorScheme="green" mt="6" {...rest}>
      {text}
    </Button>
  );
};

export default AuthSubmitButton;
