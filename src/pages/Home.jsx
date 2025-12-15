import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>📚 Welcome to the Bookstore Directory 📖</h1>
        <p>
          Discover your favorite bookstores and explore their collections. Click below to start browsing!
        </p>
        <nav>
          {/* Students will add Links for navigation */}
          <Link>View Bookstores</Link> |{" "}
          <Link>Learn More About This App</Link>
        </nav>
      </main>
    </>
  )
}

export default Home
