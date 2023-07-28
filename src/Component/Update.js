import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstname"));
    setLastName(localStorage.getItem("lastName"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);
  const updateAPIData = () => {
    try {
      axios.put(`http://localhost:8000/user/${id}`, {
        firstName,
        lastName,
        checkbox,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            checked={checkbox}
            label="I agree to the Terms and Conditions"
            onChange={(e) => {
              setCheckbox(!checkbox);
            }}
          />
        </Form.Field>
        <Link to={"/"}>
          <Button type="submit" onClick={updateAPIData}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Update;
