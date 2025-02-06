import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form>
        <Form.Control defaultValue="alice" placeholder="username" className="mb-2" />
        <Form.Control defaultValue="123" placeholder="password" type="password" className="mb-2" />
        <Form.Control defaultValue="Alice" placeholder="First Name" className="mb-2" />
        <Form.Control defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
        <Form.Control defaultValue="2000-01-01" type="date" className="mb-2" />
        <Form.Control defaultValue="alice@wonderland" type="email" className="mb-2" />
        <Form.Control as="select" defaultValue="FACULTY" className="mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Control>
        <Button variant="danger" id="wd-signout-btn" as={Link} to="/Kambaz/Account/Signin" className="w-100">
          Sign out
        </Button>
      </Form>
    </div>
  );
}