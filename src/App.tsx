import './App.css'
import { QuestionText } from './components/QuestionText'
import { questionText } from './lib/config'

function App() {
  return (
    <main className="app">
      <QuestionText text={questionText} />
    </main>
  )
}

export default App
