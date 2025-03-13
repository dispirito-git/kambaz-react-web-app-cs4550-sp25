import { ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaPen, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router";

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from URL
  const assignments = db.assignments.filter((assignment) => assignment.course === cid); // Get assignments for this course
  return (
    <div id="wd-assignments">
      <div className="d-flex p-4 justify-content-end mb-3">
        <InputGroup className="me-2" style={{ width: '600px' }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            placeholder="Search..."
            id="wd-search-assignment"
          />
        </InputGroup>
        <Button variant="secondary" id="wd-add-assignment-group" className="me-2">
          + Group
        </Button>
        <Link to={`/Kambaz/Courses/${cid}/Assignments/NEW`}>
          <Button variant="danger" id="wd-add-assignment">
            + Assignment
          </Button>
        </Link>
      </div>
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-7 fs-5 border-gray">
          <div className="wd-title p-3 ps-3 bg-secondary d-flex justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div>
            
            </div>
          </div>
        </ListGroup.Item>
        {assignments.map((assignment) => (
          <ListGroup.Item action as={Link} to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`} className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaPen className="text-success me-2" />
              <div>
                <h5>{assignment.title}</h5>
                <div>
                  Multiple Modules | <b>Not available until </b> {assignment.available} | <br />
                  <b>Due </b> {assignment.due} | {assignment.points}pts
                </div>
              </div>
            </div>
            <div>
              <LessonControlButtons />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}