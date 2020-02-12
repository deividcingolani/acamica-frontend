import { Layout } from "../../components/Layout";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Router from "next/router";
import {
  paymentsTypesApi,
  paymentIdApi,
  paymentsDuesApi,
  uploadPaymentApi,
  studentsApi
} from "../../lib/Api";

const EditPayment = props => {
  const { handleSubmit, register } = useForm();
  const { paymentTypes, idPayment, payment, students, duesOptions } = props;

  const onSubmit = async values => {
    try {
      const paymentEdited = {
        payment_type: values.paymentType,
        dues: values.dues,
        student: values.student
      };
      await uploadPaymentApi(paymentEdited, idPayment);

      Router.push("/payments");
    } catch (error) {
      alert("there is an error with the upload");
      event.preventDefault();
    }
  };

  return (
    <Layout title={`Payment Nro  ${idPayment}`} requireLogin={true}>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className=" formFilter">
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
            <div className="form-group col-md-6">
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
              Edit payment
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

EditPayment.getInitialProps = async function({ query }) {
  const { id } = query;
  const paymentTypes = await paymentsTypesApi();
  const payment = await paymentIdApi(id);
  const students = await studentsApi();
  const duesOptions = await paymentsDuesApi();
  return {
    paymentTypes,
    idPayment: id,
    payment,
    duesOptions,
    students
  };
};

export default EditPayment;
