import axios from 'axios';

export const createClient = async (client) => {
    let response;
    response = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/clients`,client);
    return response.data.client;
};

export const fetchAll = async () => {
  try {
      let response;
      response = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/clients`);
      return response.data.clients;
    } catch (err) {
      throw err;
    }
};

export const fetchOne = async clientId => {
  try {
    let response;
    response = await axios.get(
      `${process.env.REACT_APP_PUBLIC_URL}/clients/${clientId}`
    );
    return response.data.clients;
  } catch (err) {
    throw err;
  }
};

export const updateAccount = async (amount, clientId, type) => {
  try {
    let response;
    if (type === "credit") {
      response = await axios.put(
        `${process.env.REACT_APP_PUBLIC_URL}/clients/credit/${clientId}`,
        {
          credit: amount,
        }
      );
    } else if (type === "debit") {
      response = await axios.put(
        `${process.env.REACT_APP_PUBLIC_URL}/clients/debit/${clientId}`,
        {
          debit: amount,
        }
      );
    }
    console.log("Client Account Updated");
    return response.data.clients;
  } catch (err) {
    if (err.response.data.message) {
      alert(err.response.data.message);
      return;
    }
    throw err
  }
};
