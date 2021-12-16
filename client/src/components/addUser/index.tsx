import { Field, Form, FormikProvider, useFormik } from 'formik';
import { useActions } from '../../hooks/useActions';
import InputGroup from '../common/InputComponent/input';
import {AddUserData} from "./types"
import { AddUSerSchema } from './validation';

const AddUser = () => {

	const { AddUser } = useActions();

	const initValues:AddUserData = {
		Name:"",
		Surname: "",
		Email: "",
		Password: ""
	}

	const onHandleSubmit = async () => {
		await AddUser(values);
	}
	const formik = useFormik({
    initialValues: initValues,
    validationSchema: AddUSerSchema,
    onSubmit: onHandleSubmit,
  });
 const { values, errors, touched, handleChange, handleSubmit } = formik;

	return (
    <>
      <div className="container">
        <h1 className="text-center">Add User</h1>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
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
                  <button type="submit" className="btn btn-primary">
                    AddUser
                  </button>
                </div>
              </Form>
            </FormikProvider>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
