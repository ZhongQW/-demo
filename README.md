## 🙆关于几种跨域的方式的优缺点分析

### 1.`CORS`

- 简单请求：

  - `GET`
  - `POST`
  - `HEAD`
  - `Content-Type`的值仅限于下列三者之一：
    - `text/plain`
    - `multipart/form-data`
    - `application/x-www-form-urlencoded`

- 复杂请求：

  - `PUT`
  - `COntent-type`不属于以上三种

  [戳这里看MDN详解](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

> 简单请求并不会触发`CORS`的预检请求，复杂请求的`CORS`请求，会在正式通信之前，增加一次`HTTP`查询请求，称为"预检"请求,该请求是 `option` 方法的，通过该请求来知道服务端是否允许跨域请求。

前端满足复杂请求的条件，后端作一定的配置处理，具体可以查看github的代码

### 2.`document.domain`

> 该方式只能用于二级域名相同的情况下，比如 http://a.test.com 和 http://b.test.com 适用于该方式。
> 只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域。

### 3.`jsonp`

> 利用 <script> 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP请求一定需要对方的服务器做支持才可以.

**优点**：简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。

**缺点**：是仅支持get方法具有局限性,不安全可能会遭受XSS攻击。

### 4.`nginx`

> 实现原理类似于Node中间件代理，需要你搭建一个中转nginx服务器，用于转发请求。
>
> 使用nginx反向代理实现跨域，是最简单的跨域方式。只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能。

### 5.`postMessage`

> 允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。

### 6.`websocket`

> Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket和HTTP都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。

### 7.`window.name+ifream`

> 其中a.html和b.html是同域的，都是`http://localhost:3000`;而c.html是`http://localhost:4000`

