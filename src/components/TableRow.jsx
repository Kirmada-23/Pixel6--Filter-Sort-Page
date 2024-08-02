/* eslint-disable react/prop-types */

import { MDBTableBody } from "mdb-react-ui-kit";

const TableRow = ({ item }) => {
  return (
    <MDBTableBody>
      <tr>
        <th scope="row">{item.id.toString().padStart(2, "0")}</th>
        <td>
          <img
            src={item.image}
            alt={`${item.firstName} ${item.lastName}`}
            style={{ width: "30px", height: "30px", borderRadius: "30%" }}
          />
        </td>
        <td>
          {item.firstName} {item.middleName || ""} {item.lastName}{" "}
          {/* First to
          check whether middlename exist or not if not then leave space*/}
        </td>
        <td>
          {/*Capitalize the first letter of the gender*/}
          {item.gender[0].toUpperCase()}/{item.age}
        </td>
        <td>{item.company?.title}</td>
        <td>
          {/* First checking whether address exist , if it does then city and country  */}
          {item.address?.city}, {item.address?.country}
        </td>
      </tr>
    </MDBTableBody>
  );
};

export default TableRow;
