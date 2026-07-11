import { describe, expect, it } from 'vitest'
import type { GrowthParams } from './yesButtonSize'
import { calcYesButtonRatio } from './yesButtonSize'

/**
 * デフォルト係数と同じ値。この係数では
 * 6 回目 ≈ 0.903 < 1、7 回目で計算値 ≈ 1.264 → 上限到達、が境界になる。
 * ケースの洗い出しは Issue #25 のコメントを参照。
 */
const params: GrowthParams = {
  initialRatio: 0.12,
  growthRate: 1.4,
  maxRatio: 1,
}

describe('calcYesButtonRatio', () => {
  it('押下 0 回では初期サイズを返す', () => {
    // CI 検証用にわざと誤った期待値にしている（次のコミットで戻す）
    expect(calcYesButtonRatio(0, params)).toBe(999)
  })

  it('1 押下ごとに growthRate 倍で拡大する', () => {
    expect(calcYesButtonRatio(1, params)).toBeCloseTo(0.12 * 1.4)
    expect(calcYesButtonRatio(2, params)).toBeCloseTo(0.12 * 1.4 ** 2)
  })

  it('上限に達するまで単調増加する', () => {
    for (let count = 1; count <= 7; count++) {
      expect(calcYesButtonRatio(count, params)).toBeGreaterThanOrEqual(
        calcYesButtonRatio(count - 1, params),
      )
    }
  })

  it('上限直前（6 回）は計算値のままで上限に達しない', () => {
    const ratio = calcYesButtonRatio(6, params)
    expect(ratio).toBeCloseTo(0.12 * 1.4 ** 6)
    expect(ratio).toBeLessThan(params.maxRatio)
  })

  it('計算値が上限を超えた回（7 回）でちょうど maxRatio になる', () => {
    expect(calcYesButtonRatio(7, params)).toBe(params.maxRatio)
  })

  it('上限を超えても maxRatio に張り付いたままになる', () => {
    expect(calcYesButtonRatio(8, params)).toBe(params.maxRatio)
    expect(calcYesButtonRatio(100, params)).toBe(params.maxRatio)
  })

  it('巨大な押下回数でも Infinity にならず maxRatio を返す', () => {
    expect(calcYesButtonRatio(Number.MAX_SAFE_INTEGER, params)).toBe(
      params.maxRatio,
    )
  })

  it('負数は 0 回として扱う（防御的丸め）', () => {
    expect(calcYesButtonRatio(-1, params)).toBe(params.initialRatio)
  })

  it('小数は切り捨てて扱う（防御的丸め）', () => {
    expect(calcYesButtonRatio(2.9, params)).toBe(calcYesButtonRatio(2, params))
  })

  it('growthRate が 1 なら何回押しても初期サイズのまま', () => {
    const flat: GrowthParams = { ...params, growthRate: 1 }
    expect(calcYesButtonRatio(0, flat)).toBe(flat.initialRatio)
    expect(calcYesButtonRatio(50, flat)).toBe(flat.initialRatio)
  })

  it('maxRatio が初期サイズより小さい場合は常に maxRatio が優先される', () => {
    const tiny: GrowthParams = { ...params, maxRatio: 0.05 }
    expect(calcYesButtonRatio(0, tiny)).toBe(tiny.maxRatio)
  })
})
