import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/SocialLogin/GoogleLogin";

export default function Login() {
  // const chaptchaRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User logIn successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    // const chaptchaValue = chaptchaRef.current.value;
    const chaptchaValue = e.target.value;
    if (validateCaptcha(chaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In | Bistro Boss</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  md:w-2/3 md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 bg-base-100 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  // ref={chaptchaRef}
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                {/* <button type="button"
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  validate
                </button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value={"Login"}
                />
              </div>
            </form>
            <p className="p-4">
              <small>
                New Here? <Link to={"/signup"}>Create an accout</Link>
              </small>
            </p>
            <div className="text-center">
            <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
