import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";
import act from "../../actions/sessions";
import { useDispatch } from "react-redux";

export default function Signup() {
  const [userN, setUserN] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userN || !pwd || !pwd2) {
      toast.warn("One field is missed!");
      return;
    }
    if (pwd !== pwd2) {
      toast.warn("Passwords don't match!");
      return;
    }

    dispatch(act.signup(userN, pwd));
  };
  return (
    <form action="/" method="POST" onSubmit={handleSubmit}>
      <Box className="flex flex-col items-center mx-auto my-2 w-1/4 min-h-3/4 border border-solid border-gray-200 rounded drop-shadow">
        <AccountCircle className="text-9xl rounded-full text-blue-500" fontSize="" sx={{ my: 2 }} />
        <Typography sx={{ my: 2 }}>Sign up</Typography>
        <TextField
          className="w-4/5"
          label="Username"
          type="text"
          sx={{ my: 2 }}
          value={userN}
          onChange={(e) => setUserN(e.target.value)}
        />
        <TextField
          className="w-4/5"
          label="Password"
          type="password"
          sx={{ my: 2 }}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <TextField
          className="w-4/5"
          label="Re-type Password"
          type="password"
          sx={{ my: 2 }}
          value={pwd2}
          onChange={(e) => setPwd2(e.target.value)}
        />
        <Box sx={{ my: 2, display: "flex", justifyContent: "space-evenly", width: "80%" }}>
          {userN && pwd && (
            <Button variant="contained" type="submit">
              Create account
            </Button>
          )}

          {(!userN || !pwd) && (
            <Button disabled variant="contained" type="submit">
              Create account
            </Button>
          )}
        </Box>
        <Link className="pb-4 text-blue-500" to={`/login`} sx={{ "text-decoration": "none" }}>
          Already has an account?
        </Link>
      </Box>
    </form>
  );
}
