import axios from 'axios';
import urlFamilyTree from '../Global';

export const filterTree = (data) => {
  const response = [];
  data.forEach((leaf) => {
    response.push({
      id: leaf.id,
      name: leaf.name,
    });
  });
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
