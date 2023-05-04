// import React, { useState } from "react";

// function UploadComponent() {
//   const [files, setFiles] = useState([]);
//   const [custodian, setCustodian] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleFileSelect = (event) => {
//     const selectedFiles = event.target.files;
//     setFiles(Array.from(selectedFiles));
//   };

//   const handleFileDrop = (event) => {
//     event.preventDefault();
//     const droppedFiles = event.dataTransfer.files;
//     setFiles(Array.from(droppedFiles));
//   };

//   const handleCustodianChange = (event) => {
//     setCustodian(event.target.value);
//   };

//   const handleUpload = () => {
//     // Mocking file upload progress
//     let currentProgress = 0;
//     const interval = setInterval(() => {
//       currentProgress += Math.floor(Math.random() * 10) + 1;
//       if (currentProgress >= 100) {
//         clearInterval(interval);
//         setProgress(0);
//         setFiles([]);
//         setCustodian("");
//       } else {
//         setProgress(currentProgress);
//       }
//     }, 500);
//   };

//   return (
//     <div className="upload-component">
//       {files.length === 0 && (
//         <div className="upload-box">
//           <input type="file" onChange={handleFileSelect} multiple />
//           <p>or drag and drop files here</p>
//         </div>
//       )}
//       {files.length > 0 && (
//         <div className="upload-box">
//           <div className="file-list">
//             {files.map((file, index) => (
//               <p key={index}>{file.name}</p>
//             ))}
//           </div>
//           <input
//             type="text"
//             value={custodian}
//             onChange={handleCustodianChange}
//             placeholder="Enter Custodian name"
//           />
//           <button className="submit-button" onClick={handleUpload}>
//             Submit
//           </button>
//           {progress > 0 && (
//             <div className="progress-box">
//               <progress className="progress-bar" value={progress} max="100" />
//               <p>Uploading files...</p>
//             </div>
//           )}
//         </div>
//       )}
//       <div
//         className="drop-box"
//         onDrop={handleFileDrop}
//         onDragOver={(event) => event.preventDefault()}
//       >
//         <p>Drag and drop files for another batch</p>
//       </div>
//     </div>
//   );
// }

// export default UploadComponent;

//*******************************new code************************************************************** */

// import React, { useState, useRef } from "react";
// import "./Upload.css";

// function UploadComponent() {
//   const [files, setFiles] = useState([]);
//   const [custodian, setCustodian] = useState("");
//   const [progress, setProgress] = useState(0);
//   const [dragging, setDragging] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const selectedFiles = event.target.files;
//     setFiles(Array.from(selectedFiles));
//   };

//   const handleFileDrop = (event) => {
//     event.preventDefault();
//     const droppedFiles = event.dataTransfer.files;
//     setFiles(Array.from(droppedFiles));
//     setDragging(false);
//   };

//   const handleCustodianChange = (event) => {
//     setCustodian(event.target.value);
//   };

//   const handleUpload = () => {
//     // Mocking file upload progress
//     let currentProgress = 0;
//     const interval = setInterval(() => {
//       currentProgress += Math.floor(Math.random() * 10) + 1;
//       if (currentProgress >= 100) {
//         clearInterval(interval);
//         setProgress(0);
//         setFiles([]);
//         setCustodian("");
//       } else {
//         setProgress(currentProgress);
//       }
//     }, 500);
//   };

//   const handleDragEnter = (event) => {
//     event.preventDefault();
//     setDragging(true);
//   };

//   const handleDragLeave = (event) => {
//     event.preventDefault();
//     setDragging(false);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleFileInputClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div className="upload-component">
//       {files.length === 0 && (
//         <div className={`upload-box${dragging ? " dragging" : ""}`}>
//           <input
//             type="file"
//             onChange={handleFileSelect}
//             multiple
//             ref={fileInputRef}
//             style={{ display: "none" }}
//           />
//           <p>or drag and drop files here</p>
//           <button className="browse-button" onClick={handleFileInputClick}>
//             Browse Files
//           </button>
//         </div>
//       )}
//       {files.length > 0 && (
//         <div className="upload-box">
//           <div className="file-list">
//             {files.map((file, index) => (
//               <p key={index}>{file.name}</p>
//             ))}
//           </div>
//           <input
//             type="text"
//             value={custodian}
//             onChange={handleCustodianChange}
//             placeholder="Enter Custodian name"
//           />
//           <button className="submit-button" onClick={handleUpload}>
//             Submit
//           </button>
//           {progress > 0 && (
//             <div className="progress-box">
//               <progress className="progress-bar" value={progress} max="100" />
//               <p>Uploading files...</p>
//             </div>
//           )}
//         </div>
//       )}
//       <div
//         className={`drop-box${dragging ? " dragging" : ""}`}
//         onDrop={handleFileDrop}
//         onDragOver={handleDragOver}
//         onDragEnter={handleDragEnter}
//         onDragLeave={handleDragLeave}
//       >
//         <p>Drag and drop files for another batch</p>
//       </div>
//     </div>
//   );
// }

// export default UploadComponent;

import React, { useState, useRef } from "react";
import "./Upload.css";

function UploadComponent() {
  const [files, setFiles] = useState([]);
  const [custodian, setCustodian] = useState("");
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const selectedFiles = event.target.files;
    setFiles((prevFiles) => prevFiles.concat(Array.from(selectedFiles)));
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles((prevFiles) => prevFiles.concat(Array.from(droppedFiles)));
    setDragging(false);
  };

  const handleCustodianChange = (event) => {
    setCustodian(event.target.value);
  };

  const handleUpload = () => {
    // Mocking file upload progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 1;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(0);
        setFiles([]);
        setCustodian("");
      } else {
        setProgress(currentProgress);
      }
    }, 500);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-component">
      {files.length === 0 && (
        <div className={`upload-box${dragging ? " dragging" : ""}`}>
          <input
            type="file"
            onChange={handleFileSelect}
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <p>or drag and drop files here</p>
          <button className="browse-button" onClick={handleFileInputClick}>
            Browse Files
          </button>
        </div>
      )}
      {files.length > 0 && (
        <div className="upload-box">
          <div className="file-list">
            {files.map((file, index) => (
              <p key={index}>{file.name}</p>
            ))}
          </div>
          <input
            type="text"
            value={custodian}
            onChange={handleCustodianChange}
            placeholder="Enter Custodian name"
          />
          <button className="submit-button" onClick={handleUpload}>
            Submit
          </button>

          {progress > 0 && (
            <div className="progress-box">
              <progress className="progress-bar" value={progress} max="100" />
              <p>Uploading files...</p>
            </div>
          )}
        </div>
      )}
      <div
        className={`drop-box${dragging ? " dragging" : ""}`}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <p>Drag and drop files for another batch</p>
      </div>
    </div>
  );
}

export default UploadComponent;
