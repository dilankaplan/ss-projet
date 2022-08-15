import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_LIST } from "../../graphql/query";
import ReactPaginate from "react-paginate";

function ProductsPage() {
  const [index, setIndex] = useState(1);

  const { loading, error, data, refetch } = useQuery(GET_PRODUCT_LIST);

  useEffect(() => {
    refetch({ index: index, limit: 15 });
  }, [index]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Item Type</th>
            <th>Code</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Description 1</th>
            <th>Description 2</th>
            <th>Description 3</th>
          </tr>
        </thead>
        <tbody>
          {data.products.products.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.itemType}</td>
                <td>{v.code}</td>
                <td>{v.weight}</td>
                <td>{v.price.price.price}</td>
                <td>{v.description1}</td>
                <td>{v.description2}</td>
                <td>{v.description3}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => setIndex(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(data.products.count / 15)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
}

export default ProductsPage;
