import { useRoutes } from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { AbsolventiPage } from './pages/Absolventi/AbsolventiPage'
import { Layout } from './components/Layout/Layout'
import { Tancirna } from './pages/Tancirna/Tancirna'
import { Filmy } from './pages/Filmy/Filmy'
import { Vymenik } from './pages/Vymenik/Vymenik'
import { Hudebka } from './pages/Hudebka/Hudebka'
import { Support } from './pages/Support/Support'
import { Literatura } from './pages/Literatura/Literatura'
import { Art } from './pages/Art/Art'
import { Deskovky } from './pages/Deskovky/Deskovky'
import { Kahoot } from './pages/Kahoot/Kahoot'
import { Prednasky } from './pages/Prednasky/Prednasky'

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
    },
    {
      path: "/literatura",
      element: <Literatura />
    },
    {
      path: "/art",
      element: <Art />
    },
    {
      path: "/deskovky",
      element: <Deskovky />
    },
    {
      path: "/kahoot",
      element: <Kahoot />
    },
    {
      path: "/prednasky",
      element: <Prednasky />
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
