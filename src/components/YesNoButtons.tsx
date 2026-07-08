type YesNoButtonsProps = {
  onYes: () => void
  onNo: () => void
}

export function YesNoButtons({ onYes, onNo }: YesNoButtonsProps) {
  return (
    <div className="answers">
      <button type="button" className="answer-button yes" onClick={onYes}>
        はい
      </button>
      <button type="button" className="answer-button no" onClick={onNo}>
        いいえ
      </button>
    </div>
  )
}
