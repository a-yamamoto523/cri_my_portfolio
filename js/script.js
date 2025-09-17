//文字　→ ””
//数字　→ そのまま書く
console.log("こんにちは");
console.log(123);
console.log("123");
console.log(123 + 456);

//要素を取得する
document.getElementById('header');

//変数を用意
const kinnnikun = document.getElementById('header');
//変数を出力
console.log(kinnnikun);


const apple = "りんご";
console.log(apple);

const mikan = 123 + 456;
console.log(mikan);

//クラスを一つだけ取得する
const navigationItem =document.querySelectorAll('.navigationItem'); 
console.log(navigationItem[4]);

//element.textContent = 'こんにちは';    // テキストだけ変える
//element.innerHTML = '<b>強調</b>';    // HTMLも含めて変更



// element.addEventListener('click', () => {
//   // クリックされたときの処理
// });


//予約ボタンをクリックする→温泉がヤーになる
//予約ボタンを取得→クリックイベントを用意する

const reservationButton = document.querySelector('.reservationButton');
console.log(reservationButton);
reservationButton.addEventListener('click', () => {
    navigationItem[4].textContent = "ヤー";
  // クリックされたときの処理
});

//空室カレンダーをクリックする→交通がニャーになる
//空室カレンダーを取得→クリックイベントを用意する


const calenderButton = document.querySelector('.calenderButton');
const mainHeading = document.querySelector('.contentsBox01Text01');
const image =document.querySelector('.test');
image.getAttribute('src');

let isBeforeState = true;

calenderButton.addEventListener('click', () => {

   mainHeading.classList.toggle('active');

  if (isBeforeState) {
        // 現在が「変更前」の状態なら「変更後」に切り替える
          navigationItem[5].textContent = "ニャー";
          navigationItem[4].style.color = 'red';
          navigationItem[2].style.display = 'none';
          image.setAttribute('src', '../img/food 1.jpg');    // 属性を変更
          } else {
          // 現在が「変更後」の状態なら「変更前」に切り替える
          navigationItem[5].textContent = '交通';
          navigationItem[4].style.color = '#fff';
          navigationItem[2].style.display = 'block';
          image.setAttribute('src', '../img/main_img01 1.jpg');    // 属性を変更
        
    }

     isBeforeState = !isBeforeState; 
    
  
});









// element.classList.add('active');       // クラスを追加(→CSS追加)
// element.classList.remove('hidden');    // クラスを削除
// element.classList.toggle('open');      // ある/なしを切り替え
// element.classList.contains('done');    // 含んでいるかチェック（true/false）


// imageTextBox01,02をクリック→モーダルを表示
// モーダルはHTMLで準備？
// HTMLでモーダル準備→cssでdisplay:none→取得/imageTextBox01,02にクリックイベントを用意→クラスを追加または削除み
// Jsでモーダルのバツマーク取得、クリックイベント

// popup01

const popup01 =document.querySelector('.popup01'); 
const modal01 =document.querySelector('.modal01'); 
const body =document.getElementById('body');
const button01 =document.querySelectorAll('.button01'); 


popup01.addEventListener('click', () => {
    modal01.classList.add('active'); 
    body.classList.add('active');
  // クリックされたときの処理
});


const popup02 =document.querySelector('.popup02'); 
const modal02 =document.querySelector('.modal02'); 


popup02.addEventListener('click', () => {
    modal02.classList.add('active'); 
    body.classList.add('active');
  // クリックされたときの処理
});

const closeBtn = document.querySelectorAll('.closeBtn');


closeBtn[0].addEventListener('click', () => {
    modal01.classList.remove('active');
    body.classList.remove('active');
  // クリックされたときの処理
});

closeBtn[1].addEventListener('click', () => {
    modal02.classList.remove('active');
    body.classList.remove('active');
  // クリックされたときの処理
});

button01[1].addEventListener('click', () => {
    modal01.classList.add('active'); 
    body.classList.add('active');
  // クリックされたときの処理
});


button01[2].addEventListener('click', () => {
    modal02.classList.add('active'); 
    body.classList.add('active');
  // クリックされたときの処理
});










