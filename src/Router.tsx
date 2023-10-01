import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BasicLayout } from "./Pages/BasicLayout";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { useAppSelector } from "./Hooks/redux";

export const BasicRouter: React.FC = () => {
  const isAuthenticated = useAppSelector((store) => store.auth.isAuthenticated);

  return (
    <BasicLayout>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path={"/"} element={<Login />} />{" "}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BasicLayout>
  );
};
