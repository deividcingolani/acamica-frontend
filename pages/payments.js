import { Layout } from "../components/Layout";
import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { PaymentsFilter } from "../components/payments/Filter";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { PaginationTable } from "../components/Pagination";
import { isLoggedIn } from "../lib/isLoggedIn";
import Error from "next/error";

const Payments = props => {
  const payments = props.payments;
  const [paymentsFilter, setPaymentsFilter] = useState(props.payments);
  const [pageActual, setpageActual] = useState(1);
  const sizePage = 2;
  const paymentsShow = paymentsFilter.filter(payment => {
    return (
      payment.id > (pageActual - 1) * sizePage &&
      payment.id <= pageActual * sizePage
    );
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

  return (
    <React.Fragment>
      {isLoggedIn() ? (
        <Layout title="Payments of Students">
          <PaymentsFilter
            students={payments}
            careers={props.careers}
            countries={props.countries}
            setstudents={setPaymentsFilter}
          />

          <Link href="/payment/new">
            <Button>New Payment</Button>
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
      ) : (
        <Error statusCode={403} />
      )}
    </React.Fragment>
  );
};

Payments.getInitialProps = async function() {
  const resPayments = await axios.get("http://0.0.0.0:8000/api/payments/");
  const resCareer = await axios.get("http://0.0.0.0:8000/api/students/careers/");
  const resCountry = await axios.get("http://0.0.0.0:8000/api/students/countries/");
  const payments = await resPayments.data;
  const careers = await resCareer.data;
  const countries = await resCountry.data;
  return { payments, careers, countries };
};

export default Payments;
