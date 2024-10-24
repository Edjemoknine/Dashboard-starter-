/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
// Adjust the import path as needed
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
import { cilLockLocked, cilUser, cibMailRu } from "@coreui/icons";

import { useNavigate } from "react-router";
import useRegsiterApi from "../api/useRegister";
// import useRegsiterApi from "../api/useRegister.ts";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoginError, setIsLoginError] = React.useState(false);

  const navigate = useNavigate();

  const { register, loading, error } = useRegsiterApi();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      await register(email, password, username);
      navigate("/addword", {
        replace: true,
      });
    } catch (e: any) {
      console.log(e);
      setIsLoginError(true);
      console.log(isLoginError);
    }
  };
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1 className="text-4xl mb-3">Register</h1>
                    <p className="text-body-secondary">Create your account</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText className="!px-3">
                        <CIcon icon={cilUser}/>
                      </CInputGroupText >
                      <CFormInput
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText className="!px-3">
                        <CIcon icon={cibMailRu} />
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
                    <CInputGroup className="mb-3">
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
                    <CInputGroup className="mb-4">
                      <CInputGroupText className="!px-3">
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Repeat Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol className="w-full">
                        <CButton
                          className="w-full"
                          color="success"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Registering..." : "Create Account"}
                        </CButton>
                      </CCol>
                    </CRow>
                    {error && <p className="text-danger mt-3">{error}</p>}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
