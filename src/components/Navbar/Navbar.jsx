import "./Nav.css";

function CreativeNavbar() {
  return (
    <nav className="navbar">
      <div className="uss"> <img src="/src/components/pictures/logo.png"></img>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home<span></span></a>
        </li>
        <li>
          <a href="/gg">Login<span></span></a>
        </li>
        <li>
          <a href="/sing">Singup<span></span></a>
        </li>
        <li>
          <a href="/todo_list">Todo<span></span></a>
        </li>
        <li>
          <a href="/user">User<span></span></a>
        </li>
      </ul>
    </nav>
  );
}

export default CreativeNavbar;
