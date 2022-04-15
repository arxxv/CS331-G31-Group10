import React from "react";
import {useState,useEffect} from "react";
import profiletop from "../images/profile-top.png";
import avatar from "../images/avatar.png";
import "../css/Dashboard.css";
import update from"../images/pencil.png";
import moneyicon from"../images/money-icon.jpg";
import tranrupee from "../images/tranrupee.jpg";
import trancoin from "../images/trancoin.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faPencil} from "@fortawesome/free-solid-svg-icons";
import Modal from "../compnents/Modal";
import ModalAccepted from "../compnents/ModalAccepted";
import ModalTransaction from "../compnents/ModalTransaction";
import ProfileDetail from "../compnents/ProfileDetails";
import { useSelector } from "react-redux";

const Dashboard = () => {
	const userData=useSelector(state=>state.auth.userData);
	const [modalOrderOpen, setModalOrderOpen] = useState(false);
	const [modalAcceptedOrderOpen, setModalAcceptedOrderOpen] = useState(false);
	const [modalTransactionOpen, setModalTransactionOpen] = useState(false);
	const [modalDetail,setModalDetail]=useState(false);
	console.log(userData);
	useEffect(()=>{
		
	},[])
	return(
		<>
		<div className="wrapper">
			<div className="top-box">
				<img className="profiletop" src={profiletop}></img>
				<div className='profilewrap'>
					<img src={avatar} className='avatarimg' alt='profile-img'/>
						<div className='profileinfodiv'>
							<p className='profileinfoname'>{userData.username}</p>
							{userData.contact.length>0 && <div className='profileinfoAddress'>{userData.contact}</div>}
						</div>
				</div>
				<div className="middle-boxes">
					<div className="mid-boxes profile_div">
						<p className="heading-boxes">Profile Information<span className="update_profile_icon" onClick={()=>{setModalDetail(true)}}><FontAwesomeIcon className="pluspencil" icon={faPencil}></FontAwesomeIcon></span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Full Name:</span> <span className="profileboxinfoanswer">{userData.username || "Kush Jaiswal"}</span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Mobile:</span> <span className="profileboxinfoanswer">{userData.contact || "+91 9876543210"}</span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Email:</span> <span className="profileboxinfoanswer">{userData.email || "kush.jaiswal@iiitg.ac.in"}</span></p>
						<p className="profileboxinfo"><span className="profileboxinfotag">Address:</span></p>
						<p className="profileboxlineinfo"><span className="profileboxinfoanswer">{userData.address[0].address || "IIIT Guwahati Boys Hostel, Guwahati"}</span></p>
						
						<p className="profileboxinfo"><span className="profileboxinfotag">Default Payment Method:</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">Method Name: UPI</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">Details:</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">Associated Bank: AXIS Bank</span></p>
						<p className="profileboxlineinfo"> <span className="profileboxinfoanswer">UPI ID: {userData.paymentMethod[0].paymentId || "xxxx xxxx 3415"}</span></p>
					</div>
					<div className="mid-boxes order_created_div">
						<p className="heading-boxes upper">Orders Generated</p>
						<div className="created_list">
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper">manage</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper green">view</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper">manage</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper">manage</span>
							</div>
							<div className="created_list_item">
								<span className="created_list_item_1 upper">Daily Needs List</span>
								<span className="created_list_item_2 upper">fish and meat</span>
								<span className="created_list_item_3 upper">345</span>
								<span className="created_list_item_4 upper green">view</span>
							</div>
						</div>
						<div className="moretransaction"  onClick={()=>{setModalOrderOpen(true)}}>
							<FontAwesomeIcon className="plusicon" icon={faPlus}></FontAwesomeIcon>
							<span className="moretranstext">Show More Orders</span>
						</div>
					</div>
				</div>
				<div className="middle-boxes">
					<div className="mid-boxes order_accepted_div">
						<p className="heading-boxes upper">Orders Accepted</p>
						<div className="accepted_list">
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper">manage</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper green">view</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper">manage</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper">manage</span>
							</div>
							<div className="accepted_list_item">
								<span className="accepted_list_item_1 upper">Daily Needs List</span>
								<span className="accepted_list_item_2 upper">fish and meat</span>
								<span className="accepted_list_item_3 upper">345</span>
								<span className="accepted_list_item_4 upper green">view</span>
							</div>
						</div>
						<div className="moretransaction"  onClick={()=>{setModalAcceptedOrderOpen(true)}}>
							<FontAwesomeIcon className="plusicon" icon={faPlus}></FontAwesomeIcon>
							<span className="moretranstext">Show More Orders</span>
						</div>
					</div>
					<div className="mid-boxes transaction_div">
						<p className="heading-boxes upper">Transaction History</p>
						<div className="transaction_list">
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 green-color">345</span>
								<span className="transaction_list_item_3 green">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 green-color">345</span>
								<span className="transaction_list_item_3 green">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 red-color">345</span>
								<span className="transaction_list_item_3">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 green-color">345</span>
								<span className="transaction_list_item_3 green">View</span>
							</div>
							<div className="transaction_list_item">
								<span className="transaction_list_item_1 upper">daily needs list</span>
								<span className="transaction_list_item_2 red-color">345</span>
								<span className="transaction_list_item_3">View</span>
							</div>
						</div>
						<div className="moretransaction" onClick={()=>setModalTransactionOpen(true)}>
							<FontAwesomeIcon className="plusicon" icon={faPlus}></FontAwesomeIcon>
							<span className="moretranstext">Show More Transactions</span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		{modalOrderOpen && <Modal setModalOrderOpen={setModalOrderOpen}/>}
		{modalAcceptedOrderOpen && <ModalAccepted setModalAcceptedOrderOpen={setModalAcceptedOrderOpen}/>}
		{modalTransactionOpen && <ModalTransaction setModalTransactionOpen={setModalTransactionOpen}/>}
		{modalDetail && <ProfileDetail setModalDetail={setModalDetail}/>}
		</>
		
	) 
};

export default Dashboard;
