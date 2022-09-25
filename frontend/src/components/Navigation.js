const Navigation = ({handleClick}) => {
  return (
    <header>
      <div className="container">
        <div className="logo">Book</div>
        <nav>
          <a href="#">Login</a>
          <button className="btn" onClick={handleClick}>Add Book</button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
