import { Layout } from "../../components/Layout";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Router from "next/router";
import {
  careersApi,
  countriesApi,
  citiesApi,
  paymentsTypesApi,
  paymentIdApi,
  studentIdApi,
  paymentsDuesApi
} from "../../lib/Api";

const EditPayment = props => {
  const { handleSubmit, register } = useForm();
  const {
    countries,
    careers,
    cities,
    paymentTypes,
    id,
    payment,
    student,
    duesOptions
  } = props;

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
      const paymentEdited = {
        payment_type: values.paymentType,
        dues: values.dues,
        student: student.id
      };

      await axios.put(
        `http://0.0.0.0:8000/api/students/${student.id}`,
        studentEdited
      ),
        await axios.put(
          `http://0.0.0.0:8000/api/payments/${payment.id}`,
          paymentEdited
        );
      Router.push("/payments");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={`Payment Nro  ${id}`} requireLogin={true}>
      <form onSubmit={handleSubmit(onSubmit)} className="row formFilter">
        {/* Name */}
        <div className="form-group  col-md-5">
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

        <div className="form-group  col-md-5">
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

        <div className="form-group  col-md-5">
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

        <div className="form-group col-md-5">
          <label htmlFor="dateBirth">Date of Birth</label>
          <input
            type="date"
            id="start"
            name="dateBirth"
            ref={register}
            required
            defaultValue={student.date_birth}
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            name="city"
            multiple={false}
            defaultValue={student.city}
            ref={register}
          >
            {cities.map(city => (
              <option value={city.id} key={city.id}>
                {city.description}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">Payment Type</label>
          <select
            className="form-control"
            name="paymentType"
            multiple={false}
            defaultValue={payment.payment_type}
            ref={register}
          >
            {paymentTypes.map(payment => (
              <option value={payment.id} key={payment.id}>
                {payment.description}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dues">Dues</label>
          <select
            className="form-control"
            name="dues"
            multiple={false}
            ref={register}
            defaultValue={payment.dues}
          >
            {duesOptions.sort().map(dueOption => (
              <option value={dueOption.id} key={dueOption.id}>
                {dueOption.value}
              </option>
            ))}
          </select>
        </div>
        <Button
          type="submit"
          className="col-sm-2 col-lg-5 submitButtonFilter btn-text"
        >
          Edit payment
        </Button>
        <Button onClick={() => Router.back()}>Cancel</Button>
      </form>
    </Layout>
  );
};

EditPayment.getInitialProps = async function({ query }) {
  const { id } = query;
  const careers = await careersApi();
  const countries = await countriesApi();
  const cities = await citiesApi();
  const paymentTypes = await paymentsTypesApi();
  const payment = await paymentIdApi(id);
  const student = await studentIdApi(payment.student);
  const duesOptions = await paymentsDuesApi();
  return {
    careers,
    countries,
    cities,
    paymentTypes,
    id,
    payment,
    student,
    duesOptions
  };
};

export default EditPayment;
