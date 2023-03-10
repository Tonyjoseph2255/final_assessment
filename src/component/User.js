import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      {" "}
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        {" "}
        <TableHead>
          {" "}
          <TableRow>
            {" "}
            <TableCell>ID</TableCell> <TableCell>Name</TableCell>{" "}
            <TableCell>Email</TableCell> <TableCell>Phone</TableCell>{" "}
            <TableCell>Website</TableCell>{" "}
          </TableRow>{" "}
        </TableHead>{" "}
        <TableBody>
          {" "}
          {users.map((user) => (
            <TableRow key={user.id}>
              {" "}
              <TableCell component="th" scope="row">
                {" "}
                {user.id}
              </TableCell>{" "}
              <TableCell>{user.name}</TableCell>{" "}
              <TableCell>{user.email}</TableCell>{" "}
              <TableCell>{user.phone}</TableCell>{" "}
              <TableCell>{user.website}</TableCell>{" "}
            </TableRow>
          ))}
        </TableBody>{" "}
      </Table>{" "}
    </TableContainer>
  );
};
export default UserList;
