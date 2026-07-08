import type { CSSProperties } from 'react'

type YesNoButtonsProps = {
  onYes: () => void
  onNo: () => void
  /** 「はい」ボタンのサイズ（ビューポートに対する割合 0〜1） */
  yesRatio: number
}

export function YesNoButtons({ onYes, onNo, yesRatio }: YesNoButtonsProps) {
  return (
    <div className="answers">
      <button
        type="button"
        className="answer-button yes"
        style={{ '--yes-ratio': yesRatio } as CSSProperties}
        onClick={onYes}
      >
        はい
      </button>
      <button type="button" className="answer-button no" onClick={onNo}>
        いいえ
      </button>
    </div>
  )
}
