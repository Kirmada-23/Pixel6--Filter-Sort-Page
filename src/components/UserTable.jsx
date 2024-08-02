/* eslint-disable react/prop-types */
import React from "react";
import {
  MDBTable,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTableBody,
} from "mdb-react-ui-kit";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { useFilter } from "../hooks/useFilter";
import { useSort } from "../hooks/useSort";
import { useLoadData } from "../hooks/useLoadData";
import { usePagination } from "../hooks/usePagination";
import "../index.css";

const UserTable = () => {
  const limit = 10; // setting the page limit to 10

  // Use custom hooks for data loading, filtering, sorting, and pagination
  const { data, loading, error, total, loadPageData } = useLoadData(limit);
  const { filteredData, handleFilterChange } = useFilter(data);
  const { sortedData, handleSort, sortKey, sortOrder } = useSort(filteredData);
  const { page, setPage, totalPages } = usePagination(total, limit);

  // Load data for the current page
  React.useEffect(() => {
    loadPageData(page);
  }, [page, loadPageData]);

  return (
    <MDBContainer>
      <div className="table-container">
        <Header onFilterChange={handleFilterChange} />
        <MDBRow className="centerRow">
          <MDBCol size="12">
            <MDBTable className="table">
              {/* Passing the props */}
              <TableHeader
                onSort={handleSort}
                sortKey={sortKey}
                sortOrder={sortOrder}
              />
              {loading && data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={6} className="text-center mb-0">
                      Loading...
                    </td>
                  </tr>
                </MDBTableBody>
              ) : error ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={6} className="text-center mb-0">
                      Error: {error}
                    </td>
                  </tr>
                </MDBTableBody>
              ) : sortedData.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={6} className="text-center mb-0">
                      No Data Found
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                sortedData.map((item) => <TableRow key={item.id} item={item} />)
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </MDBContainer>
  );
};

export default UserTable;
