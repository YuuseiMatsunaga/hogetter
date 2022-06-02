## First Requirement
* user login
* tweet
* reply

## Base Design
userがログイン, 認証できるようにする \
ツイートの作成ができる \
フォーローしている人の投稿がタイムラインが表示される \
ツイートにリプライができる \
プロフィール画面でユーザーの編集と自分の投稿一覧が見れる

## Detail Design

### create tweet
tweet, reply共にtweetsテーブルに入れる \
tweetが作成された時フォロワーの数timelinesにpushする

### timeline
timelineを表示させる際timelinesを取り出してtweetをアタッチしてクライアントに返す

### conversationthreads
timelineと同じ
conversationthredsを取り出してtweetをアタッチする
