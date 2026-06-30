import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.jsx";
import Login from "./Login.jsx";
import Student from './student/Student.jsx';
import LesseonManu from './student/LesseonManu.jsx';
import Lesson from './student/Lesson.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/student" element={<Layout />}>
          <Route index element={<Student />} />
          <Route path="lesson" element={<LesseonManu />} />
          <Route path="lesson/1" element={<Lesson />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
