import * as React from "react";
import { useForm } from "react-hook-form";
import { handleLogin } from "./../../services/auth";
import APIContext from "../../apiService/apiContext";

export const LoginForm: React.FC = () => {
  const API = React.useContext(APIContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    handleLogin(data, API);
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("username")} />
      <input type="password" {...register("password")} />

      <input type="submit" />
    </form>
  );
};
