// eslint-disable-next-line no-unused-vars
import React, { useState }  from "react";
import { useForm }          from "react-hook-form";

export default function SignIn() {

    const [modalMessage, setModalMessage] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        mode: "onChange",
      });
      const onSubmit = (data) => {
        // console.log(data);
        if(!data) {
            setModalMessage("Please fill up required fields");
        } else {
            setModalMessage("Sent successfuly");
        }
      };

      console.log(watch("example"));
      console.log("Errors at start", errors);
    //   setModalMessage(errors);
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form sign-in">
                <h2>Welcome back,</h2>
                <label>
                    <span>name</span>
                    <input
                        type="name"
                        name="name"
                        {...register("name", {
                            required: "The field is required",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 symbols",
                            }
                        })}
                    />
                    {errors.name && <p className="errorMessage">{errors.name.message}</p>}
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        {...register("password", {
                            required: "The field is required",
                            minLength: {
                                value: 6,
                                message: "Minimum 6 symbols",
                            }
                        })}
                    />
                    {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                </label>
                <button
                    type="submit"
                    className="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Sign In
                </button>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {modalMessage}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        </form>
    );
}