import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../helper/fetch';

const Add = () => {
    const [client, setClient] = useState({
      firstname: "",
      lastname: "",
      amount: "",
      accountType: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setClient((prev)=> ({...prev, [e.target.name]: e.target.value}))
    };

    const onSubmit = async (e)=> {
        e.preventDefault()
        try{
            await createClient(client);
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className="container p-5">
      <button
        className="btn btn-secondary m-5 btn-md"
        onClick={e => navigate("/")}
      >
        back
      </button>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-2 fs-1">New Client Details</h1>
          <form className="w-50" onSubmit={onSubmit}>
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="first name"
              name="firstname"
              onChange={handleChange}
              required
            />
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="last name"
              name="lastname"
              onChange={handleChange}
              required
            />
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="number"
              placeholder="amount"
              name="amount"
              onChange={handleChange}
              required
            />
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="account type"
              name="accountType"
              onChange={handleChange}
              required
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-danger m-5 p-3">
                Save
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Add