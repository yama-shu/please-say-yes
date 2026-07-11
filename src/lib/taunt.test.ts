import { describe, expect, it } from 'vitest'
import type { TauntStage } from './taunt'
import { getTauntText } from './taunt'

/** デフォルト設定と同じ 4 段階（しきい値は #10 の決定） */
const stages: TauntStage[] = [
  { count: 2, text: '本当に？' },
  { count: 4, text: '考え直してほしい' },
  { count: 6, text: '悪いことは言わないから' },
  { count: 7, text: 'もう逃げられないよ？' },
]

describe('getTauntText', () => {
  it('どの段階にも達していなければ null（0〜1 回）', () => {
    expect(getTauntText(0, stages)).toBeNull()
    expect(getTauntText(1, stages)).toBeNull()
  })

  it('最初のしきい値ちょうど（2 回）で段階 1 の文言になる', () => {
    expect(getTauntText(2, stages)).toBe('本当に？')
  })

  it('次のしきい値の手前（3 回）では段階が変わらない', () => {
    expect(getTauntText(3, stages)).toBe('本当に？')
  })

  it('しきい値を跨ぐごとに文言が切り替わる', () => {
    expect(getTauntText(4, stages)).toBe('考え直してほしい')
    expect(getTauntText(6, stages)).toBe('悪いことは言わないから')
    expect(getTauntText(7, stages)).toBe('もう逃げられないよ？')
  })

  it('最終段階を超えても最後の文言のまま', () => {
    expect(getTauntText(8, stages)).toBe('もう逃げられないよ？')
    expect(getTauntText(100, stages)).toBe('もう逃げられないよ？')
  })

  it('負数は 0 回として扱う（防御的丸め）', () => {
    expect(getTauntText(-1, stages)).toBeNull()
  })

  it('小数は切り捨てて扱う（防御的丸め）', () => {
    expect(getTauntText(3.9, stages)).toBe('本当に？')
  })

  it('段階の定義順に依存しない（未ソートでも正しく判定する）', () => {
    const shuffled = [stages[2], stages[0], stages[3], stages[1]]
    expect(getTauntText(5, shuffled)).toBe('考え直してほしい')
  })

  it('段階が空なら常に null', () => {
    expect(getTauntText(10, [])).toBeNull()
  })
})
