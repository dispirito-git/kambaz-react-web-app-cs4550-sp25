import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS2000 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                <button> Go </button>
                </div>
            </Link>
         </div>
         <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS3000 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                <button> Go </button>
                </div>
            </Link>
         </div><div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS4000 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                <button> Go </button>
                </div>
            </Link>
         </div><div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS5000 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                <button> Go </button>
                </div>
            </Link>
         </div><div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS6000 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                <button> Go </button>
                </div>
            </Link>
         </div><div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS7000 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                <button> Go </button>
                </div>
            </Link>
         </div>
      </div>
    </div>
);}