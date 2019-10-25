function openTabs(event, tab, set) {
  // Hide all tabs
  const className = '.' + set;
  document.querySelectorAll(className).forEach(function(item) {
    item.className = set;
  });
  
  // Show selected tab
  const fullPath = className + '#' + tab;
  document.querySelector(fullPath).classList.add('active');
  
  // Set Tab to active (and deactivate others)
  const siblingClass = event.target.className;
  document.querySelectorAll('.' + siblingClass).forEach(function(item) {
    item.classList.remove('active');
  });
  event.target.classList.add('active');
}