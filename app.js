 window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            const dots = document.querySelectorAll('.testimonial-dot');
            let currentIndex = 0;
            
            function showTestimonial(index) {
                testimonialCards.forEach(card => card.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                testimonialCards[index].classList.add('active');
                dots[index].classList.add('active');
                currentIndex = index;
            }
            
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    showTestimonial(index);
                });
            });
            
            setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonialCards.length;
                showTestimonial(currentIndex);
            }, 5000);
            
            const cards = document.querySelectorAll('.feature-card, .pricing-card, .blog-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const angleY = (x - centerX) / 25;
                    const angleX = (centerY - y) / 25;
                    
                    this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                });
            });
        });