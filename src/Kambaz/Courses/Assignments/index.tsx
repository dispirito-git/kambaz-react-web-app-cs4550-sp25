import { ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaPen, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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
        <Button variant="danger" id="wd-add-assignment">
          + Assignment
        </Button>
      </div>
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-7 fs-5 border-gray">
          <div className="wd-title p-3 ps-3 bg-secondary d-flex justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div>
              <ModuleControlButtons />
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action href="#/Kambaz/Courses/1234/Assignments/1" className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaPen className="text-success me-2" />
            <div>
              <h5>A1</h5>
              <div>
                Multiple Modules | <b>Not available until </b> May 6 at 12:00am | <br />
                <b>Due </b> May 13 at 11:59pm | 100pts
              </div>
            </div>
          </div>
          <div>
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
        <ListGroup.Item action href="#/Kambaz/Courses/1234/Assignments/2" className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaPen className="text-success me-2" />
            <div>
              <h5>A2</h5>
              <div>
                Multiple Modules | <b>Not available until </b> May 13 at 12:00am | <br />
                <b>Due </b> May 20 at 11:59pm | 100pts
              </div>
            </div>
          </div>
          <div>
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
        <ListGroup.Item action href="#/Kambaz/Courses/1234/Assignments/3" className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaPen className="text-success me-2" />
            <div>
              <h5>A</h5>
              <div>
                Multiple Modules | <b>Not available until </b> May 20 at 12:00am | <br />
                <b>Due </b> May 27 at 11:59pm | 100pts
              </div>
            </div>
          </div>
          <div>
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}