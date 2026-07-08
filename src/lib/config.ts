import type { GrowthParams } from './yesButtonSize'

/**
 * アプリの設定値。
 * 文言や係数はここに集約し、ビルド時に環境変数（VITE_*）で差し替えられるようにする。
 */

/** 画面に表示する質問文 */
export const questionText: string =
  import.meta.env.VITE_QUESTION_TEXT ?? '「はい」と言ってくれますか？'

/** 完了画面に表示するメッセージ */
export const completeText: string =
  import.meta.env.VITE_COMPLETE_TEXT ??
  'ありがとう。そう言ってくれると思ってた。'

/**
 * 環境変数から正の数値を読む。
 * 未設定・数値でない・0 以下の場合はデフォルト値にフォールバックし、
 * 不正な設定でアプリが壊れないようにする。
 */
function envPositiveNumber(
  value: string | undefined,
  fallback: number,
): number {
  if (value === undefined) return fallback
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

/**
 * 「はい」ボタン拡大の係数。
 * デフォルト（initialRatio 0.12 × growthRate 1.4）では 7 回の「いいえ」で
 * 上限（画面全体）に達する。
 */
export const yesButtonGrowth: GrowthParams = {
  initialRatio: envPositiveNumber(import.meta.env.VITE_YES_INITIAL_RATIO, 0.12),
  growthRate: envPositiveNumber(import.meta.env.VITE_YES_GROWTH_RATE, 1.4),
  maxRatio: envPositiveNumber(import.meta.env.VITE_YES_MAX_RATIO, 1),
}
