import React from 'react';
import Container from 'react-bootstrap/Container';
import '../AppVanillaHtml.css';

const courses = [
  {
    course: 'Principles of Cybersecurity (CIS 5370)',
    institution: 'Florida International University',
    role: 'Lecturer',
    terms: "fall'22, spring'23, fall'23, fall'24, spring'25",
  },
  {
    course: 'Systems Security (CY 3740)',
    institution: 'Northeastern University',
    role: 'Lecturer',
    terms: "summer'21",
  },
  {
    course: 'Cross-Layer Computer Security (EEL4930/EEL5934)',
    institution: 'University of Florida',
    role: 'Guest Lecturer',
    terms: '2015 - 2019',
    note: 'Assisted syllabus and exams: 2015, 2016',
  },
];

const CourseList = () => (
  <ul className="academic-course-list">
    {courses.map((course) => (
      <li key={course.course}>
        <strong>{course.course}</strong>
        <span>{course.institution} · {course.role}, {course.terms}</span>
        {course.note && <span>{course.note}</span>}
      </li>
    ))}
  </ul>
);

const Teaching = ({ embedded = false }) => {
  if (embedded) return <CourseList />;
  return <Container className="row_padding_top"><CourseList /></Container>;
};

export default Teaching;
