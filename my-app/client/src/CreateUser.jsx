import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState();
  const [bankAccountNo, setBankAccountNo] = useState();
  const [bankName, setBankName] = useState();
  const [addressLine1, setAddressLine1] = useState();
  const [addressLine2, setAddressLine2] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", {
        name,
        bankAccountNo,
        bankName,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{
        backgroundImage: "linear-gradient(yellow, green)",
        color: "darkred",
      }}
    >
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Bank Statement</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Bank Account No.</label>
            <input
              type="number"
              placeholder="Enter Account No."
              className="form-control"
              required
              onChange={(e) => setBankAccountNo(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Bank Name</label>
            <input
              type="text"
              placeholder="Enter Bank Name"
              className="form-control"
              required
              onChange={(e) => setBankName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Adderess Line 1</label>
            <input
              type="text"
              placeholder="Enter Address "
              className="form-control"
              required
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Adderess Line 2</label>
            <input
              type="text"
              placeholder="Enter Address 2"
              className="form-control"
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">City</label>
            <input
              type="text"
              placeholder="Enter City Name"
              className="form-control"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Country</label>
            <input
              type="text"
              placeholder="Enter Country Name"
              className="form-control"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Zip Code</label>
            <input
              type="number"
              placeholder="Enter Zip Code"
              className="form-control"
              required
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <Link to="/" className="btn btn-success" style={{ margin: 20 }}>
            Home
          </Link>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
