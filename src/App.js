import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import UploadBlog from './data/UploadBlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import BlogContent from './pages/BlogContent';
import Education from './pages/Education';
import ProjectsDetails from './pages/ProjectsDetails';
import AddProject from './pages/AddProject';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectsDetails />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogContent />} />
          <Route path='/upload-blogs' element={<UploadBlog />} />
          <Route path='/education' element={<Education />} />
          <Route path='/add-project' element={<AddProject />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
