import React from "react";
import Login from "@containers/auth/Login";
import SingleLayout from "@layout/SingleLayout";

const Index = () => {
  return (
    <>
      <SingleLayout>
        <Login />
      </SingleLayout>
    </>
  );
};

export default Index;
