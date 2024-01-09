import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [bankAccountNo, setBankAccountNo] = useState();
  const [bankName, setBankName] = useState();
  const [addressLine1, setAddressLine1] = useState();
  const [addressLine2, setAddressLine2] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setBankAccountNo(result.data.bankAccountNo);
        setBankName(result.data.bankName);
        setAddressLine1(result.data.addressLine1);
        setAddressLine2(result.data.addressLine2);
        setCity(result.data.city);
        setCountry(result.data.country);
        setZipCode(result.data.zipCode);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, {
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
      });
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
        <form onSubmit={Update}>
          <h2>Update Bank Statement</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Bank Account No.</label>
            <input
              type="number"
              placeholder="Enter Account No."
              className="form-control"
              value={bankAccountNo}
              onChange={(e) => setBankAccountNo(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Bank Name</label>
            <input
              type="text"
              placeholder="Enter Bank Name"
              className="form-control"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Adderess Line 1</label>
            <input
              type="text"
              placeholder="Enter Address "
              className="form-control"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Adderess Line 2</label>
            <input
              type="text"
              placeholder="Enter Address 2"
              className="form-control"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">City</label>
            <input
              type="text"
              placeholder="Enter City Name"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Country</label>
            <input
              type="text"
              placeholder="Enter Country Name"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Zip Code</label>
            <input
              type="number"
              placeholder="Enter Zip Code"
              className="form-control"
              value={zipCode}
              required
            />
          </div>
          <Link to="/" className="btn btn-success" style={{ margin: 20 }}>
            Home
          </Link>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
