import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
export const PaymentsFilter = props => {
  
  const { handleSubmit, register } = useForm();
  const onSubmit = values => {
    let paymentsFilter = props.payments;
  
    /* Filter by name */
    if (values.name.trim() !== "") {
      paymentsFilter = paymentsFilter.filter(payment =>
        payment.name.toLowerCase().includes(values.name.toLowerCase())
      );
    }

    if (values.email.trim() !== "") {
      paymentsFilter = paymentsFilter.filter(payment =>
        payment.email.toLowerCase().includes(values.email.toLowerCase())
      );
    }

    if (values.country.trim() !== "" && values.country.trim() !== "All") {
      paymentsFilter = paymentsFilter.filter(
        payment => payment.country == values.country
      );
    }

    if (values.career.trim() !== "" && values.career.trim() !== "All") {
      paymentsFilter = paymentsFilter.filter(
        payment => payment.career == values.career
      );
    }

    props.setPayments(paymentsFilter);
    props.setpageActual(1)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row formFilter ">
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
          {props.careers.map(career => (
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
          {props.countries.map(country => (
            <option value={country.description} key={country.id}>
              {country.description}
            </option>
          ))}
        </select>
      </div>
      
      <Button
        type="submit"
        className="col-sm-2 col-lg-5 submitButtonFilter btn-text"
      >
        Apply Filter
      </Button>
    </form>
  );
};
