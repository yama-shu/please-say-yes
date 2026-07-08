type CompleteScreenProps = {
  message: string
  onRetry: () => void
}

export function CompleteScreen({ message, onRetry }: CompleteScreenProps) {
  return (
    <section className="complete">
      <h1 className="complete-message">{message}</h1>
      <button type="button" className="retry-button" onClick={onRetry}>
        もう一度
      </button>
    </section>
  )
}
