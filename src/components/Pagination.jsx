/* eslint-disable react/prop-types */
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import "../index.css";

const Pagination = ({ page, totalPages, setPage }) => (
  <MDBPagination className="mb-0">
    <MDBPaginationItem disabled={page === 1}>
      {/* Changing the page on clicking */}
      <MDBPaginationLink onClick={() => setPage(1)}>First</MDBPaginationLink>
    </MDBPaginationItem>
    <MDBPaginationItem disabled={page === 1}>
      <MDBPaginationLink onClick={() => setPage(page - 1)}>
        Previous
      </MDBPaginationLink>
    </MDBPaginationItem>
    {[...Array(totalPages)].map((_, index) => (
      <MDBPaginationItem key={index} active={index + 1 === page}>
        <MDBPaginationLink onClick={() => setPage(index + 1)}>
          {index + 1}
        </MDBPaginationLink>
      </MDBPaginationItem>
    ))}
    <MDBPaginationItem disabled={page === totalPages}>
      <MDBPaginationLink onClick={() => setPage(page + 1)}>
        Next
      </MDBPaginationLink>
    </MDBPaginationItem>
    <MDBPaginationItem disabled={page === totalPages}>
      <MDBPaginationLink onClick={() => setPage(totalPages)}>
        Last
      </MDBPaginationLink>
    </MDBPaginationItem>
  </MDBPagination>
);

export default Pagination;
