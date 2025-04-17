function submitStory() {
    const input = document.getElementById('storyInput');
    const text = input.value.trim();
    if (!text) return;
  
    const timestamp = new Date().toLocaleString();
    const id = Math.random().toString(36).substr(2, 9);
  
    const storyEl = document.createElement('div');
    storyEl.className = 'story';
    storyEl.id = story-${id};
    storyEl.innerHTML = `
      <p>${text}</p>
      <div class="timestamp">${timestamp}</div>
      <button class="share-btn" onclick="copyLink('${id}')">Share Link</button>
    `;
  
    document.getElementById('storiesContainer').prepend(storyEl);
    input.value = '';
  }
  
  function copyLink(id) {
    const base = window.location.href.split('#')[0];
    const link = ${base}#story-${id};
    navigator.clipboard.writeText(link).then(() => {
      alert('Story link copied!');
    });
  }