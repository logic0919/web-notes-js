window.addEventListener("load", function () {
    var le = this.document.querySelector('.le');
    var ri = this.document.querySelector('.ri');
    var main = this.document.querySelector('.main');
    var mainWidth = main.offsetWidth;
    var ul = this.document.querySelector('ul');
    var arrowl = this.document.querySelectorAll('a')[0];
    var arrowr = this.document.querySelectorAll('a')[1];
    var ol = this.document.querySelector('ol');
    var olli = this.document.querySelector('ol').children;
    var flag = true;//节流阀
    //刚进入页面时有这个定时器 以达到自动播放的功能
    var timer = setInterval(function () {
        arrowr.click();
    }, 2000);
    //动态生成小圆圈ul li
    for (var i = 0; i < olli.length; i++) {
        var li = this.document.createElement('li');
        ul.appendChild(li);
    }
    //复制第一张图，放在最后面
    var clone = olli[0].cloneNode(true);
    ol.appendChild(clone);
    olli[0].style.marginLeft = -40 + 'px';
    var ulli = this.document.querySelector('ul').children;
    //循环对小圆圈注册事件 排他思想 让被点击的小圆圈背景色为白色，其他没有背景色
    for (var i = 0; i < ulli.length; i++) {
        ulli[i].setAttribute('index', i);
        ulli[i].addEventListener('click', function () {
            var index = this.getAttribute('index');
            for (var i = 0; i < ulli.length; i++) {
                ulli[i].className = "";
            }
            this.className = "current";
            animate(ol, -index * mainWidth);
        })
    }
    //刚进入页面时第一个小圆圈背景是白色
    ulli[0].className = "current";
    //进入图片就显示箭头
    main.addEventListener('mouseover', function () {
        le.style.display = 'block';
        ri.style.display = 'block';
        //鼠标进入图片就关闭自动播放功能
        clearInterval(timer);
        timer = null;
    })
    //离开图片就隐藏箭头
    main.addEventListener('mouseout', function () {
        le.style.display = 'none';
        ri.style.display = 'none';
        //鼠标离开图片就开启自动播放功能
        timer = setInterval(function () {
            //手动调用点击事件
            arrowr.click();
        }, 2000);
    })
    //点击右链接自动滚动至下一张
    arrowr.addEventListener('click', function () {
        if(flag==true)
        {
            flag = false;
            var num, circle;
            for (var i = 0; i < ulli.length; i++) {
                //下面这一行也可以写成
                //if (ulli[i].getAttribute("class") == "current")
                if (ulli[i].className == "current") {
                    circle = ulli[i].getAttribute('index');
                }
            }
            num = ++circle;
            if (circle == ulli.length) {
                circle = 0;
            }
            if (circle == 1) {
                ol.style.left = 0;
            }
            for (var i = 0; i < ulli.length; i++) {
                ulli[i].className = "";
            }
            ulli[circle].className = "current";
            animate(ol, -num * mainWidth, function () {
                flag = true;
            });
        }
    })
    //点击右链接自动滚动至上一张
    arrowl.addEventListener('click', function () {
        if(flag==true)
        {
            var num, circle;
            for (var i = 0; i < ulli.length; i++) {
                if (ulli[i].className == "current") {
                    circle = ulli[i].getAttribute('index');
                }
            }
            num = --circle;
            if (circle == -1) {
                circle = ulli.length - 1;
                ol.style.left = -(olli.length - 1) * mainWidth + 'px';
                num = circle;
            }
            for (var i = 0; i < ulli.length; i++) {
                ulli[i].className = "";
            }
            ulli[circle].className = "current";
            animate(ol, -num * mainWidth, function () {
                flag = false;
            });
        }
    })
})