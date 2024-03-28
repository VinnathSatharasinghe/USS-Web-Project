import "./Nav.css";

function CreativeNavbar() {

  
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <nav className="header">
      <div className="uss"> <img src="/src/components/pictures/logo.png"></img>
      <br/>
      <h6>UNIQUE SOFTWARE SOLUTIONS</h6>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/home">HOME<span></span></a>
        </li>
        <li>
          <a href="/gg">PRODUCTS<span></span></a>
        </li>
        <li>
          <a href="/sing">ABOUT US<span></span></a>
        </li>
        <li>
          <a href="/todo_list">CLIENT<span></span></a>
        </li>
        <li>
          <a href="/user">CONTACT<span></span></a>
        </li>
      </ul>
    </nav>
  );
}

export default CreativeNavbar;
