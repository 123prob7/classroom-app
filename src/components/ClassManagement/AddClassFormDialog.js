import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createNewClass } from "../../actions/user.service";

export default function FormDialog({ openForm, handleDialogClose, handlePost }) {
  const [clsName, setClsName] = React.useState("");
  const [section, setSection] = React.useState("");

  const hdClose = () => {
    handleDialogClose();
    setClsName("");
    setSection("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clsName) return;
    handleDialogClose();

    createNewClass(clsName, section)
      .then((res) => {
        handlePost(res.data.newItem);
      })
      .catch();
    setClsName("");
    setSection("");
  };

  const open = openForm;
  return (
    <Dialog open={open} onClose={hdClose}>
      <form action="/" method="POST" onSubmit={handleSubmit}>
        <DialogTitle>Create class</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="className"
            label="Class name (required)"
            type="text"
            fullWidth
            variant="standard"
            name="className"
            value={clsName}
            onChange={(e) => setClsName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="section"
            label="Section"
            type="text"
            fullWidth
            variant="standard"
            name="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hdClose}>Cancel</Button>
          {clsName && (
            <Button type="submit" onClick={handleSubmit}>
              Create
            </Button>
          )}
          {!clsName && (
            <Button disabled onClick={handleSubmit}>
              Create
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
}
