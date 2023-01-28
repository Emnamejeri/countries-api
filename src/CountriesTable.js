import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "region", headerName: "Region", width: 150 },
  { field: "area", headerName: "Area Km²", width: 250 },
];

export default function DataTable() {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((json) => setcountries(json));
  });

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={countries}
        columns={columns}
        getRowId={(row) => row.name}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
}
