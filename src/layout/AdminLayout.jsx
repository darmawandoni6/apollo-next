import React from "react";
import { BeatLoader } from "react-spinners";
import NavLeft from "./navbar/NavLeft";

const AdminLayout = (props) => {
  const { children } = props;
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <NavLeft />
      </div>
      <div className="wrapper-content">
        <div className="loading-page text-center">
          <BeatLoader size={50} color="#3c5975" loading />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
