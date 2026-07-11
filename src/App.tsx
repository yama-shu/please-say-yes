import { useState } from 'react'
import './App.css'
import { CompleteScreen } from './components/CompleteScreen'
import { QuestionText } from './components/QuestionText'
import { YesNoButtons } from './components/YesNoButtons'
import { useNoCount } from './hooks/useNoCount'
import {
  completeText,
  questionText,
  tauntStages,
  yesButtonGrowth,
} from './lib/config'
import { getTauntText } from './lib/taunt'
import { calcYesButtonRatio } from './lib/yesButtonSize'

/** 画面の状態。演出フェーズ（#22 #24）で増える可能性があるためユニオン型で持つ */
type Phase = 'asking' | 'completed'

function App() {
  const { noCount, countNo, resetNoCount } = useNoCount()
  const [phase, setPhase] = useState<Phase>('asking')
  const yesRatio = calcYesButtonRatio(noCount, yesButtonGrowth)
  const tauntText = getTauntText(noCount, tauntStages)

  const handleYes = () => setPhase('completed')

  const handleRetry = () => {
    resetNoCount()
    setPhase('asking')
  }

  return (
    <main className="app">
      {phase === 'asking' ? (
        <>
          <QuestionText text={questionText} />
          {/* 文言なしの段階でも高さを確保してレイアウトが跳ねないようにする */}
          <p className="taunt" aria-live="polite">
            {tauntText ?? ''}
          </p>
          <YesNoButtons onYes={handleYes} onNo={countNo} yesRatio={yesRatio} />
        </>
      ) : (
        <CompleteScreen message={completeText} onRetry={handleRetry} />
      )}
      {import.meta.env.DEV && (
        <p className="debug-count">いいえ押下回数: {noCount}</p>
      )}
    </main>
  )
}

export default App
