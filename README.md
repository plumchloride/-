# ことのはたんご
単語推理ゲーム「ことのはたんご」
リンク ()

本アプリケーションは営利目的での展開はしていません。
著者によるリンク先でのアクセスログの取得や広告の掲示は行っていません。


Josh Wardle([twitter](https://twitter.com/powerlanguish))さんが作製したフリーウェブアプリである「[Wordle](https://www.powerlanguage.co.uk/wordle/)」より多大な影響を受け作成しました。
いわゆるWordleの日本語版です。

# ゲーム説明

　「HIT & BLOW (マスターマインド)」や「ヌメロン」といったゲームを初めとした推理ゲームの単語版です。

　本アプリが定めた5文字の単語をプレイヤーが5文字の単語を入力して当てるゲームです。

　5文字をそれぞれ分割し、「入力した文字が使用されており位置が同じ」「使用されているが位置は違う」の2点の評価を行い、行った評価をもとに各文字に対してハイライト表示を行います。

　そのハイライト表示をヒントに同試行を複数回（未定）繰り返しアプリが定めた5文字の単語を当てましょう。

# ライセンス

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス</a>の下に提供されています。  
この作品はくわえて、BSDライセンスの下に提供されています。

また本アプリケーションは次の著作者によるソフトウェアを使用しています：The UniDic Consortium「UniDic-manyo_1603」 [https://ccd.ninjal.ac.jp/unidic/]  
「UniDic-manyo_1603」はBSDライセンスおよびクリエイティブ・コモンズ 表示-非営利-継承4.0 非移植(CC BY-NC-SA 4.0)のもと提供されています。


# ファイル
余裕があったら更新
GitHub/  
　├ filtering/  
　│　└ tango_filter.ipynb 単語辞書を作る際に利用したフィルター用コード  
　├ Web/  
　│　├ public/  
　│　│　├ data/  
　│　│　│　├ A_data.csv 単語が実在するかのチェック用データ  
　│　│　│　└ Q_data.csv 問題に利用する単語のデータ  
　│　│　└test.html  
　│　└src/  
　├ .gitignore  
　├ COPYING 著作権表示等  
　├ LICENSE BSDライセンス  
　└ README.md  