import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
export default function Dashboard() {
  return (
  <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
    <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
  {[
    { id: 1234, title: "CS1234 React JS", desc: "Full Stack software developer", img: "/images/reactjs.jpg" },
    { id: 2235, title: "CS2235 Data Structures", desc: "Efficient problem-solving techniques", img: "/images/reactjs.jpg" },
    { id: 3236, title: "CS3236 Algorithms", desc: "Advanced algorithmic concepts", img: "/images/reactjs.jpg" },
    { id: 4237, title: "CS4237 Database Systems", desc: "Relational and NoSQL databases", img: "/images/reactjs.jpg" },
    { id: 5238, title: "CS5238 Machine Learning", desc: "Introduction to ML models", img: "/images/reactjs.jpg" },
    { id: 6239, title: "CS6239 Cybersecurity", desc: "Network security fundamentals", img: "/images/reactjs.jpg" },
    { id: 7240, title: "CS7240 Software Engineering", desc: "Agile and DevOps methodologies", img: "/images/reactjs.jpg" },
    { id: 8241, title: "CS8241 Cloud Computing", desc: "AWS, Azure, and cloud technologies", img: "/images/reactjs.jpg" }
  ].map((course) => (
    <Col key={course.id} className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link to={`/Kambaz/Courses/${course.id}/Home`}
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <Card.Img variant="top" src={course.img} width="100%" height={160} />
          <Card.Body>
            <Card.Title className="wd-dashboard-course-title">{course.title}</Card.Title>
            <Card.Text className="wd-dashboard-course-description">{course.desc}</Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  ))}
</Row>
  </div></div>
);}