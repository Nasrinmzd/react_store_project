import { toast } from "react-toastify";
import { instance } from "../config";

export async function onSubmit(data, setCookie) {

  try {
    const response = await instance.post("/auth/login", data);
    const { token } = response;

    setCookie("authToken", token, { path: "/", expiresInMins: 30 });
    toast.success("Sign in successful 😅");


  } catch (error) {
    toast.error("Login failed ☹️");
  }
}
