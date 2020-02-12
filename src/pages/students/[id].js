import { Layout } from "../../components/Layout";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Router from "next/router";

import {
  careersApi,
  countriesApi,
  citiesApi,
  uploadStudentApi,
  studentIdApi
} from "../../lib/Api";

const newStudent = props => {
  const { handleSubmit, register } = useForm();
  const { countries, careers, cities, student } = props;
  const onSubmit = async values => {
    try {
      const studentEdited = {
        career: values.career,
        city: values.city,
        country: values.country,
        date_birth: values.dateBirth,
        email: values.email,
        name: values.name,
        phone_number: values.phone
      };

      await uploadStudentApi(studentEdited, student.id);

      Router.back();
    } catch (error) {
      alert("there is an error with the upload");
      event.preventDefault();
    }
  };

  return (
    <Layout title="Edit Student" requireLogin={true}>
      <div className="container edit-student">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="form-group  col-md-6">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                className="form-control"
                type="text"
                defaultValue={student.name}
                ref={register}
                required
              />
            </div>

            <div className="form-group  col-md-6">
              <label htmlFor="name">Phone number</label>
              <input
                name="phone"
                className="form-control"
                type="text"
                defaultValue={student.phone_number}
                ref={register}
                required
              />
            </div>

            <div className="form-group  col-md-6">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="form-control"
                type="email"
                defaultValue={student.email}
                ref={register}
                required
              />
            </div>

            <div className="form-group col-md-6 ">
              <label htmlFor="dateBirth">Date of Birth</label>
              <input
                type="date"
                id="start"
                defaultValue={student.date_birth}
                name="dateBirth"
                ref={register}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="career">Career</label>
              <select
                className="form-control"
                name="career"
                defaultValue={student.career}
                multiple={false}
                ref={register}
              >
                {careers.map(career => (
                  <option value={career.id} key={career.id}>
                    {career.description}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="country">Country</label>
              <select
                className="form-control"
                name="country"
                defaultValue={student.country}
                multiple={false}
                ref={register}
              >
                {countries.map(country => (
                  <option value={country.id} key={country.id}>
                    {country.description}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <select
                className="form-control"
                name="city"
                defaultValue={student.city}
                multiple={false}
                ref={register}
              >
                {cities.map(city => (
                  <option value={city.id} key={city.id}>
                    {city.description}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="buttons">
          <Button
              variant="danger"
              className="col-md-3"
              onClick={() => Router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="success"
              className="col-md-3 edit-button"
            >
              Edit Student
            </Button>
            
          </div>
        </form>
      </div>
    </Layout>
  );
};

newStudent.getInitialProps = async function({ query }) {
  const { id } = query;
  const careers = await careersApi();
  const countries = await countriesApi();
  const cities = await citiesApi();
  const student = await studentIdApi(id);
  return {
    careers,
    countries,
    cities,
    student
  };
};

export default newStudent;
