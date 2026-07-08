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
  import.meta.env.VITE_COMPLETE_TEXT ?? 'ありがとう。そう言ってくれると思ってた。'

/**
 * 「はい」ボタン拡大の係数（環境変数への外出しは #18 で対応）。
 * initialRatio 0.12 × growthRate 1.4 の場合、7 回の「いいえ」で上限（画面全体）に達する。
 */
export const yesButtonGrowth: GrowthParams = {
  initialRatio: 0.12,
  growthRate: 1.4,
  maxRatio: 1,
}
