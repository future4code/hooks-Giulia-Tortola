import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ListTripsPage from "./pages/ListTripsPage"
import TripsDetailsPage from "./pages/TripsDetailsPage"
import CreateTripPage from "./pages/CreateTripPage"
import AdminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"


function Router () {
    return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage/>}/>

        <Route path="/trip-details" element={<TripsDetailsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/list-trips" element={<ListTripsPage/>}/>
        <Route path="/create-trip" element={<CreateTripPage/>}/>
        <Route path="/admin-home" element={<AdminHomePage/>}/>
        <Route path="/application" element={<ApplicationFormPage/>}/>
    </Routes>    
    </BrowserRouter>
    )
}

export default Router