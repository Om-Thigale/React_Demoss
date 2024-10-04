import { useState } from "react";
import axios from 'axios';

import "./FileUpload.css";

function FileUpload() {
return (
    <div className="top">
      <form className="form" >
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>
        <input
          
          type="file"
          id="file-upload"
          name="data"
          
        />
        <span className="textArea">Image: </span>
        <button type="submit" className="upload" >
          Upload File
        </button>
      </form>
    </div>
  );

}
export default FileUpload;