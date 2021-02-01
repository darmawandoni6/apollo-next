import React, { useState } from "react";

export const required = (value) => (value ? undefined : "required");

export const cekNumber = (value) => {
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value)
    ? "Please input email format"
    : undefined;
};

export const emailValid = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value)
    ? "Please input email format"
    : undefined;

export const onlyNumber = (value) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  return onlyNums;
};

export const renderInputField = (props) => {
  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    placeholder,
    meta: { touched, error, warning },
  } = props;
  return (
    <div className="form-group">
      {!noLabel && (
        <label htmlFor={id} className="font-weight-bold">
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </label>
      )}
      <input
        {...input}
        id={id}
        type="text"
        placeholder={placeholder}
        className={`form-control ${touched && error ? "focus-error" : ""}`}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};

export const renderPasswordField = (props) => {
  const [isShow, setShow] = useState(false);
  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    placeholder,
    meta: { touched, error, warning },
  } = props;
  return (
    <div className="password">
      <div className="form-group">
        {!noLabel && (
          <label htmlFor={id} className="font-weight-semibold">
            {label}
            {requiredStar && <span className="text-required"> *</span>}
          </label>
        )}
        <div
          className={`form-control mb-1 ${
            touched && error ? "focus-error" : ""
          }`}
        >
          <input
            {...input}
            id={id}
            placeholder={placeholder}
            type={isShow ? "text" : "password"}
          />
          <div className="icon-btn" onClick={() => setShow(!isShow)}>
            <i className={`fas ${isShow ? "fa-eye-slash" : "fa-eye"}`} />
          </div>
        </div>
        {touched &&
          ((error && <span className="form-error">{error}</span>) ||
            (warning && <span className="form-error">{warning}</span>))}
      </div>
    </div>
  );
};
