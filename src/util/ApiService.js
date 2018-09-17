import { create } from 'apisauce';

const ApiService = create({
  baseURL: 'https://app.wsatraining.com/wp-json',
})

export default ApiService;
