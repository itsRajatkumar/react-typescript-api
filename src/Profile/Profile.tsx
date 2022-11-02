import * as React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [full_data, setFullData] = useState([]);
  const fun = async () => {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await res.json();
    setUser(json.data);
    console.log(json.data, id);
  };
  useEffect(() => {
    fun();
  }, []);
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={user.avatar}
            alt={user.first_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.first_name + " " + user.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
