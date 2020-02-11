import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
export const PaymentsFilter = props => {
  
  const { handleSubmit, register } = useForm();
  const onSubmit = values => {
    let studentsFilter = props.students;
  
    /* Filter by name */
    if (values.name.trim() !== "") {
      studentsFilter = studentsFilter.filter(student =>
        student.name.toLowerCase().includes(values.name.toLowerCase())
      );
    }

    if (values.email.trim() !== "") {
      studentsFilter = studentsFilter.filter(student =>
        student.email.toLowerCase().includes(values.email.toLowerCase())
      );
    }

    if (values.country.trim() !== "" && values.country.trim() !== "All") {
      studentsFilter = studentsFilter.filter(
        student => student.country == values.country
      );
    }

    if (values.career.trim() !== "" && values.career.trim() !== "All") {
      studentsFilter = studentsFilter.filter(
        student => student.career == values.career
      );
    }

    props.setstudents(studentsFilter);
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
