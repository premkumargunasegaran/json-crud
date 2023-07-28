import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    try {
      axios.post("http://localhost:8000/user", {
        firstName,
        lastName,
        checkbox,
      });
      setFirstName("");
      setLastName("");
      setCheckbox(false);
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
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
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => {
              setCheckbox(!checkbox);
            }}
          />
        </Form.Field>
        <Link to={"/"}>
          <Button type="submit" onClick={postData}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}
