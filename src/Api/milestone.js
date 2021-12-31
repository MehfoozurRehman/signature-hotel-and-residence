import axios from 'axios';

export function  GetAllMileStones()
{
    return axios.get(process.env.REACT_APP_BASEURL + 'api/milestone/list');
}