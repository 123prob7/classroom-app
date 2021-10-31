import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import act from "../../actions/sessions";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [userN, setUserN] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.rootURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userN || !pwd) return;

    dispatch(act.login(userN, pwd));
  };

  return (
    <form action="/" method="POST" onSubmit={handleSubmit}>
      <Box className="flex flex-col items-center mx-auto my-2 w-1/4 min-h-3/4 border border-solid border-gray-200 rounded drop-shadow">
        <AccountCircle className="text-9xl rounded-full text-blue-500" fontSize="" sx={{ my: 2 }} />
        <Typography sx={{ my: 2 }}>Sign in</Typography>
        <TextField
          className="w-4/5"
          label="Username"
          type="text"
          value={userN}
          onChange={(e) => setUserN(e.target.value)}
          sx={{ my: 2 }}
        />
        <TextField
          className="w-4/5"
          label="Password"
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          sx={{ my: 2 }}
        />
        <Box className="flex justify-evenly w-4/5" sx={{ my: 2 }}>
          {userN && pwd && (
            <Button variant="contained" type="submit">
              Log In
            </Button>
          )}

          {(!userN || !pwd) && (
            <Button disabled variant="contained" type="submit">
              Log In
            </Button>
          )}
          <Link to={`${url}/signup`} sx={{ "text-decoration": "none" }}>
            <Button variant="outlined">Sign up</Button>
          </Link>
        </Box>
      </Box>
    </form>
  );
}
