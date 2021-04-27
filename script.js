// ------時刻表示---------

// スタートからフィニッシュの時間を秒数で表示
const setSec = 3;
document.querySelector('#setSec').innerHTML = setSec;


// DOM Content Loadedした時刻(1970/1/1/0/00からの経過ms表記)を表示
const startTime = Date.now();
//startTimeを秒数表示(msを1000で割り、小数点切り上げ)
const startSec = Math.ceil(startTime / 1000);

// 現在時刻の表示をしたいが以下のコードだと、読みにくい。。
// const startTimesOfDay = new Date();
// ->Tue Apr 27 2021 14:53:33 GMT+0900 (日本標準時)


// 時刻表記のメソッドを定義
function timeDescript(time,element) {
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let TimesOfDay = year + "年" + month + "月" + date + "日 " + hour + "時" + minute + "分" + second + "秒";
    element.innerHTML = TimesOfDay;
}


// 開始時刻を記述
let now = new Date();
const startTimesOfDay = document.getElementById('startTimesOfDay');
timeDescript(now,startTimesOfDay);

// 終了時刻を記述
// nowオブジェクトにsetSecを加算した時刻を代入。
now.setSeconds(now.getSeconds() + setSec);
const endTimesOfDay = document.getElementById('endTimesOfDay');
timeDescript(now,endTimesOfDay);




// ------カウントダウンタイマー---------
// 繰り返し処理→ setInterval(fn,繰り返し時間の指定(ms))
// 今回は繰り返し時間指定なし、つまり絶え間なく繰り返している。
const timeId = setInterval(() => {
    // 絶え間なく現在時刻の取得 →　常に今の時刻を表示（startTimeとの違いに注意。）
    const currentTime = Date.now();
    // 秒数表記に
    const currentSec = Math.ceil(currentTime / 1000);

    // 経過時間（現在時刻とstart時刻との差）をとる。
    const progressSec = currentSec - startSec;
    // 残り時間（経過時間と設定時間との差）をとる。
    const remainSec = setSec - progressSec;

    let text;
    if (remainSec <= 0) {
        clearInterval(timeId);
        text = "終了！"
    }else{
        text = "残り" + remainSec + "秒！";
    }

    // innerHTML で記述を変更
    // innerHTML に値を設定すると、要素のすべての子孫を削除して、 
    // 代入された文字列で与えられた HTML を解析して構築されたノードに置き換えます。
    document.querySelector('#timer').innerHTML = text;
}, 100)