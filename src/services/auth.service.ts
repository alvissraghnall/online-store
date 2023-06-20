
import {
    PUBLIC_REQ 
} from '.';
import { apiUrl } from ".";

class AuthService {
  login(user) {
    return PUBLIC_REQ
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data["access_token"]) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem("JWT_TOKEN", response.data["access_token"]);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem('user');
  }

  register(user: any) {
    return PUBLIC_REQ.post(apiUrl + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();