import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

interface ErrorAlertProps {
  errorMessage: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ errorMessage }) => {
  const [state, setState] = useState({
    open: true,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message={errorMessage}
        key={vertical + horizontal}
      />
    </div>
  );
};
