import { Layout } from "../components/Layout";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { PaginationTable } from "../components/Pagination";
import { countriesApi, careersApi, studentsApi } from "../lib/Api";

const Students = props => {
  const students = props.students;
  const [pageActual, setpageActual] = useState(1);
  const sizePage = 5;

  const studentsShow = students.filter((student, key) => {
    return key >= sizePage * (pageActual - 1) && key < pageActual * sizePage;
  });

  const studentsRender = studentsShow.map((student, key) => {
    return (
      <tr key={key}>
        <td className="d-none d-sm-table-cell">{student.name}</td>
        <td className="d-none d-sm-table-cell">{student.email}</td>
        <td className="d-none d-sm-table-cell">{student.phone_number}</td>
        <td className="d-none d-sm-table-cell">{student.career_description}</td>
        <td className="d-none d-sm-table-cell">{student.date_birth}</td>
        <td className="d-none d-sm-table-cell">
          {student.country_description}
        </td>
        <td className="d-none d-sm-table-cell">{student.city_description}</td>
        <td className="d-none d-sm-table-cell">
          <Link href="/students/[id]" as={`/students/${student.id}`}>
            <Button  variant="secondary">Edit Student</Button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <Layout title="Students" requireLogin={true}>
        <Link href="/students/new">
          <Button
            className="col-sm-2 col-lg-3 button-new-student"
            variant="outline-primary"
          >
            New Student
          </Button>
        </Link>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Career</th>
              <th>Date of Birth</th>
              <th>Country</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{studentsRender}</tbody>
        </Table>
        <PaginationTable
          lengthArray={students.length}
          sizePage={sizePage}
          setpageActual={setpageActual}
          pageActual={pageActual}
        />
      </Layout>
    </React.Fragment>
  );
};

Students.getInitialProps = async function() {
  const students = await studentsApi();
  const countries = await countriesApi();
  const careers = await careersApi();
  return { students, careers, countries };
};

export default Students;
