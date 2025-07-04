document.addEventListener('DOMContentLoaded', function() {
  // Scroll to donate section
  const donateButton = document.getElementById('donateButton');
  const donateSection = document.getElementById('donateSection');
  
  if (donateButton && donateSection) {
    donateButton.addEventListener('click', function() {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Donation amount selection
  const donateOptions = document.querySelectorAll('.donate-option');
  const paymentOptions = document.getElementById('paymentOptions');
  let selectedAmount = 10;

  donateOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove selected class from all options
      donateOptions.forEach(opt => opt.classList.remove('selected'));
      
      // Add selected class to clicked option
      this.classList.add('selected');
      
      // Get selected amount
      selectedAmount = this.getAttribute('data-amount');
      
      // Show payment options
      if (paymentOptions) {
        paymentOptions.classList.add('active');
      }
    });
  });

  // Payment method selection
  const paymentMethodOptions = document.querySelectorAll('.payment-option');
  const donationModal = document.getElementById('donationModal');
  const donationAmountElement = document.getElementById('donationAmount');
  const closeModalButton = document.getElementById('closeModalButton');
  const closeModal = document.getElementById('closeModal');

  if (paymentMethodOptions.length > 0 && donationModal && donationAmountElement) {
    paymentMethodOptions.forEach(method => {
      method.addEventListener('click', function() {
        const paymentMethod = this.getAttribute('data-method');
        
        // Set donation amount text
        if (selectedAmount === 'other') {
          donationAmountElement.textContent = 'your chosen';
        } else {
          donationAmountElement.textContent = selectedAmount;
        }
        
        // Show modal
        donationModal.style.display = 'flex';
        
        // Create confetti effect
        createConfetti();
      });
    });
  }

  // Close modal
  if (closeModalButton && donationModal) {
    closeModalButton.addEventListener('click', function() {
      donationModal.style.display = 'none';
    });
  }

  if (closeModal && donationModal) {
    closeModal.addEventListener('click', function() {
      donationModal.style.display = 'none';
    });
  }

  // Confetti effect
  function createConfetti() {
    const colors = ['#FFC400', '#2E9DF7', '#FFFFFF', '#000000'];
    const container = document.body;
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = -10 + 'px';
      confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      
      container.appendChild(confetti);
      
      const animationDuration = Math.random() * 3 + 2;
      
      confetti.style.animation = `drop ${animationDuration}s linear forwards`;
      
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, animationDuration * 1000);
    }
    
    // Add keyframes dynamically
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes drop {
        to {
          top: 100vh;
          opacity: 1;
          transform: rotate(360deg) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px);
        }
      }
    `;
    document.head.appendChild(style);
  }
});