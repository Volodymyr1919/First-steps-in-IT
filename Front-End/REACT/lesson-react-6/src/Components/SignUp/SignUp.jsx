import React, { useState }  from "react";
import { useForm }          from "react-hook-form";

export default function SignUp() {
    
    // const [modalMessage, setModalMessage]   = useState("");
    const [password, setPassword]           = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange",
      });
      const onSubmit = (data) => {
        if(data) {
            alert("Sent successfuly");
            // setModalMessage("Sent successfuly");
        }
      };
      const onError = (data) => {
        if(data) {
            alert("Please fill up all required fields");
            // setModalMessage("Please fill up all required fields");
        }
      };
      function updatePassword(e) {
        setPassword(e.target.value);
      };

    const passwordMatchValidator = (value) => {
        return password === value ? true : "Passwords do not match";
    };

    return(
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="form sign-up">
                <h2>Time to feel like home,</h2>
                <label>
                    <span>E-Mail</span>
                    <input
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "The field is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}/>
                        {errors.email && <p className="errorMessage">{errors.email.message}</p>}
                </label>
                <label>
                    <span>Name</span>
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
                            },
                            value: password,
                            onChange: updatePassword
                        })}
                    />
                    {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                </label>
                <label>
                    <span>Confirm Password</span>
                    <input
                        type="password"
                        name="confPassword"
                        {...register("confPassword", {
                            required: "The field is required",
                            validate: passwordMatchValidator
                        })}/>
                        {errors.confPassword && <p className="errorMessage">{errors.confPassword.message}</p>}
                </label>
                <button
                    type="submit"
                    className="submit"
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal"
                >
                    Sign Up
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
                        {/* {modalMessage} */}
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