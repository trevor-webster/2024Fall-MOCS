---
toc: false
---


<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

/* Gallery */

.gallery {
  max-width: calc(1200px + 2rem);
}

.gallery a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.gallery img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
  aspect-ratio: 2500 / 1900;
}

@media (prefers-color-scheme: dark) {
  .gallery img {
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.4);
  }
}

.gallery a:not(:hover, :focus) {
  color: var(--theme-foreground-muted);
}

.gallery a:hover img,
.gallery a:focus img {
  box-shadow: 0 0 0 0.75px var(--theme-foreground-focus), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}

.gallery figcaption {
  font-size: 12px;
  color: inherit;
}

.arrow {
  font-weight: 500;
}

.arrow::after {
  content: "→";
  display: inline-block;
  margin-left: 0.25rem;
}


@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>

<div class="hero">
  <h1>Modeling of Complex Systems</h1>
  <h2>Welcome to MOCS Fall 2024! </h2>
  <a href="https://mocs.observablehq.com/2024FALL-MOCS/getting-started/" target="_blank">First lesson<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>

<div class="gallery grid grid-cols-2" style="grid-auto-rows;">
    <a href="https://jstonge.observablehq.cloud/hello-research-groups/grontology" target="_blank">
    <picture>
        <source srcset="./assets/defining.webp" media="(prefers-color-scheme: dark)">
        <img src="./assets/defining.webp">
    </picture>
    <div class="small arrow">💡 ODEs</div>
    </a>
    <a href="https://jstonge.observablehq.cloud/hello-research-groups/grontology" target="_blank">
    <picture>
        <source srcset="./assets/defining.webp" media="(prefers-color-scheme: dark)">
        <img src="./assets/defining.webp">
    </picture>
    <div class="small arrow">💡 Cellular automata</div>
    </a>
    <a href="https://jstonge.observablehq.cloud/hello-research-groups/grontology" target="_blank">
    <picture>
        <source srcset="./assets/defining.webp" media="(prefers-color-scheme: dark)">
        <img src="./assets/defining.webp">
    </picture>
    <div class="small arrow">💡 Networks</div>
    </a>
    <a href="https://jstonge.observablehq.cloud/hello-research-groups/grontology" target="_blank">
    <picture>
        <source srcset="./assets/defining.webp" media="(prefers-color-scheme: dark)">
        <img src="./assets/defining.webp">
    </picture>
    <div class="small arrow">💡 ABMs</div>
    </a>
</div>