document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
      if (btn.classList.contains('liked')) {
        btn.innerHTML = '<span class="icon">&#9829;</span> Liked';
      } else {
        btn.innerHTML = '<span class="icon">&#9825;</span> Like';
      }
    });
  });

  document.querySelectorAll('.action-btn:not(.like-btn)').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.color = 'var(--accent)';
      setTimeout(() => { btn.style.color = ''; }, 400);
    });
  });

  document.querySelectorAll('.trending li').forEach(li => {
    li.addEventListener('click', () => {
      li.style.background = 'rgba(124, 92, 252, 0.15)';
      li.style.color = '#a78bfa';
      setTimeout(() => { li.style.background = ''; li.style.color = ''; }, 600);
    });
  });

  const followBtn = document.querySelector('.follow-btn');
  if (followBtn) {
    followBtn.addEventListener('click', () => {
      if (followBtn.textContent === 'Follow') {
        followBtn.textContent = 'Following';
        followBtn.style.background = 'rgba(124, 92, 252, 0.15)';
        followBtn.style.color = '#a78bfa';
        followBtn.style.boxShadow = 'none';
      } else {
        followBtn.textContent = 'Follow';
        followBtn.style.background = '';
        followBtn.style.color = '';
        followBtn.style.boxShadow = '';
      }
    });
  }
});