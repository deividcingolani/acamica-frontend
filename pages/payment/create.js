import { Layout } from "../../components/Layout";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Router from "next/router";
import {
  paymentsTypesApi,
  paymentsDuesApi,
  createPaymentApi,
  studentsApi
} from "../../lib/Api";

const CreatePayment = props => {
  const { handleSubmit, register } = useForm();
  const { paymentTypes, duesOptions, students } = props;
  const onSubmit = async values => {
    try {
      const paymentEdited = {
        payment_type: values.paymentType,
        dues: values.dues,
        student: values.student
      };
      await createPaymentApi(paymentEdited);

      Router.push("/payments");
    } catch (error) {
      alert("there is an error with creation of Payment");
      event.preventDefault();
    }
  };

  return (
    <Layout title="Create new Payment" requireLogin={true}>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="formFilter">
          <div className="inputs">
            <div className="form-group  col-md-6">
              <label htmlFor="student">Student</label>
              <select
                className="form-control"
                name="student"
                multiple={false}
                ref={register}
              >
                {students.map(student => (
                  <option value={student.id} key={student.id}>
                    {student.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="paymentType">Payment Type</label>
              <select
                className="form-control"
                name="paymentType"
                multiple={false}
                ref={register}
              >
                {paymentTypes.map(payment => (
                  <option value={payment.id} key={payment.id}>
                    {payment.description}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="dues">Dues</label>
              <select
                className="form-control"
                name="dues"
                multiple={false}
                ref={register}
              >
                {duesOptions.sort().map(dueOption => (
                  <option value={dueOption.id} key={dueOption.id}>
                    {dueOption.value}
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
              className="col-md-3 edit-button"
              variant="success"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

CreatePayment.getInitialProps = async function() {
  const paymentTypes = await paymentsTypesApi();
  const duesOptions = await paymentsDuesApi();
  const students = await studentsApi();
  return {
    paymentTypes,
    duesOptions,
    students
  };
};

export default CreatePayment;
