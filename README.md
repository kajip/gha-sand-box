# gha-sand-box
GitHub Actionsを試すためのレポジトリ

## プロジェクトの初期化
npm init
## TypeScriptのインストール
## TypeScript 5.xは、eslintがまだ対応していない
npm install --save-dev typescript^4.1.6 ts-node @types/node
## Jestのインストール
npm install --save-dev jest ts-jest @types/jest
## Jestの設定ファイル作成
## 自動生成後、'preset: "ts-jest"'を追加
npx jest --init
## ESLint
npm init @eslint/config@latest
