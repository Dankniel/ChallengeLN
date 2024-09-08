import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main/main_layout";


const AppRouter = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<MainLayout />}/>
      {/*<Route path="/dashboard/*" element={<DashboardLayout />} />*/}
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter