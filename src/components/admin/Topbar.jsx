import "./Topbar.css";
import { useAuth } from "../../context/AuthContext";

function Topbar() {

  const { logout } = useAuth();

  return (
    <header className="admin-topbar">

      <h2>Admin Dashboard</h2>

      <button
        className="logout-admin"
        onClick={logout}
      >
        Logout
      </button>

    </header>
  );
}

export default Topbar;