import Footer from "@/components/Shared/Footer";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
