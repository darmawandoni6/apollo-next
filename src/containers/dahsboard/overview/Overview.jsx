import React from "react";
import Header from "@components/content/Header";
import { Card, CardTitle, CardText, Table } from "reactstrap";
import moment from "moment";
import TabelCustom from "@components/Table/TabelCustom";

const header = ["Bank Name", "Nominal"];
const Overview = () => {
  return (
    <div className="row mx-0">
      <div className="col-12">
        <Header isDisplay={true} />
      </div>
      <div className="col-6">
        <Card>
          <CardTitle tag="h5" className="p-2">
            {`TOTAL LIMIT YANG TERPAKAI ${moment()
              .format("DD MMM YYYY")
              .toUpperCase()}`}
          </CardTitle>
          <TabelCustom headerColumn={header} />
        </Card>
      </div>
    </div>
  );
};

export default Overview;
