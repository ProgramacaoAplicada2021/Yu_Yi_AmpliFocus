export function userId() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.user) {
    return user.user.pk;
  } else {
    return null;
  }
}
