// Java Script file --- Neighborly

// Sample reviews data (you can replace it with your own data)
let reviews = [
    { username: 'John', rating: 4, review: 'Great neighborhood!' },
    { username: 'Jane', rating: 5, review: 'Excellent place to live.' },
  ];
  
  const loginForm = document.getElementById('login-form');
  const reviewForm = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');
  const reviewsSection = document.getElementById('reviews');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you would need to add code to validate the username and password against your database or backend
    
    // For simplicity, let's assume the login is successful if the username is not empty
    if (username.trim() !== '') {
      loginForm.style.display = 'none';
      reviewForm.style.display = 'block';
      reviewsSection.style.display = 'block';
      
      // Display the reviews
      displayReviews();
    }
  });
  
  function submitReview() {
    // Get the review details
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    
    // Add the review to the reviews array
    reviews.push({ username: 'Anonymous', rating: parseInt(rating), review });
    
    // Clear the review form
    document.getElementById('rating').value = '';
    document.getElementById('review').value = '';
    
    // Display the updated reviews
    displayReviews();
  }
  
  function displayReviews() {
    reviewList.innerHTML = '';
    
    if (reviews.length === 0) {
      reviewList.innerHTML = '<li>No reviews yet.</li>';
    } else {
      for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = '<span>' + review.username + ':</span> <p>Rating: ' + review.rating + '</p><p>Review: ' + review.review + '</p>';
        reviewList.appendChild(listItem);
      }
    }
  }
  
  // Set random background image
  document.body.style.backgroundImage = "url(" + getRandomBackground() + ")";
  