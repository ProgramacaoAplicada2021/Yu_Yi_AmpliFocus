export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("Dada");
  console.log(user && user.user && user.user.pk);

  if (user && user.token) {
    return { Authorization: "JWT " + user.token };
  } else {
    return {};
  }
}
