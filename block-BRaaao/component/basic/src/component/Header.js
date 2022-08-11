import img from "../images/1.png"
function Header() {
  return (
    <>
      <figure>
      <img src={img} alt="" width="50" />
      </figure>
      <nav>
        <ul className="list">
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>profile</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header ;
