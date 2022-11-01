import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { fetchAll } from '../helper/fetch';

const Clients = () => {
    const [clients, setClients] = useState([])

    useEffect(()=> {
        const fetchAllClients = async ()=> {
          const res = await fetchAll();
          setClients(res);
        }
        fetchAllClients()
    }, [])

  return (
    <div className="container p-5">
      <h1 className="fst-italic">Carrot Credit Banking</h1>
      <div>
        <table className="table h4">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Client Name</th>
              <th>Amount</th>
              <th>Accont Type</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>
                  <Link
                    to={`/view/${client.id}`}
                    className="text-decoration-none"
                  >
                    {client.firstname + " " + client.lastname}
                  </Link>
                </td>
                <td>{client.amount}</td>
                <td>{client.accountType || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-dark">
        <Link to="/add" className="text-decoration-none text-light h5">
          Add Client
        </Link>
      </button>
    </div>
  );
}

export default Clients