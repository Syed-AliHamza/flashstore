import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  return (
    <div>
      <div className="form-wrapper create">
        <h4 className="border-bottom">
          Create New Account <p className="line"></p>
        </h4>
        <p>Create your own Account</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          action="/account"
          id="create_customer"
          acceptCharset="UTF-8"
        >
          <input type="hidden" name="form_type" value="create_customer" />
          <input type="hidden" name="utf8" value="✓" />

          <div id="register-form">
            <div className="control-wrapper">
              <label for="first-name">First Name</label>
              <input
                ref={register({ required: true })}
                className="rounded-0"
                type="text"
                name="first_name"
                id="first-name"
                autoCapitalize="words"
                autoFocus=""
              />
              <p>{errors.first_name && "First name is required"}</p>
            </div>

            <div className="control-wrapper">
              <label for="last-name">Last Name</label>
              <input
                ref={register({ required: true })}
                className="rounded-0"
                type="text"
                name="last_name"
                id="last-name"
                autoCapitalize="words"
                autoFocus=""
              />
              <p>{errors.last_name && " Last name is required"}</p>
            </div>

            <div className="control-wrapper">
              <label for="customer_email">
                Email Address<span className="req">*</span>
              </label>
              <input
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
                className="rounded-0"
                type="email"
                required=""
                name="email"
                id="customer_email"
              />
              <p>{errors.email && errors.email.message}</p>
            </div>

            <div className="control-wrapper has-error">
              <label for="password">
                Password<span className="req">*</span>
              </label>
              <input
                ref={register({ required: true })}
                className="rounded-0 password error"
                type="password"
                name="password"
                id="password"
                minLength="8"
                required=""
              />
              <p> {errors.password && "Password is required"}</p>
            </div>
            <div className="control-wrapper last">
              <button className="btn btn-1 rounded-0" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>

        <h5 className="mt-4">Sign up today and you'll be able to :</h5>
        <p className="m-0">Speed your way through the checkout</p>
        <p className="m-0">Track your orders easily</p>
        <p className="m-0">Keep a record of all your purchases</p>
      </div>
    </div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     name="email"
    //     ref={register({
    //       required: "Required",
    //       pattern: {
    //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    //         message: "invalid email address"
    //       }
    //     })}
    //   />
    //   {errors.email && errors.email.message}

    //   <input
    //     name="username"
    //     ref={register({
    //       validate: value => value !== "admin" || "Nice try!"
    //     })}
    //   />
    //   {errors.username && errors.username.message}

    //   <button type="submit">Submit</button>
    // </form>
  );
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//         <div className="form-wrapper create">
//           <h4 className="border-bottom">
//             Create New Account <p className="line"></p>
//           </h4>
//           <p>Create your own Account</p>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             method="post"
//             action="/account"
//             id="create_customer"
//             acceptCharset="UTF-8"
//           >
//             <input type="hidden" name="form_type" value="create_customer" />
//             <input type="hidden" name="utf8" value="✓" />

//             <div id="register-form">
//               <div className="control-wrapper">
//                 <label for="first-name">First Name</label>
//                 <input  ref={register({ required: true })}
//                   className="rounded-0"
//                   type="text"
//                   name="first_name"
//                   id="first-name"
//                   autoCapitalize="words"
//                   autoFocus=""
//                 />
// {errors.first_name && "First name is required"}
//               </div>

//               <div className="control-wrapper">
//                 <label for="last-name">Last Name</label>
//                 <input  ref={register({ required: true })}
//                   className="rounded-0"
//                   type="text"
//                   name="last_name"
//                   id="last-name"
//                   autoCapitalize="words"
//                   autoFocus=""
//                 />
// {errors.last_name && "Last name is required"}
//               </div>

//               <div className="control-wrapper">
//                 <label for="customer_email">
//                   Email Address<span className="req">*</span>
//                 </label>
//                 <input  ref={register({ required: true })}
//                   className="rounded-0"
//                   type="email"
//                   required=""
//                   name="email"
//                   id="customer_email"
//                 />
//               </div>

//               <div className="control-wrapper has-error">
//                 <label for="password">
//                   Password<span className="req">*</span>
//                 </label>
//                 <input  ref={register({ required: true })}
//                   className="rounded-0 password error"
//                   type="password"
//                   name="password"
//                   id="password"
//                   minLength="8"
//                   required=""
//                 />
//               </div>
//               <div className="control-wrapper last">
//                 <button className="btn btn-1 rounded-0" type="submit">
//                   Register
//                 </button>
//               </div>
//             </div>
//           </form>

//           <h5 className="mt-4">Sign up today and you'll be able to :</h5>
//           <p className="m-0">Speed your way through the checkout</p>
//           <p className="m-0">Track your orders easily</p>
//           <p className="m-0">Keep a record of all your purchases</p>
//         </div>
//       </div>
//     );
//   }
// }
