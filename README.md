# uu-workshop

## Hvordan bruke workshoppen

Opne index.html i ein nettleser for å få framsida. Der kan de velge mellom tre forskjellige oppgåvesider, alt etter kva
de vil fokusere på først. Den for dei blinde er nok den som tek lengst tid å fullføre. Det går heilt fint å hoppe mellom
oppgåver og løyse berre noko av kvar.

Kvar oppgåve har all css, javascript og html liggende i sin egen mappe, så kva de gjer på ei oppgåve har ingen
innvirkning på dei andre.

## Relevante linker:

- [Korleis bør ein sette opp svg og multi-img bilete](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role)
- [Støtt forskjellig default font size på iOS](https://dev.to/colingourlay/how-to-support-apple-s-dynamic-text-in-your-web-content-with-css-40c0)
- [Om å støtte prefers-reduced-motion](https://www.smashingmagazine.com/2021/10/respecting-users-motion-preferences/)
- [Om forskjell på keyboard nav og screen readers, interessant video på slutten av ei som bruker screen reader](https://tink.uk/the-difference-between-keyboard-and-screen-reader-navigation/)
- [Når skal eg bruke pixels og når skal eg bruke rem](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
- [Zoom](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

## Relevante tema:

- landmarks
- riktig bruk av input med label (og alternavite løsninger med f.eks. aria-label)
- Diverse chrome extensions ein kan bruke for å
  teste ([fargeblind](https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg?hl=en), [UU-test](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), [UU-test](https://chrome.google.com/webstore/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn?hl=en))
- Alt-tekster (Alt="" vs ingen alt vs alt="forklaring")
- Fokus markering (outline brukes eksempelvis i NAV sitt designsystem siden den ikke endrer størrelse på element,
  box-shadow fungerer ikke like bra i alle tilfeller - research her)
- Ikkje-semantisk html. (Knapp som er laga som ein div, f.eks.)
- Bruk av skjermleser - tabing vs annen støttet funksjonalitet som å lese overskrifter - vikitgheten av semantisk HTML.
