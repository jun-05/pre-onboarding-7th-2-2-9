import axios from 'axios';
export const getData = async file => {
  const response = await axios.get(`${file}`);
  return response.data;
};
