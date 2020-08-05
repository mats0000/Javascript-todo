# javascript-test

## JavaScript概要
https://jsprimer.net/

* 第一部
* 第二部のCLIアプリ以外

をすすめる。
作業環境はcodesandboxがおすすめ。
https://codesandbox.io/new-dashboard/home

## 生JavaScriptで簡単なアプリケーションを作る

### 課題に入る前の環境構築
#### yarnのinstall
1. nvmのinstall
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
2. source ~/.nvm/nvm.sh
3. nvm install v14.4.0
4. nvm use v14.4.0
5. npm install -g yarn

#### 実行
1. このリポジトリをfork
2. forkしたリポジトリをclone
3. yarn
4. yarn start
5. localhost:1234で実行環境にアクセス

以降、ファイルを編集しただけで自動的にビルドが走ります。

### 課題
1つできるごとにPRを上げてください。

1. formに文字列を打ち込み、enter keyを押したときに、打ち込んだ文字列がconsole.logにされるようにしてください

2. formに文字列を打ち込み、enter keyを押したときに、formの下に文字列がlistで追加されるようにしてください

3. 現在のtodoの総数が total: 1 のように表示されるようにしてください。

4. 各todoの横へxボタンを配置し、それをclickすると該当のtodoが消えるようにしてください

5. 各todoの横にcheckboxを配置し、checkすると取り消し線が出るようにしてください

6. checkしたtodoの数が、checked: 1のように表示されるようにしてください

7. 今までの仕組みをもとに、リファクタリングをしてください（解説付き）
