import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'

/**
 * Layout — wraps every page with Navbar at the top and Footer at the bottom.
 * <Outlet /> is where React Router renders the matched child page component.
 */
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
