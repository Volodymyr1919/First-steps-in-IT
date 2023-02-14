// eslint-disable-next-line no-unused-vars
import React, { useState }  from "react";
import { useForm }          from "react-hook-form";

export default function SignIn() {

    // const [modalMessages, setModalMessages]   = useState("");

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
            // setModalMessages("Sent successfuly");
        }
      };
      const onError = (data) => {
        if(data) {
            alert("Please fill up all required fields");
            // setModalMessages("Please fill up all required fields");
        }
      };

    return(
        <form onSubmit={handleSubmit(onSubmit, onError)}>
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
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModals"
                >
                    Sign In
                </button>
            </div>

            <div className="modal fade" id="exampleModals" tabIndex="-1" aria-labelledby="exampleModalsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* {modalMessages} */}
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