import * as yup from "yup";

export const AddUSerSchema = yup.object({
  Email: yup
    .string()
    .email("Введіть коректний Email")
    .required("Поле не повинне бути пустим"),
  Name: yup.string().required("Поле не повинне бути пустим"),
  Surname: yup.string().required("Поле не повинне бути пустим"),
  Password: yup
    .string()
    .min(5, "Пароль повинен містити мініму 5 символів")
    .matches(/[0-9a-zA-Z]/, "Пароль може містить латинські символи і цифри")
    .required("Поле не повинне бути пустим"),
});
