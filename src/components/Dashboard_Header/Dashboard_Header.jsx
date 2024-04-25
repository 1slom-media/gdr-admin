import "./Dashboard_Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import logo from "../../assets/image/logo-gerb-white.svg";
import { useLocation } from "react-router-dom";

function Header({ hover1 }) {
  const cookies = new Cookies();
  const pathname = useLocation();
  const navigate = useNavigate();
  const HandleLogout = () => {
    cookies.remove("token");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, "1500");
  };
  return (
    <>
      <div class="navigation">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <NavLink
                to={"/adminadd"}
                className={pathname == "/adminadd" ? "active" : ""}
              >
                <span class="icon">
                  <i class="bx bxs-user-circle"></i>
                </span>
                <span class="title">Админ</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={pathname == "/contact" ? "active" : ""}
              >
                <span class="icon">
                  <i class="bx bxs-group"></i>
                </span>
                <span class="title">Заявки</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category"}
                className={pathname == "/category" ? "active" : ""}
              >
                <span class="icon">
                  <i class="bx bxs-category-alt"></i>
                </span>
                <span class="title">Категория</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/product"}
                className={pathname == "/product" ? "active" : ""}
              >
                <span class="icon">
                  <i class="bx bxl-product-hunt"></i>
                </span>
                <span class="title">Продукт</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                className={pathname == "/projects" ? "active" : ""}
              >
                <span class="icon">
                  <i class="bx bxs-image-add"></i>
                </span>
                <span class="title">Изображение</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="logout">
          <button onClick={HandleLogout}>
            <i class="bx bxs-log-out-circle"></i>
            <span class="title">Выйти</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
