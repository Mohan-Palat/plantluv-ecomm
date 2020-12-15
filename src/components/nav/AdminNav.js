import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
	<nav>
		<ul className="nav flex-column">
			<li className="nav-item">
				<Link to="/admin/dashboard" className="nav-link">
					Dashboard
        </Link>
			</li>

			<li className="nav-item">
				<Link to="/admin/product" className="nav-link">
					Add Plant
        </Link>
			</li>

			<li className="nav-item">
				<Link to="/admin/products" className="nav-link">
					View All Plants
        </Link>
			</li>

			<li className="nav-item">
				<Link to="/admin/category" className="nav-link">
					Add Category
        </Link>
			</li>

			<li className="nav-item">
				<Link to="/admin/sub" className="nav-link">
					Add Sub Category
        </Link>
			</li>

			<li className="nav-item">
				<Link to="/admin/coupon" className="nav-link">
					Coupon
        </Link>
			</li>

			<li className="nav-item">
				<Link to="/user/password" className="nav-link">
					Password
        </Link>
			</li>
		</ul>
	</nav>
);

export default AdminNav;
