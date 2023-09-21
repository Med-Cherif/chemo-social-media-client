import { useMutation } from "@tanstack/react-query";
import { useForm, UseFormProps } from "react-hook-form";
import graphqlQLClient from "../graphql";
import userRequests from "../graphql/userRequests";
import { TObject } from "../types/object";
import { useAppDispatch } from "./useRedux";
import { userActions } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  extractError,
  handleMultipleErrors,
  setFormErrors,
} from "../helpers/errorHelpers";

export const useAuth = (
  dataKey: "register" | "login",
  useFormProps: UseFormProps = {}
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm(useFormProps);

  const [error, setError] = useState(null);

  const mutation = useMutation({
    mutationFn: (data: TObject) => {
      return graphqlQLClient
        .request(userRequests[dataKey], { data })
        .then((response) => (response as any)[dataKey]);
    },
    onMutate() {
      setError(null);
    },
    onSuccess(data) {
      dispatch(userActions.authSuccess(data));
      navigate("/");
    },
    onError(error) {
      handleMultipleErrors({
        error,
        setError,
        setFormError: form.setError,
      });
    },
  });

  const onSubmitSuccess = (data: TObject) => {
    mutation.mutate(data);
  };

  return {
    form,
    mutation,
    error,
    onSubmitSuccess,
  };
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(userActions.logout());
    navigate("/sign-in");
  };

  return {
    onLogout,
  };
};
