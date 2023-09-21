import {
  FormControlProps,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, forwardRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FormControlInput from "./FormControlInput";

interface TProps {
  label?: string;
  formControlProps?: FormControlProps;
  errorMessage?: string;
}

const InputPassword = forwardRef<HTMLInputElement, TProps>(
  (
    { label = "Password", formControlProps = {}, errorMessage, ...rest },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
      <FormControlInput {...formControlProps} error={errorMessage}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <Input
            ref={ref}
            type={passwordVisible ? "text" : "password"}
            {...rest}
          />
          <InputRightElement
            onClick={() => setPasswordVisible((current) => !current)}
          >
            {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </InputRightElement>
        </InputGroup>
      </FormControlInput>
    );
  }
);

export default InputPassword;
