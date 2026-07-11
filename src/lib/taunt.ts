export type TauntStage = {
  /** この押下回数以上で表示する（累計の「いいえ」回数） */
  count: number
  /** 表示する煽り文言 */
  text: string
}

/**
 * 「いいえ」の押下回数から表示する煽り文言を返す。
 * noCount 以下で最大の count を持つ段階の文言を返し、
 * どの段階にも達していなければ null（表示なし）。
 * 段階の定義順には依存しない（内部でソートする）。
 */
export function getTauntText(
  noCount: number,
  stages: TauntStage[],
): string | null {
  // 不正な入力（負数・小数）は押下回数として意味を持つ範囲に丸める
  const presses = Math.max(0, Math.floor(noCount))
  let current: string | null = null
  for (const stage of [...stages].sort((a, b) => a.count - b.count)) {
    if (presses >= stage.count) {
      current = stage.text
    }
  }
  return current
}
