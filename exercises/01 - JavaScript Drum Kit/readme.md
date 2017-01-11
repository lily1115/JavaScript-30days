# flex && key <kdd>

涉及知识点：
- <kdd>标签 用于表示用户输入的标签 MDN-kdd
- <audio>音频播放标签
- 1vh 等于1/100的视口高度。

> <kdd>标签 用于表示用户输入的标签 MDN-kdd
> 默认是行内元素，以monospacing



> **flex-direction**
```css
.box {
  flex-direction: row | row-reverse | column |   column-reverse;
}
```

> **flex-wrap **
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
*nowrap：*不换行，缩小自身宽度来适应页面宽度
*wrap：*换行,第一行在上方
*wrap-reverse:* 换行,第一行在下方

> **flex-flow**
属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

> **flex-content**
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

> **align-items**
`align-items`属性定义项目在交叉轴上如何对齐。
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

> **align-content**
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
> **获取key值**
```js
window.addEventListener('keyup', (e) => {
    console.log(e.key)
})

```







