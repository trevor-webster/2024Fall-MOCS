// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "MOCS Fall 2024",
  pages: [
    { name: "Getting Started", path: "/getting-started" },
    { name: "Week 1: Why models", path: "/W1-why-models" },
    { name: "Week 2: Modeling", path: "/W2-modeling" },
    {
      name: "Ordinary Differential Equations",
      open: false,
      pager: "M1-odes",
      pages: [
        { name: "Getting started", path: "M1-odes/getting-started" },
        { name: "Week 3: Compartments", path: "M1-odes/W3-compartments" },
      ]
    },
    {
      name: "Cellular Automata",
      open: false,
      pager: "M2-cellular-automata",
      pages: [
        { name: "Getting started", path: "M2-cellular-automata/getting-started" },
        { name: "A game of life", path: "M2-cellular-automata/W6-game-of-life" },
      ]
    },
    {
      name: "Agent-based modeling",
      open: false,
      pager: "M3-abms",
      pages: [
        { name: "Getting started", path: "M3-abms/getting-started" },
      ]
    },
    {
      name: "Networks",
      open: false,
      pager: "M4-networks",
      pages: [
        { name: "Getting started", path: "M4-networks/getting-started" },
      ]
    },
    { name: "Table of Contents", path: "/toc" },
    { name: "Computational ressources", path: "/comp-ressources" },
    { name: "References", path: "/refs" },
  ],
  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  header: ({path}) => `<div style="display: justify-content: flex-end; direction: rtl;"><small><a href="https://github.com/jstonge/2024Fall-MOCS/blob/main/docs${path}.md?plain=1">view source</a></small></div>`,
  root: "docs", // path to the source root for preview
  output: "dist", // path to the output root for build
  search: true, // activate search
  style: "style.css"
};
