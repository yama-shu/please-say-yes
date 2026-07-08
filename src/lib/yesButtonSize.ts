export type GrowthParams = {
  /** 押下 0 回時のサイズ（ビューポートに対する割合 0〜1） */
  initialRatio: number
  /** 1 押下ごとの倍率（1 より大きい値で拡大） */
  growthRate: number
  /** サイズの上限（ビューポートに対する割合。1 = 画面を覆う） */
  maxRatio: number
}

/**
 * 「いいえ」の押下回数から「はい」ボタンのサイズを計算する。
 * サイズはビューポートに対する割合（0〜1）で、指数的に拡大し
 * maxRatio で頭打ちになる（上限の扱いは #9 の決定に従う）。
 */
export function calcYesButtonRatio(
  noCount: number,
  { initialRatio, growthRate, maxRatio }: GrowthParams,
): number {
  // 不正な入力（負数・小数）は押下回数として意味を持つ範囲に丸める
  const presses = Math.max(0, Math.floor(noCount))
  return Math.min(maxRatio, initialRatio * growthRate ** presses)
}
