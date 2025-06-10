document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    const cards = document.querySelectorAll('.nav-card');
    const title = document.querySelector('.title-text');
    const subtitle = document.querySelector('.subtitle');

    // 标题打字机效果
    function typeWriter(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // 卡片入场动画
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }

    // 滚动提示点击事件
    const scrollHint = document.querySelector('.scroll-hint');
    scrollHint.addEventListener('click', () => {
        document.querySelector('.gallery-nav').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // 卡片悬停音效（可选）
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 这里可以添加音效
            card.style.transform = 'translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // 页面滚动视差效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        document.querySelector('.stars').style.transform = `translateY(${rate}px)`;
        document.querySelector('.stars2').style.transform = `translateY(${rate * 0.8}px)`;
        document.querySelector('.stars3').style.transform = `translateY(${rate * 1.2}px)`;
    });

    // 初始化动画
    setTimeout(() => {
        const originalText = title.textContent;
        typeWriter(title, originalText, 80);
    }, 500);

    setTimeout(animateCards, 1500);

    // 添加随机闪烁星星效果
    function createTwinklingStar() {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.background = '#fff';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = '0';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '5';
        
        document.body.appendChild(star);
        
        // 闪烁动画
        star.animate([
            { opacity: 0 },
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 1000,
            easing: 'ease-in-out'
        }).addEventListener('finish', () => {
            star.remove();
        });
    }

    // 定期创建闪烁星星
    setInterval(createTwinklingStar, 800);
});