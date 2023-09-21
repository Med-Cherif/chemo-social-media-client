import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import AuthTitle from "../../../components/auth/AuthTitle";
import InputPassword from "../../../components/form/InputPassword";
import AuthSubmitButton from "../../../components/auth/AuthSubmitButton";
import AuthBottomText from "../../../components/auth/AuthBottomText";
import { useAuth } from "../../../hooks/useUser";
import FormControlInput from "../../../components/form/FormControlInput";
import {
  extractUseFormError,
  handleUseFormErrors,
} from "../../../helpers/errorHelpers";
import AlertError from "../../../components/common/AlertError";

const SignUp = () => {
  const { form, mutation, error, onSubmitSuccess } = useAuth("register", {});
  const {
    register,
    formState: { errors },
  } = form;
  // errors.name?.message
  const { name, email, username, password, passwordConfirmation } =
    handleUseFormErrors(errors);

  return (
    <Box>
      <AuthTitle title="Sign Up" />
      <AlertError error={error} />
      <form onSubmit={form.handleSubmit(onSubmitSuccess)}>
        <VStack gap={2} alignItems={"flex-start"}>
          <FormControlInput error={name}>
            <FormLabel>Name</FormLabel>
            <Input {...register("name")} />
          </FormControlInput>
          <FormControlInput error={username}>
            <FormLabel>Username</FormLabel>
            <Input {...register("username")} />
          </FormControlInput>

          <FormControlInput error={email}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")} />
          </FormControlInput>
          <FormControlInput>
            <FormLabel>Gender</FormLabel>
            <Select {...register("gender")}>
              <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </Select>
          </FormControlInput>
          <InputPassword {...register("password")} errorMessage={password} />
          <InputPassword
            label="Password Confirmation"
            {...register("passwordConfirmation")}
            errorMessage={passwordConfirmation}
          />
        </VStack>
        <AuthSubmitButton text="Sign Up" isLoading={mutation.isLoading} />
        <AuthBottomText
          link="/sign-in"
          text="Already have an account ? Sign In"
        />
      </form>
    </Box>
  );
};

export default SignUp;
