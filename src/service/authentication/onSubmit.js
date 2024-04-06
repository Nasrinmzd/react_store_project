import { toast } from "react-toastify";
import { instance } from "../config";

export async function onSubmit(data, setCookie, navigate) {

  try {
    const response = await instance.post("/auth/login", data);
    const { token } = response;

    setCookie("authToken", token, { path: "/", expiresInMins: 30 });
    toast.success("Sign in successful 😅");

    navigate('/')

  } catch (error) {
    console.log(error);
    toast.error("Login failed ☹️");
  }
}
