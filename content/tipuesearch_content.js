var tipuesearch = {"pages": [{'title': 'About', 'text': '41023141姜連安 \n 倉儲: https://github.com/mdecp2023/site-41023141 \n 網站:\xa0 https://mdecp2023.github.io/site-41023141/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'git指令', 'text': 'git init \xa0 將目前的目錄初始化為 Git 目錄, 建立本地儲存庫 git config \xa0 設定或檢視 Git 設定檔資訊 git add \xa0 將檔案加入 Git 暫存區 git rm \xa0 將檔案移出 Git 暫存區 git status \xa0 顯示 Git 狀態 git commit \xa0 將暫存區的檔案提交至儲存庫納入版本控制 git log \xa0 顯示過去歷次的版本異動 git reflog \xa0 顯示完整的版本異動歷史紀錄 git show \xa0 顯示指定版本的異動內容 git branch \xa0 建立一個新分支 (branch) git checkout \xa0 取出分支內容還原為工作目錄 git merge \xa0 合併分支 git reset \xa0 重設某一版本 git clone \xa0 從遠端儲存庫 (GitHub 或 Bitbucket) 複製副本至本地儲存庫 git push \xa0 將本地儲存庫內容推送到遠端儲存庫 git pull \xa0 將遠端儲存庫拉回合併更新到本地儲存庫 \n \n', 'tags': '', 'url': 'git指令.html'}, {'title': 'git push', 'text': '1.如果你要將更新推送至遠端,首先必須要有使用者名稱和信箱 \n \xa0你可以在命令列上輸入: \n \xa0 git config --global user.email "you@example.com" \n \xa0 git config --global user.name "Your Name" \n 如果輸入成功你應該會在home_ipv4或6(看你用什麼開)裡找到叫.gitconfig的檔案 \n 你的使用者名稱和信箱就存在裡面 \n 2.你必須要有 token 或者 ssh (我在其他頁面有講) \n \n 3.最後你可以用 acp " *** " 指令推送( *** 是你本次版本更新的名稱(內容)) \n \n', 'tags': '', 'url': 'git push.html'}, {'title': 'tokens', 'text': '1.github頭象下的Setting->Developer settings->Personal access tokens \n 2.按Generate new token生成一把token( repo記得打勾) \n 3.將生成的那串密碼貼在.git裡的config裡的url = \xa0 http://*@github.com..... \xa0 \n *的地方(,記得後面加@) \n \xa0 \n', 'tags': '', 'url': 'tokens.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};