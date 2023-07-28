import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";

function Read() {
  const [APIData, setAPIData] = useState([]);
  // const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8000/user").then((response) => {
      setAPIData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //   console.log(APIData);
  const setData = (value) => {
    console.log("prem", value);

    let { firstName, lastName, checkbox, id } = value;
    localStorage.setItem("id", id);
    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checkbox", checkbox);
    // alert(5);
  };

  const deleteData = (id) => {
    try {
      axios.delete(`http://localhost:8000/user/${id}`).then(() => {
        getData();
        toast.success("Data Has been  Deleted !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Link to={"create"}>
        <button className="button">Add</button>
      </Link>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>S.no</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Check</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData &&
            APIData.map((value, ind) => {
              return (
                <Table.Row key={ind}>
                  <Table.Cell>{value.id}</Table.Cell>
                  <Table.Cell>{value.firstName}</Table.Cell>
                  <Table.Cell>{value.lastName}</Table.Cell>
                  <Table.Cell>{value.checkbox ? "yes" : "uncheck"}</Table.Cell>
                  <Table.Cell>
                    <Link to="update">
                      <Button color="green" onClick={() => setData(value)}>
                        Update
                      </Button>
                    </Link>

                    <Button
                      color="red"
                      onClick={() => {
                        deleteData(value.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
                // ) : (
                //   <tr>
                //     <td colSpan={5}>
                //       <h2 className="text-center">{"No data found"}</h2>
                //     </td>
                //   </tr>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
