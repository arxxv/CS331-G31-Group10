import React, { useState } from "react";
import "../css/ProfileDetail.css";

function ProfileDetail({ setModalDetail }) {
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [paymentmeth,setPaymentMeth]=useState('');
    const [upiid,setUPIId]=useState('');
    const UpdateHandler=()=>{

    }
  return (
    <div className="modalBackground">
        <div className="modalContainer1">
            <div className="titleCloseBtn">
                <button
                    onClick={() => {
                        setModalDetail(false);
                    }}
                >
                X
                </button>
            </div>
            <h1 className="profile_detail_head">Profile Details</h1>
            <div className="profile_detail_forms">
                <div className="profile_detail_input">
                    <p className="profile_detail_p1">Full Name: </p>
                    <input className="profile_detail_input1" value={name} type="text" onChange={(txt)=>{setName(txt.target.value)}}></input>
                </div>
                <div className="profile_detail_input">
                    <p className="profile_detail_p1">Mobile: </p>
                    <input className="profile_detail_input1" type="text" value={mobile} onChange={(txt)=>{setMobile(txt.target.value)}}></input>
                </div>
                <div className="profile_detail_input">
                    <p className="profile_detail_p1">Email: </p>
                    <input className="profile_detail_input1" type="text" value={email} onChange={(txt)=>{setEmail(txt.target.value)}}></input>
                </div>
                <div className="profile_detail_input">
                    <p className="profile_detail_p1">Address: </p>
                    <input className="profile_detail_input1" type="text" value={address} onChange={(txt)=>{setAddress(txt.target.value)}}></input>
                </div>
                <div className="profile_detail_input">
                    <p className="profile_detail_p1">Payment Method: </p>
                    <input className="profile_detail_input1" type="text" value={paymentmeth} onChange={(txt)=>{setPaymentMeth(txt.target.value)}}></input>
                </div>
                <div className="profile_detail_input">
                    <p className="profile_detail_p1">UPI Id: </p>
                    <input className="profile_detail_input1" type="text" value={upiid} onChange={(txt)=>{setUPIId(txt.target.value)}}></input>
                </div>
                <div className="profile_detail_button">
                    <button onClick={UpdateHandler}>Update</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileDetail;