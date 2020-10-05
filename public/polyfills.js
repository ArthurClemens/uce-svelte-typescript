/**
 * NOTE: Don't prettify this file: trailing commas will break Internet Explorer 11!
 */

if (this.customElements) {
  try {
    customElements.define("built-in", document.createElement("p").constructor, {
      extends: "p",
    });
  } catch (s) {
    document.write(
      '<script src="//unpkg.com/@ungap/custom-elements-builtin@latest"><\x2fscript>'
    );
  }
} else {
  document.write(
    '<script src="//unpkg.com/document-register-element"><\x2fscript>'
  );
}
if (!document.documentElement.attachShadow) {
  document.write('<script src="//unpkg.com/attachshadow"><\x2fscript>');
}
