import { Layout } from "../components/Layout";

import { useState } from "react";
import Table from "react-bootstrap/Table";
import { PaymentsFilter } from "../components/payments/Filter";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { PaginationTable } from "../components/Pagination";
import { paymentsApi, countriesApi, careersApi } from "../lib/Api";
import Router from "next/router";

const Payments = props => {
  const payments = props.payments;
  const [paymentsFilter, setPaymentsFilter] = useState(props.payments);
  const [pageActual, setpageActual] = useState(1);
  const sizePage = 5;

  const paymentsShow = paymentsFilter.filter((payment, key) => {
    return key >= sizePage * (pageActual - 1) && key < pageActual * sizePage;
  });

  const paymentsRender = paymentsShow.map((payment, key) => {
    return (
      <tr key={key}>
        <td className="d-none d-sm-table-cell">{payment.name}</td>
        <td className="d-none d-sm-table-cell">{payment.paymentDescription}</td>
        <td className="d-none d-sm-table-cell">
          {payment.dues_value ? payment.dues_value : "-"}
        </td>
        <td className="d-none d-sm-table-cell">{payment.email}</td>
        <td className="d-none d-sm-table-cell">{payment.career}</td>
        <td className="d-none d-sm-table-cell">{payment.country}</td>
        <td className="d-none d-sm-table-cell">{payment.city}</td>
        <td className="d-none d-sm-table-cell">
          <Link href="/payment/[id]" as={`/payment/${payment.id}`}>
            <Button>Edit Payment</Button>
          </Link>
        </td>
      </tr>
    );
  });

  const setPageNewPayment = () => {
    Router.push(`/payment`, `/payment/0`);
  };
  return (
    <React.Fragment>
      <Layout title="Payments of Students" requireLogin={true}>
        <PaymentsFilter
          payments={payments}
          careers={props.careers}
          countries={props.countries}
          setPayments={setPaymentsFilter}
          setpageActual={setpageActual}
        />

        <Link href="/payment/new">
          <Button onClick={() => setPageNewPayment()}>New Payment</Button>
        </Link>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type Payment</th>
              <th>Dues</th>
              <th>Email</th>
              <th>Career</th>
              <th>Country</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{paymentsRender}</tbody>
        </Table>
        <PaginationTable
          lengthArray={paymentsFilter.length}
          sizePage={sizePage}
          setpageActual={setpageActual}
          pageActual={pageActual}
        />
      </Layout>
    </React.Fragment>
  );
};

Payments.getInitialProps = async function() {
  const payments = await paymentsApi();
  const countries = await countriesApi();
  const careers = await careersApi();
  return { payments, careers, countries };
};

export default Payments;
