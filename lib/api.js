import axios from "axios";

/* Get data of Payment with Payment  data and student data */
export const paymentStudent = async paymentId => {
  const { payment } = await axios
    .get(`http://0.0.0.0:8000/api/payments/${paymentId}`)
    .then(res => {
      return { payment: res.data };
    });
  /* This is for connect data of payment with student and return all Data */
  const studentPayment = await axios
    .get(`http://0.0.0.0:8000/api/students/${payment.student}`)
    .then(res => {
      const student = res.data;
      return {
        name: student.name,
        email: student.email,
        career: student.career_description,
        dateBirth: student.date_birth,
        phone: student.phone_number,
        country: student.country_description,
        city: student.city_description,
        paymentType: payment.paymentDescription,
        dues: payment.dues
      };
    });
  return studentPayment;
};

export const resCareer = async () => {
  const {data} = await axios.get("http://0.0.0.0:8000/api/students/careers/");
  const careers = await data;
  return { careers };
};
