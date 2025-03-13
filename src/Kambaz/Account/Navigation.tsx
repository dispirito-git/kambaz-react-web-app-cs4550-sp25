import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation">
        {links.map((link) => (
            <Link to={`/Kambaz/Account/${link}`} key={link} className={pathname.includes(link) ? "active" : ""}>
                {link}
                <hr/>
            </Link>
        ))}
    </div>
);}
