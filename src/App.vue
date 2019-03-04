<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding: 0;
  margin: 0;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
body,
html {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 去掉列表前的标识，li 会继承 */
ol,
ul {
  list-style: none;
}
/* 统一上标和下标 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
/* 对齐是排版最重要的因素，别让什么都居中 */
caption,
th {
  text-align: left;
}
/* 让链接在 hover 状态下显示下划线 */
a:hover {
  text-decoration: underline;
}
/* 默认不显示下划线，保持页面简洁 */
ins,
a {
  text-decoration: none;
}
/* 去除 ie6 & ie7 焦点点状线 */
a:focus,
*:focus {
  outline: none;
}
/* 清除浮动 */
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
.clearfix {
  zoom: 1; /* for ie6 & ie7 */
}
.clear {
  clear: both;
  display: block;
  font-size: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
}
/* 设置显示和隐藏，通常用来与 js 配合 */
.hide {
  display: none;
}
.block {
  display: block;
}
/* 设置浮动，减少浮动带来的 bug */
.fl,
.fr {
  display: inline;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>
