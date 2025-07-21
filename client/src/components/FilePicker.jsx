import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded shadow flex flex-col gap-4">
      {/* Hidden file input */}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="hidden"
      />

      {/* Label that triggers file input */}
      <label
        htmlFor="file-upload"
        className="text-blue-600 underline cursor-pointer"
      >
        Upload File
      </label>

      {/* Show button if file is selected */}
      {file && (
        <CustomButton
          title="Read File"
          handleClick={() => readFile("logo")}
          customStyles="bg-black text-white py-2 px-4 rounded"
        />
      )}
    </div>
  );
};

export default FilePicker;
