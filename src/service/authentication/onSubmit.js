import { toast } from "react-toastify";
import { instance } from "../config";

export async function onSubmit(data, setCookie, navigate) {

  try {
    const response = await instance.post("/auth/login", data);
    const { token } = response;

    setCookie("authToken", token, { path: "/",  maxAge: 1800 });
    toast.success("Sign in successful 😅");

    navigate("/");

  } catch (error) {
    toast.error("Login failed ☹️");
  }
}
