import React from "react";
import "../css/Modal.css";

function Modal({ setModalOrderOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOrderOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Created Orders</h1>
        </div>
        <div className="body">
        <div className="created_modal_list">
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
              <div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
              <div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
              <div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
              <div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
              <div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
              <div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
              <div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
							<div className="created_modal_list_item">
								<span className="created_modal_list_item_1 upper">daily needs list</span>
								<span className="created_modal_list_item_2 green-color">345</span>
								<span className="created_modal_list_item_3 green">View</span>
							</div>
						</div>
					</div>
        </div>
    </div>
  );
}

export default Modal;
