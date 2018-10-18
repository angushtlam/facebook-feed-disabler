// ==UserScript==
// @name         Facebook Feed Disabler
// @namespace    https://angusburg.com/
// @version      1.2
// @description  Hides the Facebook feed on load to prevent people from getting distracted
// @author       angus (angushtlam@gmail.com)
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  let showFeed = false
  const toggleFeed = function () {
      const feedToggler = document.getElementById('feed-toggler')
      const feed = document.getElementById('user-feed')

      if (!window.showFeed) {
          feed.style.display = 'block'
          feedToggler.innerHTML = 'Hide Feed'
          window.showFeed = true
      } else {
          feed.style.display = 'none'
          feedToggler.innerHTML = 'Show Feed'
          window.showFeed = false
      }
  }

  const feedQuery = document.querySelectorAll('[role="feed"]')
  if (feedQuery.length) {
      const feed = feedQuery[0]
      feed.style.display = 'none'
      feed.id = 'user-feed'
      feed.parentNode.innerHTML = `
<a id="feed-toggler" class="attach_feed_onclick" style="display: block; margin-bottom: 8px; text-align: center;">Show Feed</a>
${feed.parentNode.innerHTML}
<div class="_4-u2 _1-ib _2tyk _20os _4-u8" style="align-items: center; display: flex; height: 400px;">
<div style="padding: 10px; text-align: center; width: 100%;">
  <div style="display: block; font-size: 18px;">You got work to do!</div>
  <h1 style="display: block; font-size: 48px;">Stay focused.</h1>
  <div style="font-size: 80px; padding: 20px 0;">👍</div>
  <a class="attach_feed_onclick">I'm done though!</a>
</div>
</div>
`
      document.querySelectorAll('.attach_feed_onclick').forEach(function (el) {
        el.onclick = toggleFeed
      })
  }

})();
