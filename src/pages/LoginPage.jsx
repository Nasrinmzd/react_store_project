import { Login, Sun1 } from "iconsax-react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import instance from "../service/axiosInterceptor";



function LoginPage() {
  const { register, handleSubmit } = useForm({
    defaultValues:{
      username: 'kminchelle',
    password: '0lelplR',
    }
  });
  const [cookies, setCookie] = useCookies(['authToken'])

  async function onSubmit(data) {
    try {
      const response = await instance.post(
        'auth/login',
        data
      );
      const { token } = response;

      setCookie('authToken', token, {path: "/", expiresInMins: 30});
      toast.success('Login successful:)')

    } catch (error) {
      toast.error('Login failed:(')
    }
  }

  return (
    <section className="flex h-screen bg-purple-100">
      <div className="m-auto w-3/5 sm:h-screen md:h-3/4 bg-white rounded-xl flex flex-col-reverse sm:flex-col md:flex-row justify-between truncate ">
        <div className="flex flex-col flex-1 items-center bg-white m-2">
          <div className="mt-6">
            <Sun1 size="75" color="#4f46e5" variant="Bold" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mt-10 mb-5">Please Login to Your Account</p>
            <div className="flex flex-col mx-auto max-w-xs">
              <input
                className="w-full px-16 pl-3 py-3 rounded-lg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Username"
                id="username"
                {...register("username")}
              />
              <input
                className="w-full px-16 pl-3 py-3 rounded-lg  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
                id="password"
                {...register("password")}
              />
              <button className="mt-5 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 text-white w-full py-3 rounded-lg flex items-center justify-center focus:shadow-outline focus:outline-none">
                <Login size="25" color="#fff" />
                <span className="ml-1">Sign in</span>
              </button>

              <div className="flex items-center mt-3">
                <input value="" type="checkbox" id="exampleCheck3" />
                <label className="ml-1" htmlFor="exampleCheck3">
                  Remember me
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="flex flex-1 bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="ms:w-11/12 md:w-full m-auto"
            alt="Phone image"
          />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
