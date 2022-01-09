import { Form, FormikProvider, useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Card } from "primereact/card";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import InputGroup from '../../../common/InputComponent/input';
import { USerSchema } from '../validation';


const UserEdit = () => {
	const { id } = useParams();
	const { GetUserById, EditUser } = useActions();
	const { info } = useTypedSelector( store => store.getUsers);
	const navigate = useNavigate();
	const _id = Number(id);
	useEffect(() => {
    GetUserById(_id);
  }, [GetUserById, _id]);

	const onHandleSubmit = async () => {
    try {
		EditUser({...values, id: id})
		navigate("/dashboard");
    } catch (error) {
      setFieldError("Email", error as string);
    }
  };
  const formik = useFormik({
    initialValues: info,
    validationSchema: USerSchema,
    onSubmit: onHandleSubmit,
	enableReinitialize: true
  });
  const { values, errors, touched, handleChange, handleSubmit, setFieldError } =
    formik;

  return (
    <>
      <Card>
        <div className="container">
          <h1 className="text-center">Edit User</h1>
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
                  <div className="text-center">
                    <Button label="Confirm" type="submit" />
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

export default UserEdit;
