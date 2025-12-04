// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 渲染视频卡片
    renderVideoCards();
    
    // 绑定侧边栏切换事件
    bindSidebarToggle();
    
    // 添加导航菜单点击事件
    bindNavMenuEvents();
});

// 视频数据模拟
const videoData = [
    {
        id: 1,
        thumbnail: 'https://picsum.photos/300/200?random=1',
        duration: '12:34',
        title: '【原创】这是一段非常有趣的视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '12.5万',
        likes: '1.2万'
    },
    {
        id: 2,
        thumbnail: 'https://picsum.photos/300/200?random=2',
        duration: '08:45',
        title: '【MV】这是一段音乐视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '8.7万',
        likes: '9000'
    },
    {
        id: 3,
        thumbnail: 'https://picsum.photos/300/200?random=3',
        duration: '25:12',
        title: '【教程】这是一段教学视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '15.2万',
        likes: '2.1万'
    },
    {
        id: 4,
        thumbnail: 'https://picsum.photos/300/200?random=4',
        duration: '17:33',
        title: '【搞笑】这是一段搞笑视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '32.1万',
        likes: '3.5万'
    },
    {
        id: 5,
        thumbnail: 'https://picsum.photos/300/200?random=5',
        duration: '09:22',
        title: '【音乐】这是一段音乐表演视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '6.4万',
        likes: '7500'
    },
    {
        id: 6,
        thumbnail: 'https://picsum.photos/300/200?random=6',
        duration: '14:56',
        title: '【游戏】这是一段游戏实况视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '18.9万',
        likes: '1.8万'
    },
    {
        id: 7,
        thumbnail: 'https://picsum.photos/300/200?random=7',
        duration: '22:18',
        title: '【动漫】这是一段动漫剪辑视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '25.7万',
        likes: '2.9万'
    },
    {
        id: 8,
        thumbnail: 'https://picsum.photos/300/200?random=8',
        duration: '11:05',
        title: '【生活】这是一段生活分享视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '9.3万',
        likes: '1.1万'
    },
    {
        id: 9,
        thumbnail: 'https://picsum.photos/300/200?random=9',
        duration: '19:42',
        title: '【科技】这是一段科技评测视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '14.8万',
        likes: '1.6万'
    },
    {
        id: 10,
        thumbnail: 'https://picsum.photos/300/200?random=10',
        duration: '07:29',
        title: '【美食】这是一段美食制作视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '11.5万',
        likes: '1.3万'
    },
    {
        id: 11,
        thumbnail: 'https://picsum.photos/300/200?random=11',
        duration: '16:37',
        title: '【旅行】这是一段旅行记录视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '20.4万',
        likes: '2.4万'
    },
    {
        id: 12,
        thumbnail: 'https://picsum.photos/300/200?random=12',
        duration: '13:51',
        title: '【健身】这是一段健身指导视频标题示例',
        desc: '这里是视频的简短描述信息，介绍视频的主要内容和亮点',
        views: '7.8万',
        likes: '8500'
    }
];

// 渲染视频卡片函数
function renderVideoCards() {
    const videoGrid = document.getElementById('videoGrid');
    
    // 清空现有内容
    videoGrid.innerHTML = '';
    
    // 遍历视频数据并创建卡片
    videoData.forEach((video, index) => {
        // 创建延迟以显示淡入动画效果
        setTimeout(() => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <span class="video-duration">${video.duration}</span>
                </div>
                <div class="video-info">
                    <div class="video-title">${video.title}</div>
                    <div class="video-desc">${video.desc}</div>
                    <div class="video-stats">
                        <span>播放：${video.views}</span>
                        <span>点赞：${video.likes}</span>
                    </div>
                </div>
            `;
            
            videoGrid.appendChild(videoCard);
        }, index * 100); // 每个卡片间隔100ms添加，形成连续淡入效果
    });
}

// 绑定侧边栏切换事件
function bindSidebarToggle() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
}

// 绑定导航菜单点击事件
function bindNavMenuEvents() {
    // 主导航菜单
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            mainNavLinks.forEach(item => item.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
        });
    });
    
    // 侧边栏菜单
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            sidebarLinks.forEach(item => item.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
        });
    });
}

// 搜索功能
document.querySelector('.search-btn')?.addEventListener('click', function() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput && searchInput.value.trim() !== '') {
        alert(`搜索功能已触发，关键词：${searchInput.value}`);
        // 实际项目中这里会跳转到搜索结果页面
    }
});

// 登录按钮事件
document.querySelector('.login-btn')?.addEventListener('click', function() {
    alert('登录功能已触发');
    // 实际项目中这里会弹出登录窗口或跳转到登录页面
});

// 注册按钮事件
document.querySelector('.register-btn')?.addEventListener('click', function() {
    alert('注册功能已触发');
    // 实际项目中这里会弹出注册窗口或跳转到注册页面
});