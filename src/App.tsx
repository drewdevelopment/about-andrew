import './App.css'
import { Header } from './components/Header'
import CustomProvider from './theme'

function App() {
  return (
    <div>
      <CustomProvider theme="primary">
        <Header />
      </CustomProvider>
    </div>

  )
}

export default App
