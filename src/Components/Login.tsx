/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import useLoginApi from "../api/useLoginApi";
import { useSelector } from "react-redux";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userData =
    useSelector((state: any) => state.user.userInfo) ||
    JSON.parse(localStorage.getItem("userInfo")!)?.data;
  const isAuthenticated = !!userData;

  const navigate = useNavigate();

  // login custom hook
  const { login, error, loading } = useLoginApi();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(email, password);

      navigate("/dashboard");
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className="min-h-72 !rounded-xl">
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1 className="!text-4xl !mb-3">Login </h1>
                    <p className="text-body-secondary">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3 ">
                      <CInputGroupText className="!px-3">
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-6 ">
                      <CInputGroupText className="!px-3">
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                      />
                    </CInputGroup>
                    <CRow className="!mt-8">
                      <CCol>
                        <CButton
                          color="info"
                          type="submit"
                          className="!px-10 !font-medium text-sm text-white"
                          disabled={loading}
                        >
                          {loading ? "Login..." : "Login"}
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right ">
                        <CButton color="link" className="px-0 ">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                    {error && <p className="text-danger mt-3">{error}</p>}
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-info py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2 className="!text-3xl !mb-3">Sign Up</h2>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <CButton
                      variant="ghost"
                      className="!px-10 !mt-8 !font-medium text-sm"
                      active
                      tabIndex={-1}
                      href="/register"
                    >
                      Register Now!
                    </CButton>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
