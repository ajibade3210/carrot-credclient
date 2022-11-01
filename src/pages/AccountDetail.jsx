import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchOne, updateAccount } from '../helper/fetch';
import image from "../util/pic.jpg";

const AccountDetail = () => {
   const [client, setClient] = useState([]);
   const [amount, setAmount] = useState(0);

   const location = useLocation()
   const navigate = useNavigate();
   const clientId = location.pathname.split("/")[2]

   useEffect(() => {
     const fetchAllClient = async () => {
         const res = await fetchOne(clientId);
         setClient(res);
     };
     fetchAllClient();
   }, [amount]);

   const handleCredit = async e => {
    let type= "credit"
     e.preventDefault();
     await updateAccount(amount, clientId, type);
     setAmount(0);
    };

  const handleDebit = async e => {
    let type = "debit";
    e.preventDefault();
    await updateAccount(amount, clientId, type);
    setAmount(0);
   };

  return (
    <>
      <button
        className="btn btn-secondary m-5 btn-sm btn-md"
        onClick={e => navigate("/")}
      >
        back
      </button>
      <div className="container d-flex">
        <img
          src={image}
          className="img-thumbnail w-50 h-50"
          alt="client avatar"
        />
        <div className="h3 flex-grow-1 p-2 ms-5">
          <p>Firstname: {client.firstname}</p>
          <p>Lastname: {client.lastname}</p>
          <p className="mb-5">
            Total {client.accountType || "amount"}: $
            <mark>{client.amount}</mark>
          </p>
          <form className="">
            <input
              className="w-20 border border-primary p-2 my-2"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-danger ms-5 p-2"
              onClick={handleCredit}
            >
              Credit
            </button>
            <button
              type="submit"
              className="btn btn-danger ms-2 p-2"
              onClick={handleDebit}
            >
              Debit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountDetail