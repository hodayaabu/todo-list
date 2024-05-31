
// import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
import { TaskDetails } from './pages/TaskDetails.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export function App() {
  return (
    <Router>
      <div>
        {/* <AppHeader /> */}
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:taskId' element={<TaskDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
