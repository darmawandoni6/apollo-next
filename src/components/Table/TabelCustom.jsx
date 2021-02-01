import React, { Fragment } from "react";
import { Table } from "reactstrap";
const TabelCustom = (props) => {
  const { headerColumn, column } = props;

  const renderHeader = () => {
    const result = [];
    for (let index = 0; index < headerColumn.length; index++) {
      result.push(<th key={index}>{headerColumn[index]}</th>);
    }
    return result;
  };
  const renderColumn = () => {
    const result = [];
    for (let index = 0; index < column?.length; index++) {
      result.push(
        <tr key={index}>
          <td>{column[index]}</td>
        </tr>
      );
    }
    return result;
  };

  return (
    <div className="w-100 border">
      <Table hover>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderColumn()}</tbody>
      </Table>
    </div>
  );
};

export default TabelCustom;
