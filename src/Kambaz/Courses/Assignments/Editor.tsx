import { Form, Button, Table } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="wd-name">
          <Form.Label><h3>Assignment Name</h3></Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>
        <br />
        <Form.Group controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={10} defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositores The Kanbas application should include a link to navigate back to the landing page." />
        </Form.Group>
        <br />
        <Table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="wd-points">Points</Form.Label>
              </td>
              <td align="left" valign="bottom">
                <Form.Control type="number" id="wd-points" defaultValue={100} />
              </td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <Form.Label htmlFor="wd-select-assignment-group">Assignment Group</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="wd-select-assignment-group">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="ASSIGNMENTS">OTHER</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="wd-select-grade-display">Display Grade as</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="wd-select-grade-display">
                  <option value="Percentage">Percentage</option>
                  <option value="Percentage">Letter</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="wd-select-submission-type">Submission Type</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="wd-select-submission-type">
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
                <Form.Control type="text" id="wd-assign-to" defaultValue="Everyone" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="left" valign="top">
                <Form.Label>Due</Form.Label>
                <Form.Control type="date" id="wd-text-assign-date" defaultValue="2024-05-13" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="left" valign="top">
                <Form.Label>Available from</Form.Label>
                <Form.Control type="date" id="wd-text-available-from-date" defaultValue="2024-05-06" />
              </td>
              <td align="left" valign="top">
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" id="wd-text-available-until-date" defaultValue="2024-05-20" />
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
                <Button variant="secondary" id="wd-cancel" onClick={() => alert("Cancel!")}>
                  Cancel
                </Button>
              </td>
              <td align="left" valign="top">
                <Button variant="primary" id="wd-save" onClick={() => alert("Save!")}>
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