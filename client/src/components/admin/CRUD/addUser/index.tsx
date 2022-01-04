import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useActions } from '../../../../hooks/useActions';
import { AddUserData } from './types';
import InputGroup from '../../../common/InputComponent/input';
import { USerSchema } from '../validation';
import { Button } from 'primereact/button';
import { Card } from "primereact/card"

const Register = () => {
  const navigate = useNavigate();
  const { AddUser } = useActions();

  const initValues: AddUserData = {
    Name: "",
    Surname: "",
    Email: "",
    Password: "",
  };

  const onHandleSubmit = async () => {
    try {
      await AddUser(values);
      navigate("/dashboard");
    } catch (error) {
      setFieldError("Email", error as string);
    }
  };
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: USerSchema,
    onSubmit: onHandleSubmit,
  });
  const { values, errors, touched, handleChange, handleSubmit, setFieldError } =
    formik;

  return (
    <>
      <Card>
        <div className="container">
          <h1 className="text-center">Add User</h1>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                  <InputGroup
                    field="Name"
                    label="Name"
                    error={errors.Name}
                    onChange={handleChange}
                    touched={touched.Name}
                    value={values.Name}
                  />
                  <InputGroup
                    field="Surname"
                    label="Surname"
                    error={errors.Surname}
                    onChange={handleChange}
                    touched={touched.Surname}
                    value={values.Surname}
                  />
                  <InputGroup
                    field="Email"
                    label="Email"
                    error={errors.Email}
                    onChange={handleChange}
                    touched={touched.Email}
                    value={values.Email}
                  />
                  <InputGroup
                    field="Password"
                    label="Password"
                    type="password"
                    error={errors.Password}
                    onChange={handleChange}
                    touched={touched.Password}
                    value={values.Password}
                  />
                  <div className="text-center">
                    {/* <button type="submit" className="btn btn-primary">
                    AddUser
                  </button> */}
                    <Button label="AddUser" type="submit" />
                  </div>
                </Form>
              </FormikProvider>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Register;
