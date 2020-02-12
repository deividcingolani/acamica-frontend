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
    props.setpageActual(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container ">
      {/* First row in container of */}
      <div className="row first-filter">
        {/* Name */}
        <div className="form-group  col-md-4">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            className="form-control"
            type="text"
            ref={register}
          />
        </div>

        <div className="form-group  col-md-4">
          <label htmlFor="name">Email</label>
          <input
            name="email"
            className="form-control"
            type="text"
            ref={register}
          />
        </div>
      </div>
      <div className="row second-filter">
        <div className="form-group col-md-4">
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
        <div className="form-group col-md-4">
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
      </div>
      <div className="row-button-filter">
        <Button type="submit" className="col-md-4 button-filter">
          Apply Filter
        </Button>
      </div>
      <style jsx>{`
        .row-button-filter {
          display: flex;
          justify-content: center;
        }
        .first-filter,
        .second-filter {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </form>
  );
};
