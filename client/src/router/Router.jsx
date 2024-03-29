import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import QuizResults from "../pages/mainQuiz/QuizResults";

// Import React components
import NotFound from "../pages/NotFound";
import InfantQuizHome from "../pages/infantQuiz/HomePage";

import CreateFact from "../pages/infantQuiz/InfantFact";
import InfantQuiz from "../pages/infantQuiz/InfantQuiz";
import Home from "../pages/Home";
import DoctorForm from "../pages/adminForms/DoctorForm";
import AdminDoctorList from "../pages/adminForms/AdminDoctorList";
import UpdateDoctor from "../pages/adminForms/UpdateDoctor";


import SightedText from "../pages/vision Tests/sighted-test/SightedText";
import NearSightedTestView from "../pages/vision Tests/sighted-test/NearSightedTestView";
import SightPass from "../pages/vision Tests/sighted-test/EyeSightedPass";
import SightFail from "../pages/vision Tests/sighted-test/EyeSightedFail";  
import AddTextForm from "../pages/vision Tests/sighted-test/AddTextForm";
import NearSightedTextResult from "../pages/vision Tests/sighted-test/NearSightedResult";
import Questionnaire from "../pages/infantQuiz/Questionnaire";
import CreateQuizQuestion from "../pages/infantQuiz/CreateQuiz";
import ViewQuiz from "../pages/infantQuiz/ViewQuiz";
import AllTestHome from "../pages/vision Tests/AllTestHome";
import AdminHome from "../pages/adminForms/AdminHome";


//import NearSighted from "../pages/sighted-test/SightedText";
import NearSightedTestInstructions from "../pages/vision Tests/sighted-test/NearSightedTestInstructions";
import NearSighted from "../pages/vision Tests/sighted-test/SightedText";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AuthContext } from "../context/authContext";
import Profile from "../pages/Profilepage";
import CommentSection from "../pages/CommentPage"
import DoctorContactHome from "../pages/doctorContactHome/DoctorContactHome";
import DoctorList from "../pages/doctorContactHome/DoctorList";
import DoctorDetails from "../pages/doctorContactHome/DoctorDetails";
import Map from "../pages/doctorContactHome/Map";

const Router = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const admin = user?.isAdmin === true;

    if (!admin) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/comment" element={<CommentSection />} />    
       {/* Doctor contact home Page */}
       <Route path="/doctorContact" element={<DoctorContactHome />} />
       {/* Admin Doctor List */}
      <Route path="/adminDoctorList" element={<AdminDoctorList />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        }
      />

{/* Admin Doctor Update */}
<Route path="/update-doctor/:email" element={<UpdateDoctor />} />

{/* Doctor List Page */}
<Route path="/doctorContact/doctorList" element={<DoctorList />} />

{/* Doctor Page */}
<Route path="/doctor/:email" element={<DoctorDetails />} />

{/* Doctor map Page */}
<Route path="/doctorContact/doctorMap" element={<Map />} />

{/* Admin Treatment Update */}

{/* Doctor Form */}
<Route path="/doctorForm" element={<DoctorForm />} />



      

      {/* -----------sighted test Routes--------------------- */}
      <Route path="/far-sighted" element={<SightedText />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_eye_care" element={<InfantQuizHome />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_quiz" element={<InfantQuiz />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_questionnaire" element={<Questionnaire />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_facts" element={<CreateFact />} />

      {/* Infant Quiz Create Page */}
      <Route path="/infant_create_quiz" element={<CreateQuizQuestion />} />

      {/* Infant Quiz Manage Page */}
      <Route path="/infant_view_quiz" element={<ViewQuiz />} />

      {/* -----------sighted test Routes--------------------- */}
      <Route path="/near-sighted" element={<NearSighted />} />
      <Route path="/test-view" element={<NearSightedTestView />} />
      <Route path="/test-inst" element={<NearSightedTestInstructions />} />
        
      <Route path="/test-home" element={<AllTestHome />}/>

      {/* -----------sighted test Routes--------------------- */}
      <Route path="/far-sighted" element={<SightedText />} />
      <Route path="/near-test-view" element={<NearSightedTestView />} />
      <Route path="/eye-sight-pass" element={<SightPass />} />
      <Route path="/eye-sight-fail" element={<SightFail />} />
      <Route path="/addText-form" element={<AddTextForm />} />
      <Route path="/near-sighted" element={<SightedText />} />
      <Route path="/near-sighted-result" element={<NearSightedTextResult />} />
    </Routes>
  );
};

export default Router;
