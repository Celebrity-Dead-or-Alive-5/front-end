import React, { useState } from 'react';
import Button from './Button';


const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: ""})

  // sets login information
  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value})
  }

  window.localStorage.setItem("LoginInfo", JSON.stringify(loginInfo))

  return(
    // form for user to login
    // requests email and password from user
    <div className="loginData">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">
          Email
        <input
        placeholder="Enter your email"
        type="email"
        value={loginInfo.email}
        name="email"
        onChange={handleChange}
        maxLength="40"
        required
        />
        </label>
        <label htmlFor='password'>
          Password 
           <input
        placeholder="Enter your password"
        type="password"
        value={loginInfo.password}
        name="password"
        onChange={handleChange}
        maxLength="20"
        required
        />
        </label>
       <div className= "buttons">
          {/* submit and signup buttons */}
         <Button type='submit' buttonText={'SUBMIT'} pathName={''} />
         <h3>Or</h3>
         <Button type='submit' buttonText={'SIGNUP'} pathName={'register'}/>
         </div> 
      </form>
    </div>
  )
}

export default Login;




// import React from "react";
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// const LoginForm = ({errors, touched}) => {
 
//   return (
//    <Form className='loginForm'>
//      <h1>CDOA</h1>
//      <p>Login</p>
//      <div>
//        {touched.username && errors.username && <p>{errors.username}</p>}
//        < Field className='field'
//                type='text'
//                name='username'
//                placeholder='User Name...'
//                />
//      </div>
     
//      <div>
//        {touched.userPassword && errors.userPassword && <p>{errors.userPassword}</p>}
//        < Field className='field'
//                type='password'
//                name='userPassword'
//                placeholder='password...'
//                />
//      </div>
//      <button type='submit'>Submit</button>
//    </Form>
//   );
// };

// const Login = withFormik({
//   mapPropsToValues({ username, userPassword }) {
//     return {
//       username: username || "",
//       userPassword: userPassword || ""
//     };
//   },

//  validationSchema: Yup.object().shape({
//    username: Yup.string()
//    .required( 'User Name is Required'),
//    userPassword: Yup.string()
//    .required('Password is Required')
//  }) ,

//  handleSubmit(values, {props}) {
//    axios.post('http://localhost:5000/api/login', {
//      username: values.username,
//      password: values.userPassword
//    })
//    .then(res => {
//      localStorage.setItem('token', res.data.payload);
//      props.history.push('/celebCard')
//    })
//  }
// })(LoginForm)

// export default Login;