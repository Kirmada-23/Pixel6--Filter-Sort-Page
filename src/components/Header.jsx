/* eslint-disable react/prop-types */
import { MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "../index.css";
const Header = ({ onFilterChange }) => {
  return (
    <MDBRow className="header-row">
      <MDBCol size="6" className="title-column">
        <h2 className="text-left">Employees</h2>
      </MDBCol>
      <MDBCol size="6" className="text-right filter-column">
        <MDBIcon fas icon="filter" className="filter-icon" />
        <img
          src={"/icons/filter.png"}
          alt={"Filter Icon"}
          style={{ width: "30px", height: "30px", borderRadius: "30%" }}
        />
        <select
          className="filter-select"
          name="country"
          onChange={onFilterChange}
        >
          <option value="">Country</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
        </select>
        <select
          className="filter-select"
          name="gender"
          onChange={onFilterChange}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </MDBCol>
    </MDBRow>
  );
};

export default Header;
