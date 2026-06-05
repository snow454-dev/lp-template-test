# 作業ログ

## 2026-06-05

### 実装した内容（長野県 運送業 HP 全面リビルド）
- 食料品店LPを全廃し、長野県の運送業（一般貨物輸送）HP として再構築
- カラー: ディープネイビー #1e3a5f × ウォームオレンジ #e85d04 × 白/ライトグレー
- Unsplash（トラック画像）をHeroで使用

### 作成・更新したファイル
- `src/config/site.config.ts` — 運送業コンテンツ（全社情報プレースホルダー）
- `src/app/globals.css` — ネイビー × オレンジ パレットに更新
- `src/app/layout.tsx` — メタデータ更新
- `src/app/page.tsx` — 新セクション構成＋JSON-LD (LocalBusiness)
- `src/components/sections/Header.tsx` — 電話番号 + オレンジCTA
- `src/components/sections/Hero.tsx` — トラック全画面Hero + 2CTA
- `src/components/sections/TrustBar.tsx` — 新規: ネイビー帯4指標
- `src/components/sections/Services.tsx` — 新規: 一般貨物輸送詳細
- `src/components/sections/Strengths.tsx` — 新規: 強み4カード
- `src/components/sections/Flow.tsx` — 新規: ご利用の流れ4ステップ
- `src/components/sections/CompanyInfo.tsx` — 新規: 会社概要テーブル
- `src/components/sections/Contact.tsx` — 新規: 電話・メール・フォーム
- `src/components/sections/Footer.tsx` — 運送業フッターに更新
- 旧食料品店セクション（Products/Kodawari/News/Access）を削除

### 残課題
- 実際の会社名・住所・電話番号・許可番号に差し替え
- Hero画像を実車・実際の風景写真に差し替え
- お問い合わせフォームのバックエンド連携（Resend等）
- Vercel デプロイ設定
- OGP画像の作成

## 2026-05-28
- LP量産テンプレートの初期セットアップ
- Next.js 14 + TypeScript + Tailwind v4 でプロジェクト作成
- 共通ルール(~/.claude/CLAUDE.md)を整備:標準スタック・デザイン規約・2台Mac運用・SEO
- meo-lp の良いルール(brand集約・weight 400/500・WORKLOG運用)を共通ルールに統合
- site.config.ts 駆動の Hero セクションを実装(清水商事/運送業)
- テキスト差し替えで別会社化できることを検証済み(設計OK)
- AI_Projects 親リポジトリから lp-template-test を独立リポジトリ化

### 次回やること
- TrustBar(実績バー)セクションを追加
- 以降 Services / Strengths / Company / Contact を順に追加
- Resend でお問い合わせフォーム連携
- 運送業プリセットとして templates/transport/ に切り出し

## 2026-06-03

### 実装した内容 (AISupports LP 新規作成)
- yamada-store.com のデザインパターンを参考に AISupports 向け LP を全セクション構築
- @tabler/icons-react を依存関係に追加

### 作成したファイル
- `src/config/site.config.ts` — 全コンテンツ（サービス4種、導入事例6件、プロセス4ステップ、FAQ5件）
- `src/app/globals.css` — yamada-store 参照のニュートラルカラーパレット（#111111 × 白 × #1B4FD8 アクセント）
- `src/app/layout.tsx` — OGP / canonical メタデータ対応
- `src/app/page.tsx` — JSON-LD 構造化データ（ProfessionalService）
- `src/components/sections/Header.tsx` — スティッキーナビ、ハンバーガーメニュー対応
- `src/components/sections/Hero.tsx` — ビッグ見出し + デュアル CTA
- `src/components/sections/Metrics.tsx` — 黒背景 4カラム 実績数値
- `src/components/sections/PickUp.tsx` — yamada-store の PICK UP セクション参考、サービス 4カード
- `src/components/sections/CaseStudies.tsx` — 導入事例 3カラムグリッド
- `src/components/sections/Process.tsx` — 4ステップフロー
- `src/components/sections/Faq.tsx` — アコーディオン FAQ
- `src/components/sections/CtaBanner.tsx` — 黒背景 最終 CTA
- `src/components/sections/Footer.tsx` — ナビリンク + 法的リンク + copyright

### デザイン方針
- yamada-store.com の「クリーンな日本ミニマル」を採用
- ニュートラルパレット（黒・白・ライトグレー）、CTA のみ青アクセント
- gap-px + bg-border による CSS グリッド分割（細いボーダーライン表現）
- font-normal / font-medium のみ使用（CLAUDE.md ルール準拠）

### 残課題
- npm run dev で目視確認（シェルが不安定だったため未実施）
- お問い合わせフォーム実装（現在はメールリンク）
- OGP 画像の追加
- Vercel デプロイ設定

## 2026-06-03（2回目）

### 実装した内容（食料品店 LP 全面リビルド）
- yamada-store.com を参考に、食料品店 LP をゼロから再構築
- ブランドカラー: ディープネイビー #1a3a5c × ウォームベージュ #f5ede0 × ゴールド #c9a96e
- Unsplash プレースホルダー画像を全セクションで使用（next/image + remotePatterns 設定）

### 作成・更新したファイル
- `next.config.ts` — images.remotePatterns に Unsplash を追加
- `src/config/site.config.ts` — 里の台所（食料品店）向けコンテンツに全面書き換え
- `src/app/globals.css` — ウォームクリームベース × ネイビーブランドカラーに更新
- `src/app/layout.tsx` — 食料品店向けメタデータ更新
- `src/app/page.tsx` — 新セクション構成（Hero / Products / Kodawari / News / Access / Footer）
- `src/components/sections/Header.tsx` — 食料品店ナビ（商品一覧・こだわり・アクセス・お問い合わせ）
- `src/components/sections/Hero.tsx` — 全画面写真 + ネイビーグラデーションオーバーレイ
- `src/components/sections/Products.tsx` — 6商品グリッド（新規作成）
- `src/components/sections/Kodawari.tsx` — 3カラムこだわりセクション（新規作成）
- `src/components/sections/News.tsx` — お知らせリスト5件（新規作成）
- `src/components/sections/Access.tsx` — Google Maps embed + 店舗情報（新規作成）
- `src/components/sections/Footer.tsx` — ネイビー背景 + 3カラムフッター
- 旧 AISupports セクション（Metrics / PickUp / CaseStudies / Process / Faq / CtaBanner）を削除

### 残課題
- Google Maps に実際の住所を設定
- OGP 画像の追加
- お問い合わせフォーム実装（Resend or mailto）
- Vercel デプロイ設定
