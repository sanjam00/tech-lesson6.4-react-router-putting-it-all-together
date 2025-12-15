import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import BookstoreContainer from './pages/BookstoreContainer'
import BookstoreForm from './pages/BookstoreForm'
import BookstoreCard from './pages/BookstoreCard'
import BookstoreList from './pages/BookstoreList';
import BookForm from './pages/BookForm'
import BookCard from './pages/BookCard'

const App = () => (

  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/bookstores' element={<BookstoreContainer />} >
          <Route path='' element={<BookstoreList />} />
          <Route path='new' element={<BookstoreForm />} />
          <Route path=':id' element={<BookstoreCard />} >
            <Route path='books/new' element={<BookForm />} />
            <Route path='books/:bookId' element={<BookCard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)

export default App

