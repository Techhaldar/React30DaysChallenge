import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    // await delay(2);
    let r = fetch("http://localhost:3000/"), {method: "POST", body: JSON.stringify(data)};
    let res = await (await r).text(console.log(data, res));
    console.log(data);
  };

  return (
    <>
      {isSubmitting && <div className="text-white">Loading..</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username" className="text-white">
            Username:
          </label>{" "}
          <input
            type="text"
            name="username"
            placeholder="username"
            className="p-2"
            {...register("username", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 3, message: "min length is 3" },
              maxLength: { value: 9, message: "max length is 9" },
            })}
          />
          {errors.username && (
            <div className="text-red-500 italic">{errors.username.message}</div>
          )}
          <br />
          <br />
          <label htmlFor="password" className="text-white">
            Password:
          </label>{" "}
          <input
            type="password"
            name="password"
            className="p-2 "
            placeholder="password"
            {...register("password", {
              required: {
                value: true,
                message: "this field is required",
              },
              minLength: { value: 3, message: "min Length is 3" },
            })}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
          <br />
          <input
            type="submit"
            value="submit"
            disabled={isSubmitting}
            className="text-black m-2 px-8 p-2 bg-green-500 rounded-xl"
          />
        </form>
      </div>
    </>
  );
};

export default App;
