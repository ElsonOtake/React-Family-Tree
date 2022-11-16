import axios from 'axios';
import urlFamilyTree from '../Global';

const axiosGetLeaf = async (id) => {
  try {
    const response = await axios.get(`${urlFamilyTree}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default axiosGetLeaf;
