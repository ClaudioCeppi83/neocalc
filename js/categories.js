export function setupCategories() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
  
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('btn-active'));
        btn.classList.add('btn-active');
  
        document.querySelectorAll('.category-content').forEach(c => {
          c.classList.add('hidden-category');
          c.classList.remove('visible-category');
        });
  
        const selected = document.getElementById(cat);
        selected.classList.remove('hidden-category');
        selected.classList.add('visible-category');
      });
    });
  }
  