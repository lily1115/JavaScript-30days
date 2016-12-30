
## getBoundingClientRect获取元素位置 ## 

getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。getBoundingClientRect是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）。该函数返回一个Object对象，该对象有6个属性：top,lef,right,bottom,width,height；这里的top、left和css中的理解很相似，width、height是元素自身的宽高，但是right，bottom和css中的理解有点不一样。right是指元素右边界距窗口最左边的距离，bottom是指元素下边界距窗口最上面的距离,所以当页面有滚动时，需要加入scroll

```js
//兼容ie低版本，则window.scrollLeft 需要改为document.documentElement.scrollLeft
    var X= this.getBoundingClientRect().left + window.scrollLeft;
    var Y =this.getBoundingClientRect().top + window.scrollTop;
```

getBoundingClientRect()最先是IE的私有属性，现在已经是一个W3C标准。所以你不用当心浏览器兼容问题，不过还是有区别的：IE只返回top,lef,right,bottom四个值，不够可以通过以下方法来获取width,height的值：

```js
    var ro = object.getBoundingClientRect();
    var Width = ro.right - ro.left;
    var Height = ro.bottom - ro.top;
```

**兼容所有浏览器写法：**
```js
    var ro = object.getBoundingClientRect();
    var Top = ro.top;
    var Bottom = ro.bottom;
    var Left = ro.left;
    var Right = ro.right;
    var Width = ro.width||Right - Left;
    var Height = ro.height||Bottom - Top;
```

