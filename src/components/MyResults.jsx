import React from "react";
import { GtuResultPage } from "./GtuResultPage";
import { HomePage } from "./HomePage";
import "../assets/styles/myResults.css";
export const MyResults = () => {
  return (
    <div>
      <GtuResultPage />
      <div>
        {/* <GtuResultPage/> */}
        <div className="bounce-wrapper">
      <div className="bounce-track">
        Click here to submit your Bank Account Details
      </div>
    </div>
    </div>
      {/* <HomePage /> */}
      <div className="details-container">
        <div className="white-panel pn personal-info">
          <div className="white-header">
            <h5>Personal Info</h5>
          </div>
          <div className="panel-body">
            <table className="myTable" align="center">
              <tbody>
                <tr>
                  <td>Name :</td>
                  <td colSpan={2}>
                    <span>Parmar Kuldip</span>
                  </td>
                </tr>
                <tr>
                  <td>ABC ID :</td>
                  <td colSpan={2}>
                    <span>638512875955</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Aadhar No.:</td>
                  <td>
                    <span>448475532221</span>
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Date of Birth:</td>
                  <td>
                    <span>05/05/2003</span>
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>
                    <span>M</span>
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Mobile No.:</td>
                  <td>
                    <span>9173658738</span>
                  </td>
                  <td> </td>
                </tr>
                {/* <tr>
                  <td>Mobile No.:</td>
                  <td>
                    <span>9173658738</span>
                  </td>
                  <td>
                    <a href="#">
                      <img src="https://student.gtu.ac.in/images/icon-edit.gif" alt="Edit" />
                    </a>
                  </td>
                </tr> */}
                <tr>
                  <td>Email:</td>
                  <td>
                    <span>parmarkuldip664@gmail.com</span>
                  </td>
                  <td>
                    <a href="#">
                      <img src="https://student.gtu.ac.in/images/icon-edit.gif" alt="Edit" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Parent&apos;s Mobile No.:</td>
                  <td></td>
                  <td>
                    <a href="#">
                      <img src="https://student.gtu.ac.in/images/icon-edit.gif" alt="Edit" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Parent&apos;s Email No.:</td>
                  <td></td>
                  <td>
                    <a href="#">
                      <img src="https://student.gtu.ac.in/images/icon-edit.gif" alt="Edit" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Account Detail:</td>
                  <td>
                    <span>25130100011286, IFSC : BARB0DHRANG</span>
                  </td>
                  <td>
                    <a href="#">
                      <img src="https://student.gtu.ac.in/images/icon-edit.gif" alt="Edit" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Password :</td>
                  <td>
                    <span>**********</span>
                  </td>
                  <td>
                    <a href="#">
                      <img src="https://student.gtu.ac.in/images/icon-edit.gif" alt="Edit" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Address :</td>
                  <td>
                    <span>Dhrangadhra , Surendranagar</span>
                  </td>
                  <td>
                    <a href="#">
                      <img src="https://student.gtu.ac.in/images/icon-edit.gif" alt="Edit" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="white-panel pn academic-info">
          <div className="white-header">
            <h5>Academic Info</h5>
          </div>
          <div className="panel-body">
            <table className="myTable" align="center">
                <tbody>
                <tr>
                    <td>Course:</td>
                    <td><span>ME</span></td>
                </tr>
                <tr>
                    <td>Branch:</td>
                    <td><span>76 - TRANSPORTATION ENGINEERING</span></td>
                </tr>
                <tr>
                    <td>College:</td>
                    <td><span>028 - L. D. COLLEGE OF ENGINEERING, AHMEDABAD</span></td><td><span></span></td>
                </tr>
                <tr>
                    <td>Academic Status:</td>
                    <td><span className="label label-success">Studying</span></td>
                </tr>
                <tr >
                    <td>Last Appearrd Exam:</td>
                    <td><span>-</span></td>
                </tr>
                <tr>
                    <td>CPI</td>
                    <td><span>7.65</span></td>
                </tr>
                <tr>
                    <td>CGPA</td>
                    <td><span>0.00</span></td>
                </tr>
                <tr>
                    <td>Final Sem:</td>
                    <td><span className="badge bg-info">4</span></td>
                </tr>
                <tr>
                    <td>Term End:</td>
                    <td><span>S2028</span></td>
                </tr>
                <tr style={{ display: "none" }}>
                    <td></td>
                    <td><span></span></td>
                </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
