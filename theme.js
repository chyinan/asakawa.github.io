document.addEventListener('DOMContentLoaded', function() {
    let style = document.createElement("style");
    style.innerHTML = `
        /* 背景图片 */
        html {
            background-image: url('https://i1.hdslb.com/bfs/archive/ab5a393bb7f5c8dee2c3a3db54dfff4c4d56540b.jpg') no-repeat center center fixed;
            background-size: cover;
        }
        
        /* 主体布局 - 为了让内容更易读 */
        body {
            margin: 30px auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.8); /* 白色背景，透明度80% */
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
    `;
    document.head.appendChild(style);
}); 
