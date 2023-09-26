import { useContext } from 'react';
import { ApiContext } from '../context/apiContext/ApiContext';

const useApi = () => useContext(ApiContext);
export default useApi;