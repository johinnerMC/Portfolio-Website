/** @format */

import { HomePage, WritingPage } from "@/pages";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />

      <Route path="/writing" element={<WritingPage />} />
    </Routes>
  );
};
