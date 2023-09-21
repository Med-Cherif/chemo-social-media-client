import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";

interface TProps {
  children: React.ReactNode;
  error?: string | string[] | null | undefined;
}

const FormControlInput = ({ children, error }: TProps) => {
  return (
    <FormControl isInvalid={!!error}>
      {children}
      {typeof error === "string" ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : Array.isArray(error) ? (
        error.map((err, idx) => (
          <FormErrorMessage key={idx}>{err}</FormErrorMessage>
        ))
      ) : (
        ""
      )}
    </FormControl>
  );
};

export default FormControlInput;
