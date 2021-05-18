import { combineReducers } from "redux";
import authReducer from "./authReducer";
import routingReducer from "./routingReducer";
import incidentReducer from "./incidentReducer";

export default combineReducers({
  auths: authReducer,
  routings: routingReducer,
  incidents: incidentReducer,
});
