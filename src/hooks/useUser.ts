// import { useMutation } from "@tanstack/react-query";
import { useForm, UseFormProps } from "react-hook-form";
import userRequests from "../graphql/requests/userRequests";
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
import apolloClient from "../graphql/client";
import { useMutation } from "@apollo/client";

export const useAuth = (
  dataKey: "register" | "login",
  useFormProps: UseFormProps = {}
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm(useFormProps);

  const [error, setError] = useState(null);

  const [mutate, { loading }] = useMutation(userRequests[dataKey], {
    onCompleted(data) {
      // console.log(data);
      dispatch(userActions.authSuccess(data[dataKey]));
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
    setError(null);
    mutate({ variables: { data } });
  };

  return {
    form,
    error,
    loading,
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
