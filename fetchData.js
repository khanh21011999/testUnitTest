import axios from 'axios';

export default async function FetchData() {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  return axios.get(url).then(res => res.data);
}
