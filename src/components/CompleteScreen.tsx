type CompleteScreenProps = {
  message: string
}

export function CompleteScreen({ message }: CompleteScreenProps) {
  return (
    <section className="complete">
      <h1 className="complete-message">{message}</h1>
    </section>
  )
}
