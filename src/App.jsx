import Header from "./components/Header.jsx"
import Start from "./components/Start.jsx"
import Popular from './components/Popular.jsx'
import Info from './components/Info.jsx'

function App() {
  return (
    <>
      <Header />
      <Start />
      <div className="flex flex-col items-center justify-center px-">
        <Popular />
        <Info />
      </div>
    </>
  )
}

export default App
