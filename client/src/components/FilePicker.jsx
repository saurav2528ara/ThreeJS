import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <CustomButton type="filled" title="Upload File" />
        </label>
      </div>
    </div>
  );
};

export default FilePicker;
