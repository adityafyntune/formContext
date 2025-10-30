import React from "react";
import { useFormContext } from "react-hook-form";
import * as yup from "yup";

export const educationSchema = yup.object({
  school: yup
    .string()
    .required("School name is required")
    .min(2, "School name must be at least 2 characters")
    .max(100, "School name must be less than 100 characters"),
  degree: yup
    .string()
    .required("Degree is required")
    .min(2, "Degree must be at least 2 characters")
    .max(50, "Degree must be less than 50 characters"),
});

function EducationUseFoem() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4 border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">Education Info</h2>

      <input
        {...register("school")}
        placeholder="School Name"
        className="w-full border p-2 rounded"
      />
      {errors.school && <p className="text-red-500">{errors.school.message}</p>}

      <input
        {...register("degree")}
        placeholder="Degree"
        className="w-full border p-2 rounded"
      />
      {errors.degree && <p className="text-red-500">{errors.degree.message}</p>}
    </div>
  );
}

export default EducationUseFoem;
