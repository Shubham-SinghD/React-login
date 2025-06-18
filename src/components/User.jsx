
function User() {
const role = localStorage.getItem("userRole");






  return (
    <>
<div>
    <h2>Welcome to Dashboard</h2>
    {role === "ADMIN" ? (
      <div>
        <h3>Admin Controls</h3>
        <button>Manage Users</button>
        <button>System Logs</button>
        <button>System Logs</button>
        <button>System Logs</button>
        <button>System Logs</button>
        <button>System Logs</button>
        <button>System Logs</button>
        <button>UserDetail Logs</button>
        
      </div>
    ) : role === "USER" ? (
      <div>
        <h3>User Features</h3>
        <button>Make Payment</button>
        <button>Profile</button>
      </div>
    ) : (
      <p>Unknown Role</p>
    )}
  </div>
    </>
  )
}
export default User;
