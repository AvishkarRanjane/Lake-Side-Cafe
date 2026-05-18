// main.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }

    // --- Sticky Header ---
    const header = document.getElementById('main-header');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-forest', 'shadow-lg', 'py-2');
            header.classList.remove('bg-transparent', 'py-4', 'border-transparent');
            // If there's an image behind it, adding bg-forest is good
        } else {
            header.classList.remove('bg-forest', 'shadow-lg', 'py-2');
            header.classList.add('bg-transparent', 'py-4');
        }
    };

    if (header) {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    }

    // --- Global Cart State Initialization ---
    updateCartCountDisplay();
});

// --- Cart Logic ---
window.updateCartCountDisplay = () => {
    const cart = JSON.parse(localStorage.getItem('lakeSideCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const countElements = document.querySelectorAll('#cart-count, .cart-count-mobile');
    countElements.forEach(el => {
        el.textContent = totalItems;
        // Animation
        el.style.transform = 'scale(1.4)';
        el.style.transition = 'transform 0.2s ease-out';
        setTimeout(() => el.style.transform = 'scale(1)', 200);
    });
};

window.addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('lakeSideCart')) || [];

    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('lakeSideCart', JSON.stringify(cart));

    // Dispatch custom event if cart page is open to re-render
    window.dispatchEvent(new Event('cartUpdated'));

    // Update global header counts
    window.updateCartCountDisplay();

    // Show toast
    showToast(`${item.name} added to cart!`);
};

// --- Toast Notification ---
window.showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-forest text-amber px-6 py-3 rounded-xl shadow-2xl z-[100] transform transition-all duration-300 translate-y-20 opacity-0 font-medium flex items-center gap-3 border border-amber/20';
    toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${message}`;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
};
