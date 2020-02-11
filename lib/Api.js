import axios from "axios";
const url = "http://0.0.0.0:8000";

export const citiesApi = async () => {
  const res = await axios.get(url + "/api/cities/");
  return res.data;
};
export const countriesApi = async () => {
  const res = await axios.get("http://0.0.0.0:8000/api/countries/");
  return res.data;
};

export const careersApi = async () => {
  const res = await axios.get("http://0.0.0.0:8000/api/careers/");
  return res.data;
};

export const studentsApi = async () => {
  const res = await axios.get("http://0.0.0.0:8000/api/students/");
  return res.data;
};

export const studentIdApi = async id => {
  const res = await axios.get(`http://0.0.0.0:8000/api/students//${id}`);
  return res.data;
};

export const paymentsApi = async () => {
  const res = await axios.get("http://0.0.0.0:8000/api/payments/");
  return res.data;
};

export const paymentIdApi = async id => {
  const res = await axios.get(`http://0.0.0.0:8000/api/payments/${id}`);
  return res.data;
};

export const paymentsTypesApi = async () => {
  const res = await axios.get("http://0.0.0.0:8000/api/payments/types");
  return res.data;
};

export const paymentsDuesApi = async () => {
  const res = await axios.get("http://0.0.0.0:8000/api/payments/dues");
  return res.data;
};
