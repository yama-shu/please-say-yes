import { useState } from 'react'
import './App.css'
import { CompleteScreen } from './components/CompleteScreen'
import { QuestionText } from './components/QuestionText'
import { YesNoButtons } from './components/YesNoButtons'
import { useNoCount } from './hooks/useNoCount'
import { completeText, questionText, yesButtonGrowth } from './lib/config'
import { calcYesButtonRatio } from './lib/yesButtonSize'

/** 画面の状態。演出フェーズ（#22 #24）で増える可能性があるためユニオン型で持つ */
type Phase = 'asking' | 'completed'

function App() {
  const { noCount, countNo } = useNoCount()
  const [phase, setPhase] = useState<Phase>('asking')
  const yesRatio = calcYesButtonRatio(noCount, yesButtonGrowth)

  const handleYes = () => setPhase('completed')

  return (
    <main className="app">
      {phase === 'asking' ? (
        <>
          <QuestionText text={questionText} />
          <YesNoButtons onYes={handleYes} onNo={countNo} yesRatio={yesRatio} />
        </>
      ) : (
        <CompleteScreen message={completeText} />
      )}
      {import.meta.env.DEV && (
        <p className="debug-count">いいえ押下回数: {noCount}</p>
      )}
    </main>
  )
}

export default App
