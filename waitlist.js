// ============================================================
// Waitlist Form — AJAX Submit (shared across all project pages)
// ============================================================
document.querySelectorAll('.waitlist-form').forEach(function(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var origText = btn.textContent;
    btn.textContent = 'Joining...';
    btn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(resp) {
      if (resp.ok) {
        form.style.display = 'none';
        var card = form.closest('.waitlist-card');
        var subline = card.querySelector('.waitlist-subline');
        var success = card.querySelector('.waitlist-success');
        if (subline) subline.style.display = 'none';
        if (success) success.style.display = 'block';
      } else {
        btn.textContent = origText;
        btn.disabled = false;
      }
    }).catch(function() {
      btn.textContent = origText;
      btn.disabled = false;
    });
  });
});
