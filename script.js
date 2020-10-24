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


