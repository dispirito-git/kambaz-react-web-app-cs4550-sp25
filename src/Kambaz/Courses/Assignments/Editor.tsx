export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={45} rows={10}>
          The assignment is available online Submit a link to the landing page of
          your Web application running on Netlify. The landing page should include
          the following: Your full name and section Links to each of the lab assignments Link to the
          Kanbas application Links to all relevant source code repositores The Kanbas application
          should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-points">Points </label>
            </td>
            <td align="left" valign="bottom">
              <input id="wd-points" value={100} />
            </td>

        </tr>
        <tr>
            <td align="left" valign="top">
                <label  htmlFor="wd-select-assignment-group">Assignment Group </label><br/>
            </td>
            <td align="left" valign="top">
                <select id="wd-select-assignment-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
                </td>
        </tr>
        <tr>
            <td align="right" valign="top">
            <label  htmlFor="wd-select-grade-display">Display Grade as </label><br/>
            </td>
            <td align="left" valign="top">
                <select id="wd-select-grade-display">
                    <option value="Percentage">Percentage</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label  htmlFor="wd-select-submission-type">Submission Type </label><br/>
            </td>
            <td align="left" valign="top">
                <select id="wd-select-submission-type">
                    <option value="Online">Online</option>
                </select>
            </td>
        </tr>
        <tr>
            <td> 
            </td>
            
                <label>Online Entry Options:</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-text"/>
                <label htmlFor="wd-chkbox-text">Text Entry</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-website"/>
                <label htmlFor="wd-chkbox-website">Website URL</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-media"/>
                <label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

                <input type="checkbox" name="check-genre" id="wd-wd-chkbox-annotate"/>
                <label htmlFor="wd-chkbox-annotate">Student Annotation</label><br/>

                <input type="checkbox" name="check-genre" id="wd-wd-chkbox-file"/>
                <label htmlFor="wd-chkbox-file">File Uploads</label>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label>Assign</label><br/>
            </td>
            <td align="left" valign="top">
                <label>Assign to</label><br/>
                <input id="wd-assign-to" value="Everyone" />
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td align="left" valign="top">
                <label>Due</label><br/>
                <input type="date"
                        value="2024-05-13"
                        id="wd-text-assign-date"/><br/>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td align="left" valign="top">
                <label>Available from</label><br/>
                <input type="date"
                        value="2024-05-06"
                        id="wd-text-available-from-date"/><br/>
            </td>
            <td align="left" valign="top">
                <label>Until</label><br/>
                <input type="date"
                        value="2024-05-20"
                        id="wd-text-available-until-date"/><br/>
            </td>
        </tr>
        <tr>
            <td>
                <hr></hr>
            </td>
            <td>
                <hr></hr>
            </td>
            <td>
                <hr></hr>
            </td>
            <td>
                <hr></hr>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td align="right" valign="top">
                <button type="button"
                        onClick={() => alert("Cancel!")}
                        id="wd-cancel">
                Cancel
                </button>
            </td>
            <td align="left" valign="top">
                <button type="button"
                        onClick={() => alert("Save!")}
                        id="wd-save">
                Save
                </button>
            </td>
        </tr>
        </table>

      </div>
  );}
  