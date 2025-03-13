import { useSelector } from "react-redux";
import * as db from "./Database";
import { Link } from "react-router";

export default function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; })
  {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course ... </h5><br />
      <input value={course.name} className="form-control mb-2"
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea value={course.description} className="form-control"
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <button className="btn btn-primary float-end"
        id="wd-add-new-course-click"
        onClick={addNewCourse} > Add </button>
      <button className="btn btn-warning float-end me-2"
        onClick={updateCourse} id="wd-update-course-click">
        Update
      </button>
        <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.filter((course) =>
          enrollments.some(
            (enrollment) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
            )).map((course) => (
          <div key={course._id} className="col" style={{ width: "300px" }}>
          <div className="card">
          <Link to={`/Kambaz/Courses/${course._id}`} className="btn btn-primary">
          <img src="/images/reactjs.jpg" className="card-img-top" width="75px"/>
          <h5>{course.name}</h5>
          {course.description}
          <br />
          <button className="btn btn-primary">
            Go
          </button>
          </Link>
          <button id="wd-edit-course-click"
            onClick={(event) => {
            event.preventDefault();
            setCourse(course);
            }}
            className="btn btn-warning me-2 float-end" >
            Edit
          </button>
          <button onClick={(event) => {
            event.preventDefault();
            deleteCourse(course._id);
            }} className="btn btn-danger float-end"
            id="wd-delete-course-click">
            Delete
          </button>
          </div>
          </div> ))}
          </div>
        </div>
</div>
);}