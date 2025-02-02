# Netflix Clone

## Project Netflix Clone step2

当プロジェクトは「Netflix」のクローンコーディングを目的としたプロジェクトです。 APIを利用し、fetchしたデータをレンダーリングすることを練習するために開発しました。 また、パフォーマンス最適化を目的としたリファクタリングを実施しました。

<div align="center">
  <a href="https://react-netfilx-clone.vercel.app/">
    <img src="https://img.shields.io/badge/Vercel(リファクタリング完了）-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>
  </a> <br>
  <a href="https://hyonhyonkor.github.io/react-netfilx-clone/">
    <img src="https://img.shields.io/badge/GitHub Pages(リファクタリング前）-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
  </a>
</div>



## プロジェクト環境 (Project Environment)

### Language & CSS Framework
<div align="left">
    <img src="https://img.shields.io/badge/React 18-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
    <img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>

### Library
<div align="left">
    <img src="https://img.shields.io/badge/React ROUTER DOM V6-CA4245?style=for-the-badge&logo=React-Router&logoColor=white"/>
    <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=React-Query&logoColor=white"/>
    <img src="https://img.shields.io/badge/react icons-EA4C89?style=for-the-badge&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Framer Motion-0055FF?style=for-the-badge&logo=Framer&logoColor=white"/>
</div>


## 実装機能 (Features)

- Netflix UI 再現
- 自動バナー切り替え機能
- 検索機能
- 詳細情報を表示するモーダ

## リファクタリング (Refactoring & Optimization)

### 1. コンポーネントの分離によるコード整理
- `Home.tsx`の複雑なコードを `Banner.tsx`, `ContentSlider.tsx` などに分割し、可読性を向上。

### 2. 不要なリレンダリング削減によるパフォーマンス向上
- `useState` と `useEffect` の管理を `Banner.tsx` 内部で完結させ、`Home.tsx` の不要な再レンダリングを防止。

### 3. モーダルのパフォーマンス最適化
- 高解像度画像ではなく `w1280` の画像を使用し、ローディング遅延を削減。

### 4. ベンチマークによるパフォーマンス測定 & 最適化
- `Chrome DevTools` を活用し、最適化効果を検証。

#### ベンチマーク結果
| 項目                     | リファクタリング前 | リファクタリング後    | 改善効果         |
| ---------------------- | --------- | ------------ | ------------ |
| **INP (インタラクション応答時間)** | 192ms     | **48ms**     | **75% 改善**   |
| **LCP (最大コンテンツ描画時間)**  | 0.19s     | **0.39s**    | (大きな変化なし)    |
| **CLS (累積レイアウトシフト)**   | 0         | 0            | (変化なし)       |
| **メインスレッド実行時間**        | 22,077ms  | **21,153ms** | **約4.2% 削減** |
| **レンダリング時間**           | 1,459ms   | **489ms**    | **66.5% 削減** |
| **スクリプト実行時間**          | 871ms     | **690ms**    | **20.7% 削減** |


### 5. リファクタリングエビデンス

#### フレームドロップ解消
<img width="1273" alt="ver1" src="https://github.com/user-attachments/assets/43fbec86-d552-4844-8273-ea1532d05e74" />

<img width="1276" alt="ver2" src="https://github.com/user-attachments/assets/bca20505-9123-4482-beeb-7eff3d04518c" />

---
#### INP改善
<img width="1274" alt="ver1_2" src="https://github.com/user-attachments/assets/d8893040-71bb-441c-b54e-ce79531277cd" />

<img width="1279" alt="ver2_2" src="https://github.com/user-attachments/assets/fd66f809-4899-4eda-a308-f5756dea7b87" />


## インストール & 実行方法

```sh
# リポジトリをクローン
$ git clone https://github.com/hyonhyonkor/react-netflix-clone.git

# ディレクトリに移動
$ cd react-netflix-clone

# パッケージをインストール
$ npm install

# 開発サーバーを起動
$ npm start
```


