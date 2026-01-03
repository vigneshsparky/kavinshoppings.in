// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Show loading state
    showLoading();
    
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    
    mobileMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if(targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Initialize categories buttons
    initializeCategories();
    
    // Initialize accordions for all categories
    initializeAccordions('all');
    
    // Hide loading after 500ms
    setTimeout(hideLoading, 500);
});

// Loading functions
function showLoading() {
    const accordionContainer = document.getElementById('accordionContainer');
    accordionContainer.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

function hideLoading() {
    const loadingElement = document.querySelector('.loading');
    if(loadingElement) {
        loadingElement.style.display = 'none';
    }
}

// Function to create category buttons
function initializeCategories() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    const categories = Object.keys(productsData);
    
    // Clear container first
    categoriesContainer.innerHTML = '';
    
    // Create "All" button
    const allButton = document.createElement('button');
    allButton.className = 'category-btn active';
    allButton.setAttribute('data-category', 'all');
    allButton.innerHTML = '<i class="fas fa-layer-group"></i>All Products';
    categoriesContainer.appendChild(allButton);
    
    // Create buttons for each category
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.setAttribute('data-category', category);
        button.innerHTML = `<i class="${productsData[category].icon}"></i>${productsData[category].name}`;
        categoriesContainer.appendChild(button);
    });
    
    // Add event listeners to category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Show loading
            showLoading();
            
            // Initialize accordions for selected category
            setTimeout(() => {
                initializeAccordions(category);
                // Scroll to products section on mobile
                if(window.innerWidth < 768) {
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        });
    });
}

// Function to create product card based on category type
function createProductCard(product, categoryType) {
    let productHTML = '';
    
    switch(categoryType) {
        case 'laddu':
            productHTML = `
                <div class="product-card">
                    <div class="product-header">
                        <div class="product-icon">
                            <i class="fas fa-cookie"></i>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.pieces}</p>
                        </div>
                    </div>
                    <div class="product-price">
                        <span class="price">${product.price}</span>
                        <span class="unit">per box</span>
                    </div>
                </div>
            `;
            break;
            
        case 'thuvayalThokku':
        case 'malt':
        case 'powderMasala':
        case 'paruppuPodi':
            productHTML = `
                <div class="product-card">
                    <div class="product-header">
                        <div class="product-icon">
                            <i class="fas fa-weight-hanging"></i>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                        </div>
                    </div>
                    <table class="price-table">
                        <thead>
                            <tr>
                                <th>Weight</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>100g</td>
                                <td><span class="price">${product.price100g}</span></td>
                            </tr>
                            <tr>
                                <td>1kg</td>
                                <td><span class="price">${product.priceKg}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
            break;
            
        case 'nonVegPickle':
            productHTML = `
                <div class="product-card">
                    <div class="product-header">
                        <div class="product-icon">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name} Pickle</h3>
                        </div>
                    </div>
                    <table class="price-table">
                        <thead>
                            <tr>
                                <th>Weight</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>250g</td>
                                <td><span class="price">${product.price250g}</span></td>
                            </tr>
                            <tr>
                                <td>500g</td>
                                <td><span class="price">${product.price500g}</span></td>
                            </tr>
                            <tr>
                                <td>1kg</td>
                                <td><span class="price">${product.priceKg}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
            break;
            
        case 'parampariyaPalagaram':
            productHTML = `
                <div class="product-card">
                    <div class="product-header">
                        <div class="product-icon">
                            <i class="fas fa-birthday-cake"></i>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                        </div>
                    </div>
                    <div class="product-price">
                        <span class="price">${product.priceKg}</span>
                        <span class="unit">per kg</span>
                    </div>
                </div>
            `;
            break;
            
        case 'napkins':
            productHTML = `
                <div class="product-card">
                    <div class="product-header">
                        <div class="product-icon">
                            <i class="fas fa-tshirt"></i>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                        </div>
                    </div>
                    <table class="price-table">
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Pieces</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${product.sizes.map(size => `
                                <tr>
                                    <td>${size.size}</td>
                                    <td>${size.pieces}</td>
                                    <td><span class="price">${size.price}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
            break;
            
        case 'millet':
            productHTML = `
                <div class="product-card">
                    <div class="product-header">
                        <div class="product-icon">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                        </div>
                    </div>
                    <div class="millet-varieties">
                        ${product.varieties.map(variety => `
                            <div class="millet-variety">
                                <div class="variety-name">${variety.type}</div>
                                <div class="price">${variety.price}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
            
        default:
            productHTML = `
                <div class="product-card">
                    <div class="product-header">
                        <div class="product-icon">
                            <i class="fas fa-box"></i>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                        </div>
                    </div>
                </div>
            `;
    }
    
    return productHTML;
}

// Function to create accordion for a category
function createAccordion(category, products, categoryKey) {
    // Limit to 3 products initially as requested
    const initialProducts = products.slice(0, 30);
    const hasMoreProducts = products.length > 30;
    
    // If no products, show message
    if(initialProducts.length === 0) {
        return `
            <div class="accordion" data-category="${categoryKey}">
                <div class="accordion-header">
                    <span>${category}</span>
                    <span class="icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="accordion-body">
                    <div class="accordion-content">
                        <div class="no-products">
                            <i class="fas fa-box-open"></i>
                            <p>No products available in this category</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="accordion" data-category="${categoryKey}">
            <div class="accordion-header">
                <span>${category}</span>
                <span class="icon"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="accordion-body">
                <div class="accordion-content">
                    <div class="products-grid">
                        ${initialProducts.map(product => createProductCard(product, categoryKey)).join('')}
                        
                        ${hasMoreProducts ? 
                            `<div class="additional-products">
                                <p style="text-align: center; color: #7f8c8d; margin: 20px 0;">
                                    <i class="fas fa-plus-circle"></i> ${products.length - 30} more products available in this category
                                </p>
                            </div>` 
                            : ''
                        }
                    </div>
                    <button class="close-btn"><i class="fas fa-times"></i> Close</button>
                </div>
            </div>
        </div>
    `;
}

// Function to initialize all accordions
function initializeAccordions(selectedCategory) {
    const accordionContainer = document.getElementById('accordionContainer');
    
    // Clear existing accordions
    accordionContainer.innerHTML = '';
    
    try {
        if (selectedCategory === 'all') {
            // Create accordion for each category
            Object.keys(productsData).forEach(categoryKey => {
                const category = productsData[categoryKey];
                const accordionHTML = createAccordion(category.name, category.products, categoryKey);
                accordionContainer.innerHTML += accordionHTML;
            });
        } else {
            // Create accordion for selected category only
            const category = productsData[selectedCategory];
            const accordionHTML = createAccordion(category.name, category.products, selectedCategory);
            accordionContainer.innerHTML = accordionHTML;
        }
        
        // Add event listeners to accordion headers
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordionBody = this.nextElementSibling;
                const isOpen = accordionBody.classList.contains('open');
                
                // Close all accordions
                document.querySelectorAll('.accordion-body').forEach(body => {
                    body.classList.remove('open');
                });
                
                document.querySelectorAll('.accordion-header').forEach(h => {
                    h.classList.remove('active');
                });
                
                // If it wasn't open, open it
                if (!isOpen) {
                    accordionBody.classList.add('open');
                    this.classList.add('active');
                    
                    // Scroll to the accordion if on mobile
                    if (window.innerWidth < 768) {
                        accordionBody.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
        
        // Add event listeners to close buttons
        const closeButtons = document.querySelectorAll('.close-btn');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const accordionBody = this.closest('.accordion-body');
                const accordionHeader = this.closest('.accordion').querySelector('.accordion-header');
                
                accordionBody.classList.remove('open');
                accordionHeader.classList.remove('active');
            });
        });
        
    } catch (error) {
        console.error('Error initializing accordions:', error);
        accordionContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading products. Please try again.</p>
                <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Reload Page
                </button>
            </div>
        `;
    }
}

// Add window resize handler to adjust layout
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if(window.innerWidth > 768) {
        document.querySelector('.nav').classList.remove('active');
    }
});