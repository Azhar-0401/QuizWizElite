import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';import HomePage from './pages/HomePage';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import TeacherHome from './pages/TeacherHome';
import StudentHome from './pages/StudentHome';
import CustomTestCreate from './pages/CustomTestCreate';
import TestView from './pages/TestView';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/teacher-home' element={<TeacherHome/>} />
      <Route path='/student-home' element={<StudentHome/>} />
      <Route path='/custom-test-create' element={<CustomTestCreate/>} />
      <Route path='/test-view' element={<TestView/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
