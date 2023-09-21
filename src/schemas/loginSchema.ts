import * as yup from "yup";

const loginSchema = yup.object().shape({
  field: yup.string().required(),
  password: yup.string().required(),
});

export default loginSchema;
