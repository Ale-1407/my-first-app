import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './views/Homepage';
import Layout from './components/Layout';
import Posts from './views/Posts';
import DetailView from './views/DetailView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<DetailView />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
