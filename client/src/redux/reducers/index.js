import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import theme from "./themeReducer";
import call from "./callReducer";
import detail from "./detailPostReducer";
import discover from "./discoverReducer";
import message from "./messageReducer";
import modal from "./modalReducer";
import notify from "./notifyReducer";
import online from "./onlineReducer";
import peer from "./peerReducer";
import post from "./postReducer";
import profile from "./profileReducer";
import socket from "./socketReducer";
import status from "./statusReducer";
import suggestion from "./suggestionsReducer";
export default combineReducers({
  auth,
  alert,
  theme,
  call,
  detail,
  discover,
  message,
  modal,
  notify,
  online,
  peer,
  post,
  profile,
  socket,
  status,
  suggestion,
});
