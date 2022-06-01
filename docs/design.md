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
tweet, reply共にtweetsテーブルに入れる \
読み込みはtimelinesとconversationthreads, 書き込みはtweetsとusersにする \
tweetが作成された時dynamodb streamとlambdaでtimelines or conversationthreadsにitem作成する
