import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => 
    {
      const userInfo = {
        
        email: data.email,
        password: data.password,
      };
      await axios
        .post("http://localhost:4001/users/login", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            toast.success(' Login Successfully');
            document.getElementById("my_modal_1").close();
            setTimeout(()=>{
             
              window.location.reload();
              localStorage.setItem("Users", JSON.stringify(res.data.user));
            },1000)
            
            
          }
          
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
            toast.error("Error:" + err.response.data.message);
            setTimeout(()=>{},2000)
          }
        });
      }
  return (
    <div >
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  dark:bg-slate-600 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to='/'
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-600 dark:text-white"
              onClick={()=>document.getElementById("my_modal_1").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-600 dark:text-white"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>PassWord</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-600 dark:text-white"
                {...register("password", { required: true })}
              /><br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-purple-700 text-white rounded-md px-6 py-3 hover:bg-pink-700 duration-150">
                Login
              </button>
              <p>
                Not registered{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-700 cursor-pointer"
                >
                  Sign-up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
