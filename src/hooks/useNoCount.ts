import { useCallback, useState } from 'react'

/**
 * 「いいえ」の押下回数を管理するフック。
 * この回数がアプリの中核状態で、「はい」の拡大（#17）・煽り文言（#22）・
 * 「いいえ」の縮小（#23）はすべてここから導出する。
 */
export function useNoCount() {
  const [noCount, setNoCount] = useState(0)

  const countNo = useCallback(() => {
    setNoCount((count) => count + 1)
  }, [])

  const resetNoCount = useCallback(() => {
    setNoCount(0)
  }, [])

  return { noCount, countNo, resetNoCount }
}
