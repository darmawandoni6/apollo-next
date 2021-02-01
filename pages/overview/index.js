import React from "react";
import AdminLayout from "@layout/AdminLayout";
import HeadDefault from "@layout/head/HeadDefault";
import Overview from "@containers/dahsboard/overview/Overview";

const Index = (props) => {
  return (
    <>
      <HeadDefault title="Apollo Dashboard | Overview" description="" />
      <AdminLayout {...props}>
        <Overview />
      </AdminLayout>
    </>
  );
};

export default Index;
