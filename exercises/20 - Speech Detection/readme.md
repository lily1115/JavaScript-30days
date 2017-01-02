# JavaScript Speech Recognition
 #前端/javascript-30

### 该API支持11个事件

```js
[
 ‘onaudiostart’,
 ‘onaudioend’,
 ‘onend’,
 ‘onerror’,
 ‘onnomatch’,
 ‘onresult’,
 ‘onsoundstart’,
 ‘onsoundend',
 'onspeechstart',
 'onspeechend',
 'onstart'
].forEach(function(eventName) {
    recognition[eventName] = function(e) {
        console.log(eventName, e);
    };
});
```

**example**
```js

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if(SpeechRecognition){
var recognition = new (SpeechRecognition || webkitSpeechRecognition || mozSpeechRecognition || mozSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 5;
recognition.start();
//maxAlternatives属性等于5，表示最多返回5个语音匹配结果。
}
recognition.onresult = function(event) {
var topResult = event.results[0][0]
    if (topResult.confidence > 0.5) {
       console.log('You said:',topResult.transcript);
    } else {
      console.log("Try again please...");
    }
   
};
```


result事件回调函数的参数，是一个SpeechRecognitionEvent对象。它的results属性就是语音匹配的结果，是一个数组，按照匹配度排序，最匹配的结果排在第一位。该数组的每一个成员是SpeechRecognitionResult对象，该对象的transcript属性是实际匹配的文本，confidence属性是可信度（在0与1之间）。


