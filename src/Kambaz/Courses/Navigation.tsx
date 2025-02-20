import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams(); // Get course ID from URL
  const location = useLocation(); // Get current pathname
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = location.pathname === `/Kambaz/Courses/${cid}/${link}`;
        
        return (
          <Link 
            key={link} 
            to={`/Kambaz/Courses/${course?._id}/${link}`} 
            className={`list-group-item border border-0 ${isActive ? "active text-black" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}