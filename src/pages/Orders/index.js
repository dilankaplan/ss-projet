import { useQuery } from "@apollo/client";
import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import { GET_ORDERS } from "../../graphql/query";

function OrdersPage() {
  const { loading, error, data } = useQuery(GET_ORDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Order Name</th>
          <th>Order Date</th>
          <th>Status</th>
          <th>Sub Total</th>
          <th>Total</th>
          <th>Delivery Date</th>
        </tr>
      </thead>
      <tbody>
        {data.orders.map((v, i) => {
          return (
            <tr key={i}>
              <td>{v.id}</td>
              <td>{v.orderName}</td>
              <td>{moment(v.orderDate).format("DD.MM.YYYY HH:mm")}</td>
              <td>{v.status}</td>
              <td>{v.subTotal}</td>
              <td>{v.total}</td>
              <td>{moment(v.deliveryDate).format("DD.MM.YYYY HH:mm")}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default OrdersPage;
