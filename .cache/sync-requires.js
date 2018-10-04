// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-post-js": preferDefault(require("/Users/aaloktrivedi/aalok-portfolio/src/templates/project-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/aaloktrivedi/aalok-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/aaloktrivedi/aalok-portfolio/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/aaloktrivedi/aalok-portfolio/src/pages/contact.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/aaloktrivedi/aalok-portfolio/src/pages/experience.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/aaloktrivedi/aalok-portfolio/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/aaloktrivedi/aalok-portfolio/src/pages/work.js"))
}

