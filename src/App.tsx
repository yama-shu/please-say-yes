import './App.css'
import { QuestionText } from './components/QuestionText'
import { YesNoButtons } from './components/YesNoButtons'
import { useNoCount } from './hooks/useNoCount'
import { questionText } from './lib/config'

function App() {
  const { noCount, countNo } = useNoCount()

  // 「はい」押下時の完了画面への遷移は #19 で実装する
  const handleYes = () => {}

  return (
    <main className="app">
      <QuestionText text={questionText} />
      <YesNoButtons onYes={handleYes} onNo={countNo} />
      {import.meta.env.DEV && (
        <p className="debug-count">いいえ押下回数: {noCount}</p>
      )}
    </main>
  )
}

export default App
