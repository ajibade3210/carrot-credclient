import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../helper/fetch';

const Add = () => {
    const [key, setKey] = useState("");
    const [value, setValue] = useState("");
    const [client, setClient] = useState({
      firstname: "",
      lastname: "",
      accountType: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
      setClient((prev)=> ({...prev, [e.target.name]: e.target.value}))
    };

    const onSubmit = async (e)=> {
      e.preventDefault()
      let amount = {}
      amount[key] = +value;
      amount = JSON.stringify(amount)
        try{
            await createClient({...client, amount});
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className="container text-capitalize">
      <button className="btn btn-dark m-5 btn-md" onClick={e => navigate("/")}>
        back
      </button>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-2 fs-1 text-success">New Client Details</h1>
          <form className="w-50" onSubmit={onSubmit}>
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={handleChange}
              required
            />
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={handleChange}
              required
            />
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="Account"
              name="accountType"
              onChange={handleChange}
              required
            />
            <label
              htmlFor="validationDefault01"
              className="w-100 form-label h5 text-success"
            >
              Amount Type
            </label>
            <input
              className="w-50 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="Label"
              value={key}
              onChange={e => setKey(e.target.value)}
              required
            />

            <input
              className="w-25 border border-primary p-2 ms-3 mb-2 fs-3 h-25"
              type="number"
              placeholder="Value"
              value={value}
              onChange={e => setValue(e.target.value)}
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