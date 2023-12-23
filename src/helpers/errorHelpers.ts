import { TObject } from "../types/object";
import accessNestedObject from "./accessNestedObject";
import { UseFormSetError } from "react-hook-form";

export type TErrorCode =
  | "BAD_REQUEST"
  | "BAD_USER_INPUT"
  | "GRAPHQL_PARSE_FAILED"
  | "GRAPHQL_VALIDATION_FAILED"
  | "INTERNAL_SERVER_ERROR"
  | "OPERATION_RESOLUTION_FAILURE"
  | "PERSISTED_QUERY_NOT_FOUND"
  | "PERSISTED_QUERY_NOT_SUPPORTED";

export function extractError(error: any) {
  error = error?.networkError?.result;
  const statusCode = error?.statusCode || 500;

  const resultErrors = error?.errors || [];

  const message = resultErrors?.[0]?.message || "Something went wrong";
  const code = resultErrors?.[0]?.extensions?.code || "INTERNAL_SERVER_ERROR";
  const errors = resultErrors?.[0]?.extensions?.errors || {};

  return {
    message,
    code,
    statusCode,
    errors,
  };
}

export function handleMultipleErrors({
  setError,
  setFormError,
  error,
}: {
  setError: (error: any) => void;
  setFormError: UseFormSetError<TObject>;
  error: any;
}) {
  const { code, errors, message } = extractError(error);
  if (code === "BAD_USER_INPUT") {
    setFormErrors(errors, setFormError);
  } else {
    setError(message);
  }
}

export function setFormErrors(errors: any, setError: UseFormSetError<TObject>) {
  Object.keys(errors).forEach((key) => {
    setError(key, { message: errors[key]?.[0] });
  });
}

export function handleUseFormErrors(errors: any) {
  const errorsResult: { [prop: string]: string } = {};
  Object.keys(errors || {}).forEach((key) => {
    errorsResult[key] = errors?.[key]?.message;
  });

  return errorsResult;
}

export function extractUseFormError(errors: any, name: string) {
  return accessNestedObject(errors, name);
}
