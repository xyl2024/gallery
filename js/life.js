document.addEventListener('DOMContentLoaded', function() {
    const photoGrid = document.getElementById('photoGrid');
    
    // 示例照片数据
    const photos = [
        { title: '春日樱花', desc: '公园里盛开的樱花，春天的气息扑面而来' },
        { title: '家常美食', desc: '亲手制作的美味料理，满满的家的味道' },
        { title: '朋友聚会', desc: '和好朋友们一起度过的快乐时光' },
        { title: '旅行风景', desc: '路途中遇见的美丽风景，值得珍藏的回忆' }
    ];
    
    // 动态生成照片卡片
    photos.forEach((photo, index) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.innerHTML = `
            <div class="photo-placeholder">📸</div>
            <div class="photo-info">
                <h3 class="photo-title">${photo.title}</h3>
                <p class="photo-desc">${photo.desc}</p>
            </div>
        `;
        photoCard.style.animationDelay = `${index * 0.2}s`;
        photoGrid.appendChild(photoCard);
    });
    
    // 添加加载动画
    const style = document.createElement('style');
    style.textContent = `
        .photo-card {
            animation: fadeInUp 0.6s ease-out both;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});