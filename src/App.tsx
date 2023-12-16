import { useRoutes } from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { AbsolventiPage } from './pages/Absolventi/AbsolventiPage'
import { Layout } from './components/Layout/Layout'
import { Tancirna } from './pages/Tancirna/Tancirna'
import { Filmy } from './pages/Filmy/Filmy'
import { Vymenik } from './pages/Vymenik/Vymenik'
import { Hudebka } from './pages/Hudebka/Hudebka'
import { Support } from './pages/Support/Support'

function App() {

  const page = useRoutes([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/absolventi",
      element: <AbsolventiPage />
    },
    {
      path: "/tancirna",
      element: <Tancirna />
    },
    {
      path: "/filmy",
      element: <Filmy />
    },
    {
      path: "/vymenik",
      element: <Vymenik />
    },
    {
      path: "/hudebka",
      element: <Hudebka />
    },
    {
      path: "/support",
      element: <Support />
    }
  ])



    return (
    <>
      <Layout>
        {page}
      </Layout>
    </>
  )
}

export default App
