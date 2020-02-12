import { Layout } from "../../components/Layout";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Router from "next/router";

import {
  careersApi,
  countriesApi,
  citiesApi,
  createStudentApi
} from "../../lib/Api";

const newStudent = props => {
  const { handleSubmit, register } = useForm();
  const { countries, careers, cities } = props;

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

      await createStudentApi(studentEdited);

      Router.back();
    } catch (error) {
      alert("there is an error with the upload");
      event.preventDefault();
    }
  };

  return (
    <Layout title="Create New Student" requireLogin={true}>
      <div className="container ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                className="form-control"
                type="text"
                ref={register}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="name">Phone number</label>
              <input
                name="phone"
                className="form-control"
                type="text"
                ref={register}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="form-control"
                type="email"
                ref={register}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="dateBirth">Date of Birth</label>
              <input
                type="date"
                id="start"
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
              Create new Student
            </Button>
            
          </div>
        </form>
      </div>
    </Layout>
  );
};

newStudent.getInitialProps = async function() {
  const careers = await careersApi();
  const countries = await countriesApi();
  const cities = await citiesApi();
  return {
    careers,
    countries,
    cities
  };
};

export default newStudent;
