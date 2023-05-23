import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const students=[
//     {
//         name: 'Alfreds Futterkiste',
//         gender: 'Nữ',
//         address: 'Quảng Nam'
//     },
//     {
//         name: 'Alfreds Futterkiste',
//         gender: 'Nữ',
//         address: 'Quảng Nam'
//     },
//     {
//         name: 'Alfreds Futterkiste',
//         gender: 'Nữ',
//         address: 'Quảng Nam'
//     },
//     {
//         name: 'Alfreds Futterkiste',
//         gender: 'Nữ',
//         address: 'Quảng Nam'
//     },
//     {
//         name: 'Alfreds Futterkiste',
//         gender: 'Nữ',
//         address: 'Quảng Nam'
//     },
//     {
//         name: 'Alfreds Futterkiste',
//         gender: 'Nữ',
//         address: 'Quảng Nam'
//     }
// ]
// const tableRows = students.map((student,index) =>(
//     <tr  key={index}>
//         <td>{student.name}</td>
//         <td>{student.gender}</td>
//         <td>{student.address}</td>
//     </tr>
// ));
// root.render(
//     <table class='table' >
//         <tr>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Address</th>
//         </tr>
//         {tableRows}
//     </table>
// );

// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

