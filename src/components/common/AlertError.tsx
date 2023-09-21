import { Alert } from "@chakra-ui/react";
import React from "react";

interface TProps {
  error: string | undefined | null;
}

const AlertError = ({ error }: TProps) => {
  return error ? (
    <Alert colorScheme="red" my="3">
      {error}
    </Alert>
  ) : (
    <></>
  );
};

export default AlertError;
