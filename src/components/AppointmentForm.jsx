import React from "react";
import FindDoctorSearch from "../components/FindDoctorSearch";
import AppointmentForm from "../components/AppointmentForm";

const Appointments = () => {
  return (
    <div>
      <h2>Book Appointment</h2>

      {/* ✅ Search doctor */}
      <FindDoctorSearch />

      <br />

      {/* ✅ Appointment form */}
      <AppointmentForm />
    </div>
  );
};

export default Appointments;