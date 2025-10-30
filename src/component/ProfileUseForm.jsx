import React from "react";
import { useFormContext } from "react-hook-form";
import * as yup from "yup";

// Yup validation schema for Profile
export const profileSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
});

function ProfileUseForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4 border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">Profile Info</h2>

      <input
        {...register("name")}
        placeholder="Full Name"
        className="w-full border p-2 rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register("email")}
        placeholder="Email Address"
        className="w-full border p-2 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
  );
}

export default ProfileUseForm;
