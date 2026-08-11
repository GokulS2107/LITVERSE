document.addEventListener('DOMContentLoaded', function() {
    // Sample book data
    const popularBooks = [
        {
            id: 1,
            title: "The Great Novel",
            author: "John Author",
            cover: "static/assets/images/6.png",
            rating: 4.5,
            genre: "Fiction",
            description: "A captivating story about life, love, and everything in between.",
            pages: 320,
            published: "2022",
            driveLink: "https://drive.google.com/file/d/1n4jJ22WOzgGGm6L4tHyH9zQL_l46TB0Z/view?usp=drive_link"
        },
        {
            id: 2,
            title: "Little Women",
            author: "Louisa May Alcott",
            cover: "static/assets/images/7.WEBP",
            rating: 4.2,
            genre: "Non-Fiction",
            description: "Exploring the latest scientific discoveries and their impact on our world.",
            pages: 280,
            published: "2023",
            driveLink: "https://drive.google.com/file/d/1Lw-RXPmnE-uwPt-RDgmC4lOEox1fTwR4/view?usp=drive_link"
        },
        {
            id: 3,
            title: "The Time Machine",
            author: "H. G. Wells",
            cover: "static/assets/images/8.WEBP",
            rating: 4.7,
            genre: "Mystery",
            description: "A collection of thrilling mystery stories that will keep you guessing.",
            pages: 350,
            published: "2021",
            driveLink: "https://drive.google.com/file/d/19FhcbzgOhKzMAgSl-ywKfdFhpek_SgST/view?usp=drive_link"
        },
        {
            id: 4,
            title: "The Adventures of Tom Sawyer",
            author: "Mark Twain",
            cover: "static/assets/images/9.WEBP",
            rating: 4.8,
            genre: "Fantasy",
            description: "Journey to a magical world filled with wonder and adventure.",
            pages: 420,
            published: "2023",
            driveLink: "https://drive.google.com/file/d/137b7niaf0nf7d1nMHtvkEoAAWg_XglUZ/view?usp=drive_link"
        }
    ];

    // Render popular books
    const popularBooksContainer = document.getElementById('popularBooks');
    
    if (popularBooksContainer) {
        popularBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card m-3';
            bookCard.innerHTML = `
                <div class="card" style="width: 16rem;">
                    <img src="${book.cover}" class="card-img-top" alt="${book.title}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text text-muted">${book.author}</p>
                        <div class="mb-2">
                            ${renderStars(book.rating)}
                            <span class="ml-2">${book.rating}</span>
                        </div>
                        <span class="badge badge-primary">${book.genre}</span>
                        <a href="${book.driveLink}" class="btn btn-primary btn-sm btn-block mt-3" target="_blank">
                                        Read Now 
                                    </a>
                    </div>
                </div>
            `;
            popularBooksContainer.appendChild(bookCard);
        });
    }

    // Function to render star ratings
    function renderStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star text-warning"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt text-warning"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star text-warning"></i>';
        }
        
        return stars;
    }
});