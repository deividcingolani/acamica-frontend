import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { isLoggedIn } from "../../lib/isLoggedIn";
import Error from "next/error";
import { paymentStudent } from "../../lib/api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
const Payment = props => {
  const { handleSubmit, register } = useForm();
  const { countries, careers, cities, paymentTypes } = props;

  const onSubmit = values => {
    console.log("submit");
  };
  const router = useRouter();

  if (router.query.id) {
    console.log(paymentStudent(router.query.id));
  }

  return (
    <React.Fragment>
      {isLoggedIn() && router.query.id ? (
        <Layout title={`Payment Id: ${router.query.id}`}>
          <form onSubmit={handleSubmit(onSubmit)} className="row formFilter">
            {/* Name */}
            <div className="form-group  col-md-5">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                className="form-control"
                type="text"
                ref={register}
              />
            </div>

            <div className="form-group  col-md-5">
              <label htmlFor="name">Email</label>
              <input
                name="email"
                className="form-control"
                type="text"
                ref={register}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career">Career</label>
              <select
                className="form-control"
                name="career"
                multiple={false}
                ref={register}
              >
                <option value={"All"} key={-99}>
                  All
                </option>
                {careers.map(career => (
                  <option value={career.description} key={career.id}>
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
                multiple={false}
                ref={register}
              >
                <option value={"All"} key={-99}>
                  All
                </option>
                {countries.map(country => (
                  <option value={country.description} key={country.id}>
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
                ref={register}
              >
                <option value={"All"} key={-99}>
                  All
                </option>
                {cities.map(city => (
                  <option value={city.description} key={city.id}>
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
                ref={register}
              >
                <option value={"All"} key={-99}>
                  All
                </option>
                {paymentTypes.map(payment => (
                  <option value={payment.description} key={payment.id}>
                    {payment.description}
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
          </form>
        </Layout>
      ) : (
        <Error statusCode={403} />
      )}
    </React.Fragment>
  );
};

Payment.getInitialProps = async function() {
  const resCareer = await axios.get(
    "http://0.0.0.0:8000/api/students/careers/"
  );
  const resCountry = await axios.get(
    "http://0.0.0.0:8000/api/students/countries/"
  );
  const resCities = await axios.get("http://0.0.0.0:8000/api/students/cities/");
  const resPaymentTypes = await axios.get(
    "http://0.0.0.0:8000/api/payments/types"
  );
  const careers = await resCareer.data;
  const cities = await resCities.data;
  const countries = await resCountry.data;
  const paymentTypes = await resPaymentTypes.data;
  return { careers, countries, cities, paymentTypes };
};
export default Payment;
