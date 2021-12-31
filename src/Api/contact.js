import axios from 'axios';

export function  contactRequest(contactObject)
{ 
  return axios({
    method: 'post',
    url: process.env.REACT_APP_BASEURL + 'api/contact/addOrEdit',
    data: contactObject,
    headers: { 'Content-Type': 'application/json' }
  });
}
