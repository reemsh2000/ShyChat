import React, { useEffect} from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const state = useSelector((state: State) => state.showErr.errState);
  const message = useSelector((state: State) => state.showErr.errMessage);
  useEffect(()=> {

  }, [state])
  const dispatch = useDispatch();
  const { handleErrorMessage } = bindActionCreators(actionCreators, dispatch);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    handleErrorMessage({ errState: false, errMessage: "" });
  };

  return (
    <Stack>
      <Snackbar open={state} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
