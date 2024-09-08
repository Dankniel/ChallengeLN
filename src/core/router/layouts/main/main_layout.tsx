import { Navigate, Route, Routes } from "react-router-dom"
import HomeScreen from "../../../../presentation/home/home_screen"
import Cat from "../../../../presentation/error/cat"
import ErrorScreen from "../../../../presentation/error/error_screen"

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/cat" element={<Cat />} />

      {/* Redirigir a ErrorPage si la ruta no existe */}
      <Route path="*" element={<Navigate to="/error" />} />
      <Route path="/error" element={<ErrorScreen />} />
    </Routes>
  )
}

export default MainLayout