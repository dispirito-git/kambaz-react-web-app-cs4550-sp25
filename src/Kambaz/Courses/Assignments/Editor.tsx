import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Table } from "react-bootstrap";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const assignment = db.assignments.find((a) => a.course === cid && a._id === aid);
  const navigate = useNavigate();

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="wd-name">
          <Form.Label><h3>Assignment Name</h3></Form.Label>
          <Form.Control type="text" defaultValue={assignment?.title} />
        </Form.Group>
        <br />
        <Form.Group controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={10} defaultValue={assignment?.description} />
        </Form.Group>
        <br />
        <Table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="wd-points">Points</Form.Label>
              </td>
              <td align="left" valign="bottom">
                <Form.Control type="number" id="wd-points" defaultValue={assignment?.points} />
              </td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <Form.Label htmlFor="wd-select-assignment-group">Assignment Group</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="wd-select-assignment-group" defaultValue={assignment?.group}>
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="OTHER">OTHER</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="wd-select-grade-display">Display Grade as</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="wd-select-grade-display" defaultValue={assignment?.gradeDisplay}>
                  <option value="Percentage">Percentage</option>
                  <option value="Letter">Letter</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="wd-select-submission-type">Submission Type</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="wd-select-submission-type" defaultValue={assignment?.submissionType}>
                  <option value="Online">Online</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Form.Label>Online Entry Options:</Form.Label>
                <Form.Check type="checkbox" id="wd-chkbox-text" label="Text Entry" />
                <Form.Check type="checkbox" id="wd-chkbox-website" label="Website URL" />
                <Form.Check type="checkbox" id="wd-chkbox-media" label="Media Recordings" />
                <Form.Check type="checkbox" id="wd-chkbox-annotate" label="Student Annotation" />
                <Form.Check type="checkbox" id="wd-chkbox-file" label="File Uploads" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label>Assign</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Label>Assign to</Form.Label>
                <Form.Control type="text" id="wd-assign-to" defaultValue=""/>
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="left" valign="top">
                <Form.Label>Due</Form.Label>
                <Form.Control type="date" id="wd-text-assign-date" defaultValue={assignment?.due} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="left" valign="top">
                <Form.Label>Available from</Form.Label>
                <Form.Control type="date" id="wd-text-available-from-date" defaultValue={assignment?.available} />
              </td>
              <td align="left" valign="top">
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" id="wd-text-available-until-date" defaultValue={assignment?.due} />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <hr />
              </td>
            </tr> 
            <tr>
              <td></td>
              <td></td>
              <td align="right" valign="top">
                <Button variant="secondary" id="wd-cancel" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
                  Cancel
                </Button>
              </td>
              <td align="left" valign="top">
                <Button variant="primary" id="wd-save" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
                  Save
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </div>
  );
}