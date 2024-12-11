import React from "react";
import DataTable from "react-data-table-component";
import data from '../DataTable/data.json';

const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true
  },
  {
    name: "Phone",
    selector: "phone",
    sortable: true
  },
  {
    name: "Email",
    selector: "email",
    sortable: true
  },
  {
    name: "DOB",
    selector: "dob"
  }
];

function UserInfoData() {
  return (
    <div className="App">
      <DataTable
        title="Employees"
        columns={columns}
        data={data}
        highlightOnHover
        pagination
        paginationPerPage={3}
        paginationRowsPerPageOptions={[3, 5, 10, 15, 20]}
        paginationComponentOptions={{
          rowsPerPageText: "Records per page:",
          rangeSeparatorText: "out of"
        }}
      />
    </div>
  );
}

export default UserInfoData;
