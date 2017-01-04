# flex && key

> **flex-direction**
```css
.box {
  flex-direction: row | row-reverse | column |   column-reverse;
}
```

[image:2BE714F2-68A9-4BA6-8C20-D15104EE4703-266-00001EE64D029DFA/401282B0-0C0C-44ED-A88F-5CA12019799D.png]

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







