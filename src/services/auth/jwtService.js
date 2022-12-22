import jwt_decode from "jwt-decode";

export default class jwtService {
  token = localStorage.getItem("jwt");

  decodeJwt = () => {
    var decoded = jwt_decode(this.token);

    console.log(decoded);
  };
}
