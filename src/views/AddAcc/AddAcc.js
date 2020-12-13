import React, { Component } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CCardTitle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

class Receipt extends Component {
  state = {
    receipt: "",
    status: "",
    shipment_date: "",
    shipper: "",
    consignee: "",
    origin: "",
    destination: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const usersData = {
      receipt: Math.floor(Math.random() * 1000000000).toString(),
      shipment_date: new Date().toISOString(),
      shipper: this.state.shipper,
      consignee: this.state.consignee,
      origin: this.state.origin,
      destination: this.state.destinantion,
    };
    console.log(usersData);
    await axios
      .post("https://staging.bintex.id/api/invoice/receipts", usersData)
      .then((res) => {
        console.log(usersData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <CCard>
          <CCardHeader>
            <big>Add an Account</big>
          </CCardHeader>
          <CCardBody>
            <CForm
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CCardTitle className="mt-4">Person's Information</CCardTitle>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="name">Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="name" name="name" placeholder="Name" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="age">Age</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="age" name="age" placeholder="Age" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="destinantion">Adress</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="destinantion"
                    id="destinantion"
                    rows="5"
                    placeholder="Adress"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CLabel col md="3">
                  Input Photos
                </CLabel>
                <CCol xs="12" md="3" className="ml-3">
                  <CInputFile
                    custom
                    id="photo-input"
                    name="photo-input"
                    multiple
                  />
                  <CLabel htmlFor="photo-input" variant="custom-file">
                    Choose files...
                  </CLabel>
                </CCol>
              </CFormGroup>
              <CCardTitle className="mt-4">Account's Information</CCardTitle>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email">Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="email" name="email" placeholder="Email" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="id">Set Id</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="id" name="id" placeholder="Id" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="password">Set Password</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="password">Re-Type Password</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">Select Role</CLabel>
                </CCol>
                <CCol xs="12" md="3">
                  <CSelect custom name="select" id="select">
                    <option value="0">Select..</option>
                    <option value="1">Agent</option>
                    <option value="2">Cashier</option>
                    <option value="3">Courier</option>
                    <option value="4">Customer Service</option>
                    <option value="5">Driver</option>
                    <option value="6">Drop Pointer</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="salary">Set Salary</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="salary" name="salary" placeholder="salary" />
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="md"
              color="primary"
              className="align-items-center"
              onClick={this.handleSubmit}
            >
              <CIcon name="add" />
              <span className="pl-2">Submit</span>
            </CButton>
          </CCardFooter>
        </CCard>
      </>
    );
  }
}

/*

  return (
    
  );
}

*/
export default Receipt;
