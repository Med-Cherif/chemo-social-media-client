import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  FormErrorMessage,
  Alert,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AuthTitle from "../../../components/auth/AuthTitle";
import InputPassword from "../../../components/form/InputPassword";
import { useAuth } from "../../../hooks/useUser";
import AuthSubmitButton from "../../../components/auth/AuthSubmitButton";
import AuthBottomText from "../../../components/auth/AuthBottomText";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../schemas/loginSchema";
import AlertError from "../../../components/common/AlertError";

const SignIn = () => {
  const { form, mutation, error, onSubmitSuccess } = useAuth("login", {
    resolver: yupResolver(loginSchema) as any,
  });

  const {
    register,
    formState: { errors },
  } = form;

  const errorMessage = (errors: any, err: any) => {
    return errors?.[err]?.message || undefined;
  };

  return (
    <Box>
      <AuthTitle title="Sign In" />
      <AlertError error={error} />
      <form onSubmit={form.handleSubmit(onSubmitSuccess)}>
        <VStack gap={2} alignItems={"flex-start"}>
          <FormControl isInvalid={!!errorMessage(errors, "field")}>
            <FormLabel>Username or Email</FormLabel>
            <Input {...register("field")} />
            <FormErrorMessage>{errorMessage(errors, "field")}</FormErrorMessage>
          </FormControl>
          <InputPassword
            formControlProps={{ isInvalid: !!errors.password }}
            errorMessage={errors.password?.message as string}
            {...register("password")}
          />
          <Box>
            <Link to={""}>Forgot Password ?</Link>
          </Box>
        </VStack>
        <AuthSubmitButton text="Sign In" isLoading={mutation.isLoading} />
        <AuthBottomText
          link="/sign-up"
          text="Don't have an account ? Sign Up"
        />
      </form>
    </Box>
  );
};

export default SignIn;
