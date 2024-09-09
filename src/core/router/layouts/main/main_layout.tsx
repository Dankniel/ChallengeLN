import { Navigate, Route, Routes } from "react-router-dom"
import HomeScreen from "../../../../presentation/screens/home/home_screen"
import Cat from "../../../../presentation/screens/error/cat"
import ErrorScreen from "../../../../presentation/screens/error/error_screen"

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