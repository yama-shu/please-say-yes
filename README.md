# please-say-yes

**ボタンの主張が強すぎるサイト** — 「いいえ」を押すたびに「はい」ボタンがどんどん大きくなり、選択を迫る圧が強まっていく一発ネタ系 Web アプリ。

## これは何？

質問に対して「はい」「いいえ」の 2 択を提示しますが、「いいえ」を押すたびに「はい」ボタンが段階的に拡大していき、最終的に「はい」を押すと完了画面に遷移します。

- ブラウザ上で完結するフロントエンドのみのアプリです（サーバ・DB なし）
- MVP は「はいボタンが拡大するだけ」に絞り、演出（煽り文言・いいえボタンの挙動変化など）は後段で追加します

開発は Issue 駆動で進めています。ロードマップ（Issue 対応表・ブランチ運用・依存関係）は [docs/issues/README.md](docs/issues/README.md) を参照してください。

## 使用技術

| 技術                                          | バージョン | 用途                           |
| --------------------------------------------- | ---------- | ------------------------------ |
| [React](https://react.dev/)                   | 19.x       | UI（押下回数に応じた状態管理） |
| [TypeScript](https://www.typescriptlang.org/) | 6.x        | 型付け                         |
| [Vite](https://vite.dev/)                     | 8.x        | 開発サーバ・ビルド             |
| [oxlint](https://oxc.rs/)                     | 1.x        | Lint                           |

技術選定の経緯（候補比較・不採用理由）は [Issue #3](https://github.com/yama-shu/please-say-yes/issues/3) に記録しています。

## セットアップ

前提: [Node.js](https://nodejs.org/) がインストールされていること（v24.11.1 / npm 11.6.2 で動作確認済み）。

```bash
git clone git@github.com:yama-shu/please-say-yes.git
cd please-say-yes
npm install
```

## ローカル実行（開発サーバ）

```bash
npm run dev
```

http://localhost:5173 が開発サーバとして起動します（ファイル変更は即時反映）。

## ビルド

```bash
npm run build    # 型チェック（tsc）+ 本番ビルド → dist/ に出力
npm run preview  # dist/ の内容をローカルで配信して確認
```

## Lint / Format

```bash
npm run lint          # oxlint による静的チェック
npm run format        # Prettier で一括整形
npm run format:check  # 整形済みかの検査のみ（CI 用）
```

## 設定方法

文言と「はい」ボタンの拡大係数を、環境変数（ビルド時に読み込み）で変更できます。
すべて任意で、未設定の場合はデフォルト値が使われます。

| 環境変数                 | 内容                                        | デフォルト                               |
| ------------------------ | ------------------------------------------- | ---------------------------------------- |
| `VITE_QUESTION_TEXT`     | 質問文                                      | 「はい」と言ってくれますか？             |
| `VITE_COMPLETE_TEXT`     | 完了画面のメッセージ                        | ありがとう。そう言ってくれると思ってた。 |
| `VITE_YES_INITIAL_RATIO` | 「はい」の初期サイズ（ビューポート比 0〜1） | 0.12                                     |
| `VITE_YES_GROWTH_RATE`   | 1 押下ごとの拡大倍率（> 1）                 | 1.4                                      |
| `VITE_YES_MAX_RATIO`     | 拡大の上限（ビューポート比。1 = 画面全体）  | 1                                        |

設定方法は 2 通りです（詳細は [.env.example](.env.example) を参照）:

```bash
# 1. .env ファイルで設定（.env は git 管理外）
cp .env.example .env   # コメントを外して値を編集

# 2. コマンドに直接渡す
VITE_YES_GROWTH_RATE=2.0 npm run dev
```

数値が不正な場合（数値でない・0 以下）はデフォルト値にフォールバックします。

## テスト

[Vitest](https://vitest.dev/) による単体テストがあります（対象: サイズ再計算ロジック）。

```bash
npm test            # 一括実行
npm run test:watch  # watch モード
```

テストケースの設計（境界値分析）は [Issue #25](https://github.com/yama-shu/please-say-yes/issues/25) に記録しています。

## リリース方法

未公開です。デプロイ先の決定〜独自ドメイン + HTTPS での公開は [Issue #26](https://github.com/yama-shu/please-say-yes/issues/26)〜[#30](https://github.com/yama-shu/please-say-yes/issues/30) で対応予定です。
