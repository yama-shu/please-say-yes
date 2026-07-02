/**
 * アプリの設定値。
 * 文言や係数はここに集約し、ビルド時に環境変数（VITE_*）で差し替えられるようにする。
 */

/** 画面に表示する質問文 */
export const questionText: string =
  import.meta.env.VITE_QUESTION_TEXT ?? '「はい」と言ってくれますか？'
