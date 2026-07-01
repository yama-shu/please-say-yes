# 開発ロードマップ（Issue 対応表）

Issue は GitHub に登録済み（#1〜#31）。このファイルは、GitHub Issues には無い
**作業ブランチ名・依存関係・評価項目マッピング**をまとめた「開発の地図」です。
Issue 本体はこちら → https://github.com/yama-shu/please-say-yes/issues

## ブランチ運用

- 作業ブランチは `<type>/<issue番号>-<slug>` 形式（例: `git switch -c feat/16-count-no-presses`）。
- コミットメッセージに `#16` を書いて Issue と紐付ける（PR に `Closes #16` でマージ時に自動クローズ）。
- `decision` 系はコード変更が無ければブランチ不要でクローズしてOK。

## 対応表

| # | Title | Label | 作業ブランチ | 依存 |
|---|-------|-------|-------------|------|
| 1 | [decision] アプリ名を決める | decision | `decision/1-app-name` | - |
| 2 | [decision] ターゲット（誰に見せるか）を決める | decision | `decision/2-target` | - |
| 3 | [decision] 技術スタックを決める（素JS / React / Vue） | decision | `decision/3-tech-stack` | - |
| 4 | [chore] README を整備する | chore | `chore/4-readme` | #3 |
| 5 | [chore] .gitignore を用意する | chore | `chore/5-gitignore` | #3 |
| 6 | [chore] Vite + React + TS の雛形を作る | chore | `chore/6-scaffold` | #3 |
| 7 | [chore] Lint / Formatter を導入する | chore | `chore/7-lint-format` | #6 |
| 8 | [decision] 「いいえ」押下時の挙動を決める | decision | `decision/8-no-behavior` | - |
| 9 | [decision] 「はい」ボタン拡大の上限を決める | decision | `decision/9-grow-limit` | - |
| 10 | [decision] 煽り文言を出すか・段階を決める | decision | `decision/10-taunt-text` | - |
| 11 | [decision] イラスト・キャラを入れるか決める | decision | `decision/11-illustration` | - |
| 12 | [docs] 処理フロー図を作成する | docs | `docs/12-flow-diagram` | #8 #9 |
| 13 | [docs] 状態遷移図を作成する | docs | `docs/13-state-diagram` | #8 #9 #10 |
| 14 | [feat] 質問テキストを画面中央に表示 | feat | `feat/14-question-text` | #6 |
| 15 | [feat] 「はい」「いいえ」ボタンを配置 | feat | `feat/15-yes-no-buttons` | #14 |
| 16 | [feat] 「いいえ」押下で押下回数をカウント | feat | `feat/16-count-no-presses` | #15 |
| 17 | [feat] 押下回数に応じて「はい」ボタンを拡大 | feat | `feat/17-yes-grow-logic` | #16 #9 |
| 18 | [feat] 拡大率・上限を設定/環境変数で外出し | feat | `feat/18-configurable-grow` | #17 |
| 19 | [feat] 「はい」押下で完了画面へ遷移 | feat | `feat/19-complete-screen` | #15 |
| 20 | [ci] GitHub Actions で test を自動実行 | ci | `ci/20-actions-test` | #7 #25 |
| 21 | [ci] GitHub Actions で lint/format チェック | ci | `ci/21-actions-lint` | #7 |
| 22 | [feat] 煽り文言を段階的に表示 | feat | `feat/22-taunt-impl` | #10 #16 |
| 23 | [feat] 「いいえ」ボタンの挙動を実装 | feat | `feat/23-no-behavior-impl` | #8 #16 |
| 24 | [feat] 完了画面のメッセージ/演出 | feat | `feat/24-complete-effect` | #19 |
| 25 | [test] サイズ再計算ロジックの単体テスト | test | `test/25-size-recalc-test` | #17 |
| 26 | [decision] デプロイ先を決める（VPS / ホスティング） | decision | `decision/26-deploy-target` | - |
| 27 | [ci] main push で自動デプロイ（CD） | ci | `ci/27-auto-deploy` | #26 |
| 28 | [infra] 独自ドメインを取得する | infra | `infra/28-domain` | #26 |
| 29 | [infra] Let's Encrypt で HTTPS 化する | infra | `infra/29-https` | #28 |
| 30 | [infra] 公開後の運用・アクセス証跡を残す | infra | `infra/30-ops-evidence` | #29 |
| 31 | [docs] Zenn/Qiita に開発記事を書いて公開 | docs | `docs/31-blog-article` | - |

## 評価項目との対応（メモ）

- Git 1-A-2 / 1-B-3 … 全 Issue の運用（ブランチ→PR→merge、コミット紐付け）
- リポジトリ整備 1-B-1 … #4 #5 #6
- 省力化スクリプト 1-A-3 … #20 #21 #27
- 論理的実装 1-B-2 … #1〜#3, #8〜#11, #26（decision 系）
- チケット管理 1-B-4 … Issue 運用そのもの
- 作図 1-B-6 / 2-B-7 … #12 / #13
- スクラッチ開発 1-A-1 … #14〜#19, #22〜#24
- テスト 2-A-3 … #25
- バグ切り分け 1-A-4 … 発生都度 `[bug]` Issue を追加
- リリース 1-B-5 / 2-B-6 … #28 #29 #30
- 情報発信 1-B-7 … #31
