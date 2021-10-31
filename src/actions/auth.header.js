export default function authHeader() {
  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));

  if ((sessionUser && sessionUser.accessToken) || (user && user.accessToken)) {
    return (sessionUser && sessionUser.accessToken) || (user && user.accessToken);
  } else {
    return null;
  }
}
