import { useEffect } from "react";
import "./Modal.css";

function Modal() {
return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button>
              Cancel
            </button>
            <button>Share</button>
          </div>
        </div>
      </div>
    </>
 );


}
export default Modal;
