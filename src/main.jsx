import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout.jsx";
import Login from "./components/pages/Login.jsx";
import Student from './student/Student.jsx';
import LesseonManu from './student/LesseonManu.jsx';
import Lesson from './student/Lesson.jsx';
import PageOne from "./components/pages/PageOne.jsx";
import PageTwo from "./components/pages/PageTwo.jsx";

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

          <Route path="lesson/1" element={<PageOne />} />
          <Route path="lesson/2" element={<PageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
