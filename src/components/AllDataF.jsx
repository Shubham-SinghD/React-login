import React, { useState } from 'react';
import Menu1 from './Menu';
import Navbar1 from './Navbar';

function User() {
    const role = localStorage.getItem("userRole");
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");

    const [dataList, setDataList] = useState([]);
    const [showData, setShowData] = useState(false);

    const fetchData = async () => {
        if (showData) {
            setShowData(false);
            return;
        }
        if (dataList.length > 0) {
            setShowData(true);
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/allData");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setDataList(data);
            setShowData(true);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to load data.");
        }
    };


    const fetchData1 = async () => {
    if (showData) {
        setShowData(false);
        return;
    }
    if (dataList.length > 0) {
        setShowData(true);
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/singleData/${email}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDataList([data]);
        setShowData(true);
        console.log(data);
        
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to load data.");
    }
};


    return (
        <>
        <Menu1 />
        <Navbar1/>
            <div>
                <h2>Welcome  {name} </h2>
                {role === "ADMIN" ? (
                    <>
                    
                        <h3>Admin Controls</h3>
                        <button>Make Payment1</button><br />
                        <button>Make Payment2</button> <br />
                        <button>Make Payment3</button><br />
                        <button onClick={fetchData}>
                            {showData ? "Hide Profile" : "Show All Profile"}
                        </button>
                        {showData && (
                            <table
                                border="1"
                                cellPadding="10"
                                style={{
                                    marginTop: "20px",
                                    borderCollapse: "collapse",
                                    width: "100%"
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataList.map((item, i) => (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.role}</td>
                                            <td>{item.mobile}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                ) : role === "USER" ? (
                    <div>
                       
                        <h3>User Features</h3> <br />
                        <button>Make Payment</button> <br />

                    <button onClick={fetchData1}>
                            {showData ? "Hide Profile" : "Show Profile"}
                        </button>
                        {showData && (
                            <table
                                border="1"
                                cellPadding="10"
                                style={{
                                    marginTop: "20px",
                                    borderCollapse: "collapse",
                                    width: "100%"
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataList.map((item, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.role}</td>
                                            <td>{item.mobile}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>)}


                    </div>
                ) : (
                    <p>Unknown Role</p>
                )}
            </div>
        </>
    );
}

export default User;
