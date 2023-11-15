import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navigation/Navbar'

function HomeLayout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className=" mx-auto px-4">
        <Outlet />
      </main>
    </>
  )
}
export default HomeLayout
