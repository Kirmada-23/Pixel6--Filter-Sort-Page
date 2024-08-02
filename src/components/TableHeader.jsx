/* eslint-disable react/prop-types */
import { MDBTableHead, MDBIcon } from "mdb-react-ui-kit";
import "../index.css";

const TableHeader = ({ onSort, sortKey, sortOrder }) => {
  const getSortIcon = (key) => {
    if (sortKey !== key)
      return <MDBIcon fas icon="sort" className="sort-icon" />;
    if (sortOrder === "asc")
      return <MDBIcon fas icon="sort-up" className="sort-icon" />;
    return <MDBIcon fas icon="sort-down" className="sort-icon" />;
  };

  return (
    <MDBTableHead className="custom-table-head">
      <tr>
        <th scope="col">
          <div className="header-cell" onClick={() => onSort("id")}>
            <img src="/icons/sort.png" alt="Sort Icon" className="sort-image" />
            ID {getSortIcon("id")}
          </div>
        </th>
        <th scope="col">Image</th>
        <th scope="col">
          <div className="header-cell" onClick={() => onSort("name")}>
            <img src="/icons/sort.png" alt="Sort Icon" className="sort-image" />
            Full Name {getSortIcon("name")}
          </div>
        </th>
        <th scope="col">
          <div className="header-cell" onClick={() => onSort("age")}>
            <img src="/icons/sort.png" alt="Sort Icon" className="sort-image" />
            Demography {getSortIcon("age")}
          </div>
        </th>
        <th scope="col">Designation</th>
        <th scope="col">Location</th>
      </tr>
    </MDBTableHead>
  );
};

export default TableHeader;
