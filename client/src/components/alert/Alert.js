// import library
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

// import component
import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {/* loading component */}
      {alert.loading && <Loading />}

      {/* toast component: Error */}
      {alert.error && (
        <Toast
          msg={{ title: "Error", body: alert.error }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="bg-danger"
        />
      )}

      {/* toast component: Success */}
      {alert.success && (
        <Toast
          msg={{ title: "Success", body: alert.success }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="bg-success"
        />
      )}
    </div>
  );
};

export default Notify;
