import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar flex-row">
      <h1 className="logo">Store</h1>
      <div className="navbar-actions">
        <button className="login-btn">Login</button>
        <button className="cart-btn">Cart</button>
      </div>
    </div>
  );
};
