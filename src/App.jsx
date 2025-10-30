import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import IndexPageINfoDetails from "./page/IndexPageINfoDetails";

function App() {
  const methods = useForm();

  const handleProfileSubmit = (data) => {
    console.log("Profile Submitted:", {
      name: data.name,
      email: data.email,
    });
  };

  const handleEducationSubmit = (data) => {
    console.log("Education Submitted:", {
      school: data.school,
      degree: data.degree,
    });
  };

  return (
    <FormProvider {...methods}>
      <IndexPageINfoDetails
        onProfileSubmit={methods.handleSubmit(handleProfileSubmit)}
        onEducationSubmit={methods.handleSubmit(handleEducationSubmit)}
      />
    </FormProvider>
  );
}

export default App;
