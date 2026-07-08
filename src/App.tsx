import './App.css'
import { QuestionText } from './components/QuestionText'
import { YesNoButtons } from './components/YesNoButtons'
import { questionText } from './lib/config'

function App() {
  // 押下時の中身は後続で実装する（回数カウント: #16、完了画面への遷移: #19）
  const handleYes = () => {}
  const handleNo = () => {}

  return (
    <main className="app">
      <QuestionText text={questionText} />
      <YesNoButtons onYes={handleYes} onNo={handleNo} />
    </main>
  )
}

export default App
