type QuestionTextProps = {
  text: string
}

export function QuestionText({ text }: QuestionTextProps) {
  return <h1 className="question">{text}</h1>
}
