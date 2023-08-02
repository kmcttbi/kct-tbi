// Function to handle the touch response animation for the boxes
function handleTouchResponseAnimationStart(e) {
  const box = e.currentTarget;
  box.classList.add('touch-response');
}

function handleTouchResponseAnimationEnd(e) {
  const box = e.currentTarget;
  box.classList.remove('touch-response');
}

// Add event listeners for touch and click events to trigger touch response animation
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('mousedown', handleTouchResponseAnimationStart);
  box.addEventListener('touchstart', handleTouchResponseAnimationStart);
  box.addEventListener('mouseup', handleTouchResponseAnimationEnd);
  box.addEventListener('touchend', handleTouchResponseAnimationEnd);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Function to handle scroll animations for the boxes
function handleScrollAnimations() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    if (isInViewport(box)) {
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    }
  });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add event listener for scroll to trigger animations
window.addEventListener('scroll', handleScrollAnimations);

// Initial animation on page load
handleScrollAnimations();

// JavaScript to open the Google Forms link when the button is clicked
const applyNowButton = document.getElementById('apply-now-button');

applyNowButton.addEventListener('click', function() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSetoT735nIO26NuntNfpk28FHzvFB1M_sxGlj7bBwrwkS97lw/viewform?usp=sf_link', '_blank');
});
