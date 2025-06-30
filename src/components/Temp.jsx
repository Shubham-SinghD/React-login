import React, { useEffect, useState } from 'react';

function Temp() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/resume/AllFile1') // Adjust the URL to match your backend
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response.json());
        
        return response.json();
      })
      .then(data => setDocuments(data))
      .catch(error => console.error('Error fetching documents:', error));
  }, []);

  return (
    <div>
      {documents.map((doc, index) => (
        doc.contentType.startsWith('image/') ? (
          <img
            key={index}
            src={`data:${doc.contentType};base64,${doc.base64}`}
            alt={doc.filename}
            // style={{ width: '300px', margin: '10px' }}
          />
        ) : (
          <a
            key={index}
            href={`data:${doc.contentType};base64,${doc.base64}`}
            download={doc.filename}
          >
            Download {doc.filename}
          </a>
        )
      ))}
    </div>
  );s
}

export default Temp;
// import React, { useEffect, useState } from "react";


// function Temp() {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/formfiles") // Adjust endpoint as needed
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch files");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setFiles(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching files:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Uploaded Files</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : files.length === 0 ? (
//         <p>No files found.</p>
//       ) : (
//         <div className="gallery">
//           {files.map((file) => (
//             <div key={file.id} className="file-card">
//               <img
//                 src={file.url}
//                 alt={file.filename}
//                 className="file-image"
//               />
//               <p>{file.filename}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Temp;
