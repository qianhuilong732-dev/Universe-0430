# 禹宙星海寄願所｜完整網站專案包

這是可直接放進 GitHub Repository、以 Cloudflare Pages 發佈的網站專案。**平台維持 GitHub + Cloudflare Pages**，沒有改用其他平台。

## 檔案結構

- `index.html`：網站入口
- `style.css`：手機優先的綠色星海介面
- `app.js`：五大分區及目前可操作的前端展示功能
- `assets/models/`：五款 GLB 3D 模型
- `assets/models-preview.png`：模型預覽圖
- `functions/api/health.js`：Pages Functions API 健康檢查
- `db/0001_schema.sql`：D1 資料表初始結構
- `wrangler.toml`：Cloudflare Pages/D1/R2 綁定範本

## 目前可直接體驗的功能

1. 星海：查看願望牆、按讚。
2. 放天燈：切換五款 GLB 模型、旋轉查看、輸入暱稱與心願、將心願存入本機願望牆。
3. 社群：文字貼文、文字限動（24 小時後在介面過濾）、按讚、收藏展示。
4. 聊天：建立本機聊天室、發送本機訊息。
5. 我的：編輯暱稱與個人簡介。
6. 通知入口及五大底部導覽。

## 重要：目前版本的限制

這是一份**完整可部署的前端展示專案＋後端資料結構起始檔**，不是已完成上線的多人社群服務。貼文、心願、聊天、個人資料目前使用瀏覽器 `localStorage`，只存在目前裝置/瀏覽器，不會自動同步給其他人。正式多人使用還需要完成：

- 帳號註冊、登入、驗證與權限檢查
- D1 API：貼文、追蹤、留言、按讚、通知、聊天室等 CRUD
- R2 上傳 API：頭像、限動、貼文圖片及天燈繪圖貼圖
- Durable Objects：跨裝置即時訊息及房間狀態
- 天燈曲面自由繪圖、貼圖烘焙與完整升空動畫
- 檢舉/封鎖/管理員審核流程與安全限制

因此不要把目前的本機聊天或本機貼文當成已經跨裝置同步。模型檔案目前先整合進網站預覽，仍應在正式發布前逐款檢查模型網格與造型。

## 部署到 Cloudflare Pages（手機也可操作）

1. 解壓縮 ZIP。
2. 將解壓後**整個資料夾內的檔案與資料夾**上傳到 GitHub Repository 根目錄，確認根目錄直接看得到 `index.html`、`style.css`、`app.js`。
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git。
4. 選擇你的 GitHub Repository。
5. Framework preset 選 `None`；Build command 留空；Build output directory 填 `/`（若介面不接受，填 `.`）；Production branch 選 `main`。
6. 儲存並部署。部署完成後開啟 Pages 提供的網址。

## 後端資源（正式多人版才需要）

- 建立 D1 database，執行 `db/0001_schema.sql`。
- 建立 R2 bucket `yu-universe-media`。
- 將 `wrangler.toml` 的 `database_id` 改成你自己的 D1 ID，並在 Pages 專案設定中確認 bindings 名稱為 `DB`、`MEDIA`。
- 目前僅提供資料庫結構與健康檢查 API，並未聲稱 D1/R2/即時聊天 API 已完成。

## 測試

部署後開啟 `/api/health`，應回傳 JSON 的 `ok: true`。網站 3D 模型使用 Three.js CDN，初次載入需要網路連線。
