import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as assignmentsClient from "./client";
import { updateAssignment } from "./reducer";
import {v4 as uuidv4} from "uuid";
import * as coursesClient from "../client";
import { addAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignmentFromStore = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((a: any) => a._id === aid)
  );
  const [assignment, setAssignment] = useState<any>(assignmentFromStore ? assignmentFromStore :
    {title: " ", description: " ", points: 0, group: "ASSIGNMENTS",
       gradeDisplay: "Percentage", submissionType: "Online", textEntry: false,
       assignTo: "", due: "", available: "", until: ""}
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveAssignment = async () => {
    try {
      if (!aid || !assignment._id) {
        const createdAssignment = await coursesClient.createAssignmentForCourse(cid as string, assignment)
        dispatch(addAssignment(createdAssignment));
      } else {
        const updatedAssignment = await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(updatedAssignment));
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Failed to save assignment:", error);
    }
  };

  // Handle form field changes dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const checked = type === "checkbox" && (e.target as HTMLInputElement).checked;
    setAssignment((prev: any) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="title">
          <Form.Label><h3>Assignment Name</h3></Form.Label>
          <Form.Control type="text" id="title" value={assignment.title || ""} onChange={handleChange} />
        </Form.Group>
        <br />
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" id="description" rows={10} value={assignment.description || ""} onChange={handleChange} />
        </Form.Group>
        <br />
        <Table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="points">Points</Form.Label>
              </td>
              <td align="left" valign="bottom">
                <Form.Control type="number" id="points" value={assignment.points || ""} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <Form.Label htmlFor="group">Assignment Group</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="group" value={assignment.group || ""} onChange={handleChange}>
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="OTHER">OTHER</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="gradeDisplay">Display Grade as</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="gradeDisplay" value={assignment.gradeDisplay || ""} onChange={handleChange}>
                  <option value="Percentage">Percentage</option>
                  <option value="Letter">Letter</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label htmlFor="submissionType">Submission Type</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Control as="select" id="submissionType" value={assignment.submissionType || ""} onChange={handleChange}>
                  <option value="Online">Online</option>
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Form.Label>Online Entry Options:</Form.Label>
                <Form.Check type="checkbox" id="textEntry" label="Text Entry" checked={assignment.textEntry || false} onChange={handleChange} />
                <Form.Check type="checkbox" id="websiteURL" label="Website URL" checked={assignment.websiteURL || false} onChange={handleChange} />
                <Form.Check type="checkbox" id="mediaRecordings" label="Media Recordings" checked={assignment.mediaRecordings || false} onChange={handleChange} />
                <Form.Check type="checkbox" id="studentAnnotation" label="Student Annotation" checked={assignment.studentAnnotation || false} onChange={handleChange} />
                <Form.Check type="checkbox" id="fileUploads" label="File Uploads" checked={assignment.fileUploads || false} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <Form.Label>Assign</Form.Label>
              </td>
              <td align="left" valign="top">
                <Form.Label>Assign to</Form.Label>
                <Form.Control type="text" id="assignTo" value={assignment.assignTo || ""} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="left" valign="top">
                <Form.Label>Due</Form.Label>
                <Form.Control type="date" id="due" value={assignment.due || ""} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="left" valign="top">
                <Form.Label>Available from</Form.Label>
                <Form.Control type="date" id="available" value={assignment.available || ""} onChange={handleChange} />
              </td>
              <td align="left" valign="top">
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" id="until" value={assignment.until || ""} onChange={handleChange} />
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
                <Button variant="primary" id="wd-save" onClick={saveAssignment}>
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