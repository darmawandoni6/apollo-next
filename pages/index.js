import Test from "@containers/Test";
import AdminLayout from "@layout/AdminLayout";
import SingleLayout from "@layout/SingleLayout";
import React from "react";

const Index = () => {
  return (
    <>
      <AdminLayout>
        <Test />
      </AdminLayout>
    </>
  );
};

export default Index;
