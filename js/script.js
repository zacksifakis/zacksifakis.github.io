// When index.html is opened directly from disk (not built by Jekyll), the
// front matter block shows up as stray text at the top of the page.
// Remove it. On GitHub Pages Jekyll strips the block, so this does nothing.
(function () {
    var node = document.body && document.body.firstChild;
    if (node && node.nodeType === 3 && /^\s*---[\s\S]*---\s*$/.test(node.nodeValue)) {
        node.parentNode.removeChild(node);
    }
})();
