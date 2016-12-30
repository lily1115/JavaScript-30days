# Geolocation API—21

## navigator.geolocation有2个方法 ##
*getCurrentPosition()*会触发用户共享地理定位信息的对话框
*watchPosition()*跟踪用户的位置,取消监控可用clearWatch()，与setTimeout()和clearTimeout()类似

### watchPosition() ###
```js
var watchId = navigator.geolocation.getCurrentPosition((position) => {
      drawMapCenteredAt(positon.coords.latitude, position.coords.longtitude)
    },
    (err) => {console.error(err)}
    )
    clearWatch(watchId)
```

### getCurrentPosition() ###

```js
//绘制用户当前位置
navigator.geolocation.getCurrentPosition((position) => {
    drawMapCenteredAt(positon.coords.latitude, position.coords.longtitude)
},
(err) => {console.error(err)}
,{
enableHighAccuracy: true,//默认为false，表示尽可能最准确的位置信息，为true时，会消耗更多的电量
timeout: 5000,//以毫秒数表示的等待位置信息的最长时间
maxinmumAge: 25000//表示上一次取得的坐标信息的有效时间，毫秒表示，如果时间到则重新取得新坐标信息，设为Infinity则始终使用上一次的坐标信息
}
)

```




