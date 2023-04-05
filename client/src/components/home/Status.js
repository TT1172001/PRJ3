// import libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import components
import Avatar from "../Avatar";
// import resources
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const Status = () => {
  // set state
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Template
  return (
    <div className="status my-3 d-flex">
      <Avatar src={auth.user.avatar} size="big-avatar" />

      <button
        className="statusBtn flex-fill"
        onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
      >
        {auth.user.username}, what are you thinking?
      </button>
    </div>
  );
};

export default Status;
