import React from "react";
import CustomTable from "../sharedComponents/Table";

const TablePage = () => {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
  ];

  const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 28 },
    { id: 3, name: "Tom", age: 35 },
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Today's appointment list</h1>
      </div>
      <div className="w-4/5">
        <CustomTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default TablePage;
