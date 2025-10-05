document.addEventListener('DOMContentLoaded', () => {

    const {
        basic_info,
        about,
        skills,
        experience,
        projects
    } = portfolioData;

    const spaceEmojis = ['🪐', '🚀', '🧑‍🚀', '✨', '☄️', '🌟'];


    // --- POPULATE HTML SECTIONS ---

    // Populate Header
    const subtext = document.querySelector('.animated-subtext');
    let titleIndex = 0;
    
    // Set the first title immediately
    subtext.textContent = basic_info.titles[titleIndex];
    titleIndex = (titleIndex + 1) % basic_info.titles.length;

    // Start cycling through the rest after a delay
    setInterval(() => {
        const title = basic_info.titles[titleIndex];
        const timeline = gsap.timeline();
        timeline.to(subtext, { opacity: 0, y: -10, duration: 0.4, ease: 'power2.in' })
                .call(() => subtext.textContent = title)
                .to(subtext, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
        titleIndex = (titleIndex + 1) % basic_info.titles.length;
    }, 2500); // Faster cycle

    // Populate About
    document.getElementById('about-description').textContent = about.description;
    document.getElementById('profile-pic').src = basic_info.image;

    // Populate Experience Timeline
    const timelineContainer = document.getElementById('experience-timeline');
    experience.forEach((item, index) => {
        const direction = index % 2 === 0 ? 'left' : 'right';
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${direction}`;
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <h4>${item.company} | ${item.years}</h4>
                <div class="timeline-tags">
                    ${item.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // Populate Projects Grid
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p class="tech-list">${project.technologies.map(t => t.name).join(', ')}</p>
            </div>
        `;
        projectCard.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(projectCard);
    });

    // Populate Skills Grid
    const skillsGrid = document.getElementById('skills-grid');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <i class="${skill.class}"></i>
            <p>${skill.name}</p>
        `;
        skillsGrid.appendChild(skillItem);
    });

    // Populate Footer Social Links
    const socialLinksContainer = document.getElementById('social-links');
    basic_info.social.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<i class="${social.class}"></i>`;
        socialLinksContainer.appendChild(link);
    });

    // --- MODAL LOGIC ---
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.modal-close-btn');

    function openModal(project) {
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        
        const modalUrl = document.getElementById('modal-url');
        if (project.url) {
            modalUrl.href = project.url;
            modalUrl.style.display = 'inline-block';
        } else {
            modalUrl.style.display = 'none';
        }
        
        const imageContainer = document.querySelector('.modal-images');
        imageContainer.innerHTML = project.images.map(img => `<img src="${img}" alt="${project.title} screenshot">`).join('');
        
        const techContainer = document.getElementById('modal-tech-list');
        techContainer.innerHTML = project.technologies.map(tech => `<span>${tech.name}</span>`).join('');

        gsap.to(modal, { autoAlpha: 1, duration: 0.3 });
        gsap.from('.modal-content', { y: -50, opacity: 0, duration: 0.3 });
    }

    function closeModal() {
        gsap.to(modal, { autoAlpha: 0, duration: 0.3 });
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- GSAP ANIMATIONS ---
    gsap.registerPlugin(ScrollTrigger);
    
    // Text Scramble Effect Class
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="scramble-char">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }


    // Header text animation - UPDATED LOGIC
    const heading = document.querySelector('.animated-text');
    const text = heading.textContent;
    heading.innerHTML = text.split(' ').map(word => 
        `<span class="word">${word.split('').map(char => 
            `<span class="letter">${char}</span>`
        ).join('')}</span>`
    ).join(' ');

    gsap.from(".letter", {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.05, ease: "power2.out"
    });
    
    // Nav bar visibility on scroll
    ScrollTrigger.create({
        start: 'top top-=' + (window.innerHeight - 80),
        onEnter: () => document.querySelector('.main-nav').classList.add('visible'),
        onLeaveBack: () => document.querySelector('.main-nav').classList.remove('visible')
    });
    
    // Animate sections and titles on scroll
    gsap.utils.toArray('.content-section').forEach(section => {
        const title = section.querySelector('.section-title');
        const fx = new TextScramble(title);

        gsap.fromTo(section, 
            { autoAlpha: 0, y: 50 },
            {
                autoAlpha: 1, y: 0, duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    onEnter: () => {
                        if(title) fx.setText(title.textContent);
                    }
                }
            }
        );
    });

    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach(item => {
        const direction = item.classList.contains('left') ? -1 : 1;
        gsap.from(item.querySelector('.timeline-content'), {
            x: 100 * direction,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    /* js/main.js */

    // --- PARTICLE BACKGROUND ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    let particlesArray;
    const numParticles = 200; // Reduced particle count for a cleaner look
    const chanceOfSpecial = 0.015; // 1.5% chance for a particle to be a spaceship
    const specialEmojis = ['🚀', '🛰️', '🛸', '☄️', '🪐', '👽', '🧑‍🚀'];

    function setupCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setupCanvas();

    class Particle {
        constructor() {
            // Decide if the particle is special or a star
            this.isSpecial = Math.random() < chanceOfSpecial;

            if (this.isSpecial) {
                this.initSpecial();
            } else {
                this.initStar();
            }
        }

        // --- Star Methods ---
        initStar() {
            const speedFactor = 150; // Larger number = slower expansion
            this.depth = 3; // Increased depth for more parallax
            this.x = (Math.random() - 0.5) * canvas.width * 0.5; // Start closer to center
            this.y = (Math.random() - 0.5) * canvas.height * 0.5;
            this.z = Math.random() * this.depth;
            this.update = () => {
                // Move radially from the center, faster when closer (higher z)
                this.x += this.x / (this.z * speedFactor);
                this.y += this.y / (this.z * speedFactor);

                // Reset if it goes way off-screen
                if (this.x < -canvas.width / 1.5 || this.x > canvas.width / 1.5 ||
                    this.y < -canvas.height / 1.5 || this.y > canvas.height / 1.5) {
                    this.initStar();
                }
            };
            this.draw = () => {
                const radius = (1 - this.z / this.depth) * 1.5;
                const alpha = (1 - this.z / this.depth);
                ctx.beginPath();
                ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`;
                ctx.fill();
            };
        }

        // --- Special Particle Methods ---
        initSpecial() {
            const speed = Math.random() * 1.5 + 1.5; // Slightly slower speed
            this.emoji = specialEmojis[Math.floor(Math.random() * specialEmojis.length)];
            
            // Randomly choose an edge to spawn from (0:right, 1:left, 2:bottom, 3:top)
            const side = Math.floor(Math.random() * 4);

            if (side === 0) { // From right
                this.x = canvas.width / 2 + 50;
                this.y = (Math.random() - 0.5) * canvas.height;
                this.vx = -speed; this.vy = 0;
            } else if (side === 1) { // From left
                this.x = -canvas.width / 2 - 50;
                this.y = (Math.random() - 0.5) * canvas.height;
                this.vx = speed; this.vy = 0;
            } else if (side === 2) { // From bottom
                this.x = (Math.random() - 0.5) * canvas.width;
                this.y = canvas.height / 2 + 50;
                this.vx = 0; this.vy = -speed;
            } else { // From top
                this.x = (Math.random() - 0.5) * canvas.width;
                this.y = -canvas.height / 2 - 50;
                this.vx = 0; this.vy = speed;
            }

            this.update = () => {
                this.x += this.vx;
                this.y += this.vy;
                // Reset if it flies too far off-screen
                if (this.x < -canvas.width || this.x > canvas.width ||
                    this.y < -canvas.height || this.y > canvas.height) {
                    this.initSpecial();
                }
            };
            this.draw = () => {
                ctx.globalAlpha = 1;
                ctx.font = '30px Arial';
                ctx.fillText(this.emoji, this.x, this.y);
            };
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < numParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.fillStyle = 'rgba(18, 18, 18, 0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(centerX, centerY);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        ctx.restore();
        requestAnimationFrame(animateParticles);
    }

    init();
    animateParticles();

    window.addEventListener('resize', () => {
        setupCanvas();
        init();
    });
});