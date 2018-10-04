// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-post-js": () => import("/Users/aaloktrivedi/aalok-portfolio/src/templates/project-post.js" /* webpackChunkName: "component---src-templates-project-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/aaloktrivedi/aalok-portfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/aaloktrivedi/aalok-portfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/aaloktrivedi/aalok-portfolio/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-experience-js": () => import("/Users/aaloktrivedi/aalok-portfolio/src/pages/experience.js" /* webpackChunkName: "component---src-pages-experience-js" */),
  "component---src-pages-index-js": () => import("/Users/aaloktrivedi/aalok-portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-work-js": () => import("/Users/aaloktrivedi/aalok-portfolio/src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */)
}

exports.data = () => import("/Users/aaloktrivedi/aalok-portfolio/.cache/data.json")

