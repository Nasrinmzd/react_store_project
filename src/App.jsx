import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App