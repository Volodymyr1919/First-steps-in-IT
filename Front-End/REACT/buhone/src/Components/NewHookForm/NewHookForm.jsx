import React from "react";
import { useForm } from "react-hook-form";

function NewHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const passwordMatchValidator = (value) => {
    const password = "123";
    return password === value ? true : "Passwords do not match";
   };

  console.log(watch("example"));
  console.log("Errors at start", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        name="id"
        {...register("id", {
          required: "The field is required",
          minLength: {
            value: 0,
            message: "Minimum 0 symbols",
          },
          maxLength: {
            value: 10,
            message: "Maximum 10 symbols",
          },
        })}
      />
      {errors.id && <p>{errors.id.message}</p>}
      <textarea
        name="area"
        {...register("area", { required: true, maxLength: 180 })}
      ></textarea>
      {errors.area && errors.area.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      <input
        name="email"
        {...register("email",{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
      />
      
      <input
        name="passwordConfirm"
        {...register("passwordConfirm", {
          validate: passwordMatchValidator
        })}
      />

      <input type="submit" />
    </form>
  );
}

export default NewHookForm;
