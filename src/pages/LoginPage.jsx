function LoginPage() {
  return (
    <section className="flex h-screen bg-purple-100">
      <div className="m-auto w-3/5 sm:h-screen md:h-3/4 bg-white rounded-xl flex flex-col-reverse sm:flex-col md:flex-row justify-between truncate ">
        <div className="flex flex-col flex-1 items-center bg-white m-2">
          <div className="mt-6">
            <img
              className="mx-auto w-16"
              src="../public/logo_login.png"
              alt="logo"
            />
          </div>

          <form>
            <p className="mt-10 mb-5">Please Login to Your Account</p>
            <div className="flex flex-col mx-auto max-w-xs">
              <input
                className="w-full px-16 pl-3 py-3 rounded-lg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="w-full px-16 pl-3 py-3 rounded-lg  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
              />
              <button className="mt-5 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 text-white w-full py-3 rounded-lg flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M11.68 14.62l2.56-2.56-2.56-2.56M4 12.06h10.17"
                  ></path>
                  <path
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
                  ></path>
                </svg>
                <span className="ml-1">Login</span>
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
