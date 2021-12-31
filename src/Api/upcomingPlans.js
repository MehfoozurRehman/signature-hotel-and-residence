import axios from "axios";

export function GetAllUpComingPlans() {
  return axios.get(process.env.REACT_APP_BASEURL + "api/Newsletter/list");
}
