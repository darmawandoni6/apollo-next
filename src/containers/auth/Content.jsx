import {
  emailValid,
  renderInputField,
  renderPasswordField,
  required,
} from "@components/field/field";
import React from "react";
import { reduxForm, Field } from "redux-form";
import Button from "reactstrap-button-loader";

const Content = (props) => {
  const { handleSubmit } = props;
  const onSubmit = (val) => {
    console.log(val);
  };
  return (
    <div className="row mx-0 border vh">
      <div className="col h-100 d-flex flex-column justify-content-center align-items-center">
        <img
          src={require("@images/logo.svg")}
          height="40px"
          className="mb-3"
          alt=""
        />
        <div className="border rounded-12 p-4 container-login">
          <h3 className="text-center mb-3">Sign In to your account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Email Address"
              id="email"
              name="email"
              placeholder="email@email.com"
              component={renderInputField}
              validate={[required, emailValid]}
            />
            <Field
              label="Password"
              id="password"
              name="password"
              placeholder="*********"
              component={renderPasswordField}
              validate={[required]}
            />
            <div className="d-flex justify-content-between">
              <p className="text-link">Forgot password?</p>
              <button className="btn btn-primary px-4">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "Login" })(Content);
