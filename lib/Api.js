import axios from "axios";
const url = "https://apiacamica2020.herokuapp.com";

export const citiesApi = async () => {
  const res = await axios.get(url + "/api/cities/");
  return res.data;
};
export const countriesApi = async () => {
  const res = await axios.get(url + "/api/countries/");
  return res.data;
};

export const careersApi = async () => {
  const res = await axios.get(url + "/api/careers/");
  return res.data;
};

export const studentsApi = async () => {
  const res = await axios.get(url + "/api/students/");
  return res.data;
};

export const studentIdApi = async id => {
  const res = await axios.get(url + `/api/students/${id}`);
  return res.data;
};

export const paymentsApi = async () => {
  const res = await axios.get(url + "/api/payments/");
  return res.data;
};

export const paymentIdApi = async id => {
  const res = await axios.get(url + `/api/payments/${id}`);
  return res.data;
};

export const paymentsTypesApi = async () => {
  const res = await axios.get(url + "/api/payments/types");
  return res.data;
};

export const paymentsDuesApi = async () => {
  const res = await axios.get(url + "/api/payments/dues");
  return res.data;
};

export const createPaymentApi = async ( paymentEdited ) => {
  try {
    await axios.post(url + `/api/payments/`, paymentEdited);
  } catch (error) {
    console.log("There is an error when is created the payment");
  }
};

export const uploadPaymentApi = async ( paymentEdited, idPayment ) => {
  try {
    await axios.put(url + `/api/payments/${idPayment}`, paymentEdited);
  } catch (error) {
    console.log("There is an error when is upload the payment");
  }
};

export const createStudentApi = async studentEdited => {
  try {
    await axios.post(url + `/api/students/`, studentEdited);
  } catch (error) {
    console.log("There is an error when is created the Student");
  }
};

export const uploadStudentApi = async (studentEdited, id) => {
  try {
    await axios.put(url + `/api/students/${id}`, studentEdited);
  } catch (error) {
    console.log("There is an error when is upload the Student");
  }
};
