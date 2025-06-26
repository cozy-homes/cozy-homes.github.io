document.getElementById('enquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // In production, you would send the form data to your backend here
  document.getElementById('enquiryForm').reset();
  document.getElementById('formSuccess').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('hidden');
  }, 5000);
});
