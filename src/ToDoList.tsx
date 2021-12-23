import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("FirstName", { required: "Password is required", minLength: {value:5, message:"Your password is too short."} })}
          placeholder="FirstName"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
