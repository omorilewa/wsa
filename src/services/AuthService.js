import ApiService from './ApiService';

export default {
  login(credentials) {
    return ApiService.post('/jwt-auth/v1/token', credentials)
  }
}
