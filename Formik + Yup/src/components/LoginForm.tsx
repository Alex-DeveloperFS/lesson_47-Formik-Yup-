import {ErrorMessage, Field, Form, Formik} from "formik"
import * as yup from "yup"

const LoginForm = () => {
  const validationSchema = yup.object({
    login: yup.string()
      .required('Login is required')
      .min(3, 'Login must be at least 3 characters long')
      .max(15, 'Login must be not more than 15 characters'),

    email: yup.string()
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Incorrect email format'),

    password: yup.string()
      .required('Password is required')
      .min(5, 'Password must be at least 5 characters long')
      .max(20, 'Password must be not more than 20 characters'),
  })

  const handleSubmit = (values: {login: string, password: string}) => {
    console.log(values)
  }

  return <Formik
    initialValues={{login: '', password: ''}}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}>

    <Form>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <Field type="text" id="login" name="login" placeholder="Enter your login"/>
        <ErrorMessage name="login" component="div" className="error"/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" placeholder="Enter your email"/>
        <ErrorMessage name="email" component="div" className="error"/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" placeholder="Enter your password"/>
        <ErrorMessage name="password" component="div" className="error"/>
      </div>


      <button type="submit">Submit</button>
    </Form>
  </Formik>
}

export default LoginForm