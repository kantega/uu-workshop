# Universal design - from guidelines to code

## How to do this workshop

Open the index.html in a web browser to access the homepage. There, you can choose between three different pages, depending on what you want to focus on first. The "blind"-page might be the most time-consuming. It's perfectly fine to switch between pages and tasks.

Each page has its own CSS, JavaScript, and HTML located in its own folder, so what you do on one task will not affect the others.

If you want to use the helpful plugings below, you need to run the page on a server. There are some helpful extensions for this. For example [Live Server for VSCode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## Relevante plugins for Chrome:

- [Blurry-eye Test: To see how a website looks for visually impaired users](https://chrome.google.com/webstore/detail/blurry-eye-test/panidpjdcjkdhjamnogampinhbkjdkpo)
- [WAVE: Accessibility tool ](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [Siteimprove Accessibility Checker: Accessibility tool that also contains a filter to view the page as colorblind](https://chrome.google.com/webstore/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn?hl=en)
- [Funkify is an extension for Chrome that helps you experience the web and interfaces through the eyes of extreme users with different abilities and disabilities.](https://chromewebstore.google.com/detail/funkify-%E2%80%93-disability-simu/ojcijjdchelkddboickefhnbdpeajdjg?utm_source=Funkify-free-button&utm_medium=Funkify-web&utm_campaign=Premium-web&utm_content=Premium-free-button&fbclid=IwAR3bGQH0XDpObPy2tdTQTQuuSxZo3Bmf1rYAJcNiFYCtJv9J6JZaeN9mQE0)

## Relevant links:

- [How should one set up SVG and multi-img images](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role)
- [Support different default font size on iOS](https://dev.to/colingourlay/how-to-support-apple-s-dynamic-text-in-your-web-content-with-css-40c0)
- [About supporting prefers-reduced-motion](https://www.smashingmagazine.com/2021/10/respecting-users-motion-preferences/)
- [About the difference between keyboard navigation and screen readers, interesting video at the end showing someone using a screen reader](https://tink.uk/the-difference-between-keyboard-and-screen-reader-navigation/)
- [When should I use pixels and when should I use rem?](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
- [Zoom](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

## Relevant toptics:

- Landmarks
- Correct use of input with label (and alternative solutions such as aria-label)
- Various Chrome extensions you can use for testing ([colorblind](https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg?hl=en), [Accessibility-test](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), [Accessibility-test](https://chrome.google.com/webstore/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn?hl=en))
- Alt texts (Alt="" vs no alt vs alt="description")
- Focus highlighting (in the NAV design system "outline" is used instead of "border" because it doesn't change the size of the element, "box-shadow" is also an option)
- Non-semantic HTML (Button created as a div, for example)
- Use of screen reader - tabbing vs other supported functionality such as reading headers - the importance of semantic HTML.
