// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar background on scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });
    }
});

// Upload demo functionality
document.addEventListener('DOMContentLoaded', function() {
    const uploadDemo = document.getElementById('uploadDemo');
    const fileInput = document.getElementById('fileInput');
    
    if (uploadDemo && fileInput) {
        // Click to upload
        uploadDemo.addEventListener('click', function() {
            fileInput.click();
        });
        
        // Drag and drop events
        uploadDemo.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadDemo.style.borderColor = '#3b82f6';
            uploadDemo.style.background = '#f1f5f9';
        });
        
        uploadDemo.addEventListener('dragleave', function(e) {
            e.preventDefault();
            uploadDemo.style.borderColor = '#cbd5e1';
            uploadDemo.style.background = '#f8fafc';
        });
        
        uploadDemo.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadDemo.style.borderColor = '#cbd5e1';
            uploadDemo.style.background = '#f8fafc';
            
            const files = e.dataTransfer.files;
            handleFileUpload(files);
        });
        
        // File input change
        fileInput.addEventListener('change', function(e) {
            const files = e.target.files;
            handleFileUpload(files);
        });
        
        function handleFileUpload(files) {
            if (files.length > 0) {
                const uploadText = uploadDemo.querySelector('.upload-text p');
                if (uploadText) {
                    uploadText.innerHTML = `<strong>Selected ${files.length} file(s)</strong>`;
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        uploadText.innerHTML = '<strong>Drag files here or click to select</strong>';
                    }, 3000);
                }
                
                // Simulate upload animation
                showUploadAnimation();
            }
        }
        
        function showUploadAnimation() {
            const uploadIcon = uploadDemo.querySelector('.upload-icon');
            if (uploadIcon) {
                uploadIcon.style.transform = 'scale(1.2)';
                uploadIcon.style.transition = 'transform 0.3s ease';
                
                setTimeout(() => {
                    uploadIcon.style.transform = 'scale(1)';
                }, 300);
            }
        }
    }
});

// Code copy functionality
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code, .code-block code, .command code');
    
    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.closest('pre') || codeBlock.closest('.code-block') || codeBlock.closest('.command');
        if (pre) {
            // Add copy button
            const copyButton = document.createElement('button');
            copyButton.innerHTML = '📋';
            copyButton.className = 'copy-button';
            copyButton.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(255, 255, 255, 0.2);
                border: none;
                border-radius: 4px;
                padding: 8px;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.2s ease;
            `;
            
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
            
            copyButton.addEventListener('click', function() {
                const text = codeBlock.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    copyButton.innerHTML = '✅';
                    setTimeout(() => {
                        copyButton.innerHTML = '📋';
                    }, 2000);
                }).catch(() => {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    copyButton.innerHTML = '✅';
                    setTimeout(() => {
                        copyButton.innerHTML = '📋';
                    }, 2000);
                });
            });
            
            copyButton.addEventListener('mouseenter', function() {
                copyButton.style.background = 'rgba(255, 255, 255, 0.3)';
            });
            
            copyButton.addEventListener('mouseleave', function() {
                copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
            });
        }
    });
});

// Video demo functionality
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    const videoScreen = document.querySelector('.video-screen');
    const progressBar = document.querySelector('.progress');
    
    if (playButton && progressBar) {
        let isPlaying = false;
        let progress = 30;
        let progressInterval;
        
        playButton.addEventListener('click', function() {
            if (!isPlaying) {
                playButton.textContent = '⏸️';
                isPlaying = true;
                
                // Simulate video progress
                progressInterval = setInterval(() => {
                    progress += 1;
                    if (progress > 100) progress = 0;
                    progressBar.style.width = progress + '%';
                }, 100);
            } else {
                playButton.textContent = '▶️';
                isPlaying = false;
                clearInterval(progressInterval);
            }
        });
    }
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    const animatedElements = document.querySelectorAll('.feature-card, .demo-card, .api-card, .example-card, .command-card, .integration-card, .tool-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Mobile touch improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('.btn, .btn-small, button');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// QR Code animation
document.addEventListener('DOMContentLoaded', function() {
    const qrSquares = document.querySelectorAll('.qr-square');
    
    if (qrSquares.length > 0) {
        setInterval(() => {
            qrSquares.forEach((square, index) => {
                setTimeout(() => {
                    square.style.opacity = square.style.opacity === '0.3' ? '1' : '0.3';
                }, index * 100);
            });
        }, 3000);
    }
});

// API endpoint copy functionality
document.addEventListener('DOMContentLoaded', function() {
    const endpoints = document.querySelectorAll('.api-endpoint');
    
    endpoints.forEach(endpoint => {
        endpoint.style.cursor = 'pointer';
        endpoint.title = 'Click to copy endpoint';
        
        endpoint.addEventListener('click', function() {
            const url = this.querySelector('.url').textContent;
            navigator.clipboard.writeText(url).then(() => {
                const originalBg = this.style.background;
                this.style.background = '#dcfce7';
                this.style.transition = 'background 0.3s ease';
                
                setTimeout(() => {
                    this.style.background = originalBg;
                }, 1000);
            });
        });
    });
});

// Gallery image interaction
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.image-item');
    
    imageItems.forEach(item => {
        const placeholder = item.querySelector('.image-placeholder');
        const actions = item.querySelector('.image-actions');
        
        if (placeholder && actions) {
            item.addEventListener('mouseenter', function() {
                placeholder.style.transform = 'scale(1.05)';
                placeholder.style.transition = 'transform 0.3s ease';
                actions.style.background = '#f1f5f9';
            });
            
            item.addEventListener('mouseleave', function() {
                placeholder.style.transform = 'scale(1)';
                actions.style.background = 'transparent';
            });
        }
    });
});

// Scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb, #3b82f6);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.visibility = 'visible';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4)';
    });
    
    scrollToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
    });
});

// Add loading states for external links
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const originalText = this.textContent;
            if (this.classList.contains('btn')) {
                this.textContent = 'Opening...';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }
        });
    });
});

// Enhanced error handling for iframes
document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
        iframe.addEventListener('error', function() {
            const container = this.parentElement;
            if (container) {
                container.innerHTML = `
                    <div style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        background: #f8fafc;
                        color: #64748b;
                        text-align: center;
                        padding: 20px;
                        flex-direction: column;
                    ">
                        <div style="font-size: 2rem; margin-bottom: 10px;">🌐</div>
                        <div>Demo temporarily unavailable</div>
                        <div style="font-size: 0.875rem; margin-top: 5px;">
                            <a href="https://go-file.onrender.com" target="_blank" style="color: #2563eb;">Visit directly</a>
                        </div>
                    </div>
                `;
            }
        });
    });
});

// Add keyboard navigation support
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(e) {
        // ESC to close mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const navToggle = document.querySelector('.nav-toggle');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        }
    });
});