import "./styles.css";
import { useState, useEffect } from "react";
import Cards from "./Card/Card";
import Pagination from "./Pagination/Pagination";
import Container from '@mui/material/Container';
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FormatUnderlined } from "@mui/icons-material";
import Navbar from './Navbar/Navbar'

export default function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [full_data, setFullData] = useState([]);
  const fun = async () => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await res.json();
    setUsers(json.data);
    console.log(json);
    setFullData(json.total_pages);
  };
  useEffect(() => {
    fun();
  }, []);
  useEffect(() => {
    fun();
  }, [page]);
  return (
    <div className="App">
      <Navbar/>
      <div>
        {users.length &&
          users.map((user) => {
            console.log(user)
            return (
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff"
                }}
              >
                <Grid container spacing={2}>
                  <Grid item width="100%">
                    <Link to={`/${user['id']}`}>
                      <Cards
                        key={user['id']}
                        userid={user['id']}
                        name={user['first_name'] + " " + user['last_name']}
                        email={user['email']}
                        img={user['avatar']}
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
            );
          })}
      </div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100px' }}
      >

        <Grid item xs={3}>
        <Pagination total={full_data} setPage={setPage} />
        </Grid>
      </Grid>
    </div>
  );
}
