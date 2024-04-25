import './App.css';
import loginIcon from "./assets/icons/undraw_fingerprint_login_re_t71l (1).svg"
import registerIcon from "./assets/icons/undraw_my_password_re_ydq7.svg"

function App() {
  return (
      <div className="App">
          {/*<div className="flex min-h-screen items-center justify-center md:bg-background">*/}
          {/*    <div className="flex w-full rounded-xl bg-white md:w-4/6	md:max-w-5xl md:shadow">*/}
          {/*        <div className="flex w-full flex-col items-center space-y-5 p-10 md:w-3/6">*/}
          {/*            <div className="flex flex-col items-center justify-center space-y-2">*/}
          {/*                <h1 className=" text-3xl font-bold tracking-wide">Welcome</h1>*/}
          {/*                <h1 className=" text-3xl font-bold tracking-wide">Back!</h1>*/}
          {/*                <p className="text-secondary">Sign in with your accoun!</p>*/}
          {/*            </div>*/}
          {/*            <div className="space-x-05 flex w-full items-center">*/}
          {/*                <div className="flex w-full flex-col justify-center space-y-1">*/}
          {/*                    <input*/}
          {/*                        placeholder="Email"*/}
          {/*                        className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"*/}
          {/*                        type="text"*/}
          {/*                    />*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div className="space-x-05 flex w-full items-center">*/}
          {/*                <div className="flex w-full flex-col justify-center space-y-1">*/}
          {/*                    <input*/}
          {/*                        placeholder="Password"*/}

          {/*                        className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"*/}
          {/*                        type="text"*/}
          {/*                    />*/}

          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div className="space-x-05 flex w-full items-center"></div>*/}
          {/*            <div className="flex w-full flex-col items-center space-y-2">*/}
          {/*                <button*/}
          {/*                    className="main-btn w-full py-4 text-white"*/}
          {/*                >*/}
          {/*                    Login*/}
          {/*                </button>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <div*/}
          {/*            className="hidden w-3/6 flex-col items-center justify-center space-y-5 rounded-br-xl rounded-tr-xl bg-primary bg-opacity-80 p-5 md:flex">*/}
          {/*            <img*/}
          {/*                className="w-72"*/}
          {/*                src={loginIcon}*/}
          {/*                alt="Ikona ar lietotāja reģistrāciju"*/}
          {/*            />*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className="flex min-h-screen items-center justify-center md:bg-background">
              <div className="flex w-full rounded-xl bg-white md:w-4/6	md:max-w-5xl md:shadow">
                  <div className="flex w-full flex-col items-center space-y-5 p-10 md:w-3/6">
                      <div className="flex flex-col items-center justify-center space-y-2">
                          <h1 className=" text-3xl font-bold tracking-wide">Welcome</h1>
                          <h1 className=" text-3xl font-bold tracking-wide">to BlogThat!</h1>
                          <p className="text-secondary">Sign un and explore!</p>
                      </div>
                      <div className="space-x-05 flex w-full items-center">
                          <div className="flex w-full flex-col justify-center space-y-1">
                              <input
                                  placeholder="Name"
                                  className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                                  type="text"
                              />
                          </div>
                      </div>
                      <div className="space-x-05 flex w-full items-center">
                          <div className="flex w-full flex-col justify-center space-y-1">
                              <input
                                  placeholder="Email"
                                  className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                                  type="text"
                              />
                          </div>
                      </div>
                      <div className="space-x-05 flex w-full items-center">
                          <div className="flex w-full flex-col justify-center space-y-1">
                              <input
                                  placeholder="Password"

                                  className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                                  type="text"
                              />

                          </div>
                      </div>
                      <div className="space-x-05 flex w-full items-center">
                          <div className="flex w-full flex-col justify-center space-y-1">
                              <input
                                  placeholder="Confirm password"

                                  className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                                  type="text"
                              />

                          </div>
                      </div>

                      <div className="space-x-05 flex w-full items-center"></div>

                      <div className="flex w-full flex-col items-center space-y-2">
                          <button
                              className="main-btn w-full py-4 text-white"
                          >
                              Register
                          </button>
                      </div>
                  </div>
                  <div
                      className="hidden w-3/6 flex-col items-center justify-center space-y-5 rounded-br-xl rounded-tr-xl bg-primary bg-opacity-80 p-5 md:flex">
                      <img
                          className="w-72"
                          src={registerIcon}
                          alt="Ikona ar lietotāja reģistrāciju"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
