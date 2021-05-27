import "./App.css";
import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import data from "./data.json";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const columns = [
  {
    name: "id",
    selector: "id",
    sortable: true,
  },
  {
    name: "nombre",
    selector: "nombre",
    sortable: true,
  },
  {
    name: "apellido",
    selector: "apellido",
    sortable: true,
  },
  {
    name: "email",
    selector: "email",
    sortable: true,
  },
  {
    name: "genero",
    selector: "genero",
    sortable: true,
  },
  {
    name: "direccion_ip",
    selector: "direccion_ip",
    sortable: true,
  },
];

function App() {
  const tableData = {
    columns,
    data,
    print: false,
  };
  return (
    <div>
      <div className="derecha">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button class="btn btn-info" onClick={toPdf}>
              <span class="material-icons">picture_as_pdf</span>
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <DataTableExtensions {...tableData}>
          <DataTable
            noHeader
            defaultSortname="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </div>
  );
}

export default App;

