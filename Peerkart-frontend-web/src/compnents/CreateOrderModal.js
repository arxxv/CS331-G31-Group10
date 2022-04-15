import React, { useState } from "react";
import "../css/CreateOrderModal.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LineImg from "../images/line.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { Edit, Delete } from "@mui/icons-material";

const CreateOrderModal = ({ modalVisible, setModalVisible }) => {
	const [orderName, setOrderName] = useState("");
	const [name, setname] = useState("");
	const [category, setCategory] = useState("");
	const [qty, setQty] = useState("");
	const [unit, setUnit] = useState("");
	const dispatch = useDispatch();
	const itemsInCart = useSelector((state) => state.cart.items);

	return (
		<>
			{modalVisible ? (
				<div className='modal-cont'>
					<div className='modal-view'>
						<div className='create-head'>CREATE ORDER</div>
						<div className='create-box'>
							<div className='createOrder-left'>
								<div className='create-inputs'>
									<div className='input-box'>
										<label className='create-label'>Order Name</label>
										<input
											className='create-input'
											value={orderName}
											type='text'
											name='orderName'
											onChange={(e) => setOrderName(e.target.value)}
											placeholder='Eg. Daily Needs List'
										/>
									</div>
									<div className='input-box-cat'>
										{/* <label className='create-label'>Category</label>
										<select value={category}>
											<option value='Grocery'>Grocery</option>
											<option value='Fish ans meat'>Fish ans meat</option>
											<option value='Stationary'>Stationary</option>
										</select> */}
										<Box sx={{ minWidth: 120 }}>
											<FormControl fullWidth size='small' margin='none'>
												<InputLabel
													id='demo-simple-select-label'
													style={{ padding: "1px" }}>
													Category
												</InputLabel>
												<Select
													labelId='demo-simple-select-label'
													id='demo-simple-select'
													value={category}
													label='category'
													onChange={(e) => setCategory(e.target.value)}>
													<MenuItem value={"Groceries"}>Groceries</MenuItem>
													<MenuItem value={"Fish and Meat"}>
														Fish and Meat
													</MenuItem>
													<MenuItem value={"Stationary"}>Stationary</MenuItem>
													<MenuItem value={"Medicines"}>Medicines</MenuItem>
												</Select>
											</FormControl>
										</Box>
									</div>
									<img
										src={LineImg}
										alt='hr'
										style={{ width: "100%", margin: "2% 0" }}
									/>
									<div className='input-box-itn'>
										<label className='create-label-itn'>Item Name</label>
										<input
											className='create-input'
											value={name}
											type='text'
											name='name'
											onChange={(e) => setname(e.target.value)}
											placeholder='Eg. Bread'
										/>
									</div>

									<div className='qty-unit'>
										<div className='qty-subunit'>
											<label className='create-label'>Quantity</label>
											<div className='qty-input-div'>
												<input
													className='create-input-qty'
													value={qty}
													type='number'
													name='qty'
													placeholder='Eg. 1'
													onChange={(e) => setQty(e.target.value)}
												/>
											</div>
										</div>

										<div className='unit'>
											<label className='create-label-unit'>Units</label>
											{/*<select
												value={unit}
												onChange={(e) => setUnit(e.target.value)}>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
											</select> */}
											<div className='units-qty'>
												<Box sx={{ minWidth: 120 }}>
													<FormControl fullWidth size='small' margin='none'>
														<InputLabel
															id='demo-simple-select-label'
															//style={{ padding: '1px' }}
														>
															Unit
														</InputLabel>
														<Select
															labelId='demo-simple-select-label'
															id='demo-simple-select'
															value={unit}
															label='category'
															onChange={(e) => setUnit(e.target.value)}>
															<MenuItem value={"pieces"}>Pieces</MenuItem>
															<MenuItem value={"Kg"}>Kg</MenuItem>
															<MenuItem value={"Ltr"}>Ltr</MenuItem>
														</Select>
													</FormControl>
												</Box>
											</div>
										</div>
									</div>

									{/* <div className='btns'> */}

									<div
										className='add-item-btn'
										onClick={() =>
											addToCart(dispatch, { name, qty, unit })
										}>
										Add Item
									</div>
									{/* <hr className='create-order-hr' /> */}
									<img src={LineImg} alt='hr' style={{ width: "100%" }} />
									<div className='back' onClick={() => setModalVisible(false)}>
										Back
									</div>

									{/* </div> */}
								</div>
							</div>
							<div className='createOrder-right'>
								<div className='right-heads'>
									<span className='label-right'>ORDER NAME: </span>
									<span className='label-right-value'>{orderName}</span>
								</div>
								<div className='right-heads-cat'>
									<span className='label-right'>CATEGORY: </span>
									<span className='label-right-value'>{category}</span>
								</div>
								<div className='items-wrapper'>
									<span className='label-right'>ITEMS IN CART</span>
									<div className='item-cont'>
										{itemsInCart &&
											itemsInCart.map((item) => (
												<>
													<div className='item-row'>
														<span className='label-right-value'>
															{item.name}
														</span>
														<div className='item-row-right'>
															<span className='label-right-value'>
																{item.quantity} {item.unit}
															</span>
															<div>
																<Delete />
																<Edit />
															</div>
														</div>
													</div>		
											</>
										))}
									</div>
								</div>
								<div className='addCart-btn'>
									<div className='checkout-btn'>Check Out</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
};

export default CreateOrderModal;
