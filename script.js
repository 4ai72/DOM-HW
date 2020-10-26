// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
var messageSpan = document.getElementById('q1-text')
console.log(messageSpan.textContent)


// Q 2
var messageSpan = document.getElementById('q2-text')
messageSpan.textContent = '你好，我是冲绳人！'



// Q 3
var messageSpan = document.getElementById('q3-text')
messageSpan.style.color = 'orange'


// Q 4 (難)
// 「for of」を使います。
var messageSpan = document.getElementsByClassName('q4-text')
console.log(messageSpan)
for (var i = 0;i < messageSpan.length;i++)
	{
		messageSpan[i].style.color = 'blue'
	}


// Q 5
var messageSpan = document.getElementsByClassName('q5-text')
console.log(messageSpan)
for (var i = 0;i < messageSpan.length;i++)
	{
		messageSpan[i].style.backgroundColor = 'yellow'
	}



/*ボタンで動くやり方

HTMLのbutton部分に
<button id=#btn-test" onclick

を書く。以下、CSS

function answer(){
	Q1
	var q1_text = document.querySelector("#q1-text");
	console.log(q1_text.textContent);

		Q2
	var q2_text = document.querySelector("#q2-text");
	q2_text.textContent="こんにちは";

	Q3
	var q3_text = document.querySelector("#q3-text");
	q3_text.style.color="blue";

	Q4
	var q4_text = document.querySelectorAll('.q4-text');
	console.log(q4_text);


for ofを使った方法
配列の数がいくつか意識せずに繰り返し処理を行える方法
新しく作った変数q4に、繰り返してる間、要素をひとつずつ代入する

for (let q4 of q4_text){
	console.log(q4);  ←これは描いても書かなくても良い　書くとわかりやすい
	q4.style.color = 'blue';
}

Q5
var q5_text = document.querySelectorAll('.q5-text');
for let q5 of q5_text

}





















