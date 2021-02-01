import React from "react";
import AdminLayout from "@layout/AdminLayout";
import HeadDefault from "@layout/head/HeadDefault";
import Cards from "@containers/dahsboard/cards/Cards";

const Index = (props) => {
  return (
    <>
      <HeadDefault title="Apollo Dashboard | Cards" description="" />
      <AdminLayout {...props}>
        <Cards />
      </AdminLayout>
    </>
  );
};

export default Index;
