import axios from 'axios';
import urlFamilyTree from '../Global';

export const filterTree = (data) => {
  const response = [];
  // console.log("data", data, "length", data.length, "data[0]", data[0], "data[0].name", data[0].name);
  data.forEach((leaf) => {
    response.push({
      id: leaf.id,
      name: leaf.name,
    });
  });
  // console.log(response);
  return response;
};

const axiosGetTree = async () => {
  try {
    const response = await axios.get(urlFamilyTree);
    return filterTree(response.data);
  } catch (error) {
    throw new Error(error);
  }
};

export default axiosGetTree;
