import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ProfileUseForm, { profileSchema } from "../component/ProfileUseForm";
import EducationUseFoem, {
  educationSchema,
} from "../component/EductionUseFoem";
import * as yup from "yup";

export const combinedSchema = yup.object({
  ...profileSchema.fields,
  ...educationSchema.fields,
});

function IndexPageINfoDetails() {
  const profileMethods = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const educationMethods = useForm({
    resolver: yupResolver(educationSchema),
    defaultValues: {
      school: "",
      degree: "",
    },
  });

  const onProfileSubmit = (data) => {
    console.log("Profile Data:", data);
  };

  const onEducationSubmit = (data) => {
    console.log("Education Data:", data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <FormProvider {...profileMethods}>
        <form
          onSubmit={profileMethods.handleSubmit(onProfileSubmit)}
          className="space-y-4"
        >
          <ProfileUseForm />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Profile
          </button>
        </form>
      </FormProvider>

      <FormProvider {...educationMethods}>
        <form
          onSubmit={educationMethods.handleSubmit(onEducationSubmit)}
          className="space-y-4"
        >
          <EducationUseFoem />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Education
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default IndexPageINfoDetails;
