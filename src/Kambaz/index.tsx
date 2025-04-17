import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KambazNavigation from "./Navigation";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import { useDispatch } from "react-redux";
import { setCourses } from "./Courses/reducer";
import { setEnrollments } from "./Courses/Enrollments/reducer";


export default function Kambaz() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [allCourses, setAllCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const fetchEnrollments = async () => {
    try {
      const enrollments = await courseClient.fetchAllEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchEnrollments();
  }
  , [currentUser]);
  
  const handleAddEnrollment = async (course: any) => {
    const newEnrollment = await courseClient.enrollUserInCourse(currentUser, course);
    dispatch(setEnrollments([ ...enrollments, newEnrollment ]));
  };
  const handleDeleteEnrollment = async (course: any) => {
    await courseClient.unenrollUserFromCourse(currentUser, course);
    dispatch(setEnrollments(enrollments.filter((enrollment:any) => enrollment._id !== enrollment._id)));
  };


  // const fetchCourses = async () => {
  //   try {
  //     const courses = await userClient.findMyCourses();
  //     dispatch(setCourses(courses));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchCourses();
  // }, [currentUser]);

  const fetchAllUserCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllUserCourses();
  }, [currentUser]);
  
  const handleAddNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };

  const handleDeleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course:any) => course._id !== courseId)));
  };

  const handleUpdateCourse = async () => {
    await courseClient.updateCourse(course);
    dispatch(setCourses(courses.map((c : any) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));
  };

  const userEnrollments = enrollments.filter((enrollment: any) => enrollment.user === currentUser?._id);
  
  return (
    <Session>
    <div id="wd-kambaz"> 
        <KambazNavigation />
          <div className="wd-main-content-offset p-3">
          <Routes>
            <Route key="home" path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route 
              key="dashboard" 
              path="/Dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={handleAddNewCourse}
                    deleteCourse={handleDeleteCourse}
                    updateCourse={handleUpdateCourse}
                    userEnrollments={userEnrollments}
                    addEnrollment={handleAddEnrollment}
                    deleteEnrollment={handleDeleteEnrollment}
                  />
                </ProtectedRoute>} />
              <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
            </div>
    </div>
    </Session>
);}
