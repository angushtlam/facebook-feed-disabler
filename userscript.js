// ==UserScript==
// @name         Facebook Feed Disabler
// @namespace    http://angus.works/
// @version      1.0
// @description  Hides the Facebook feed on load to prevent people from getting distracted
// @author       Angus Lam (angushtlam@gmail.com)
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  window.showFeed = false
  window.toggleFeed = function () {
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
<a id="feed-toggler" onClick="window.toggleFeed()">Show Feed</a>
<hr />
${feed.parentNode.innerHTML}
<div style="align-items: center; background-color: #fff; border-radius: 4px; border: 1px solid #dddfe2; display: flex; height: 400px;">
<div style="padding: 10px; text-align: center; width: 100%;">
  <div style="display: block; font-size: 18px;">You got work to do!</div>
  <h1 style="display: block; font-size: 48px;">Stay focused.</h1>
  <div style="font-size: 80px; padding: 20px 0;">👍</div>
  <a onClick="window.toggleFeed()">I'm done though!</a>
</div>
</div>
`
  }

})();