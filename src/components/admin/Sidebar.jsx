import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <h2>🛍</h2>

        <h3>Omnia Mart</h3>

      </div>

      <nav>

        <Link to="/admin">
          Dashboard
        </Link>

        <Link to="/admin/products">
          Products
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/profile">
          Users
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;