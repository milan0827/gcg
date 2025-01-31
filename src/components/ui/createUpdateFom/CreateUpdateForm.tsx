"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateUpdateFormSchema,
  CreateUpdateType,
} from "./schema/createUpdateForm";
const CreateUpdateForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateUpdateType>({
    resolver: zodResolver(CreateUpdateFormSchema),
  });

  function onSubmit(data: CreateUpdateType) {
    console.log("DATA", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="name" placeholder="Name" {...register("name")} />{" "}
        {!!errors?.name?.message && (
          <p className="text-red-700">{errors?.name?.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="name">Email</label>
        <input type="email" placeholder="emal" {...register("email")} />{" "}
        {!!errors?.email?.message && (
          <p className="text-red-700">{errors?.email?.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="name">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />{" "}
        {!!errors?.password?.message && (
          <p className="text-red-700">{errors?.password?.message}</p>
        )}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CreateUpdateForm;
