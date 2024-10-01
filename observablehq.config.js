// See https://observablehq.com/framework/config for documentation.
export default {
  title: "MOCS Fall 2024",
  pages: [
    { name: "Getting Started", path: "/getting-started" },
    { name: "Week 1: Why models", path: "/W1-why-models" },
    { name: "Week 2: Modeling", path: "/W2-modeling" },
    {
      name: "Dynamics",
      path: "Dynamics",
      pages: [
        { name: "Week 3: Discrete models", path: "/M1-Dynamics/W3-discrete" },
        { name: "Week 4: Continuous models", path: "/M1-Dynamics/W4-continuous" },
        { name: "Week 5: ...and Chaos", path: "/M1-Dynamics/W5-chaos" },
      ]
    },
    {
      name: "Structure, part 1",
      path: "Structure-part-1",
      pages: [
        { name: "Week 6: Cellular Automata and Fractals", path: "/M2-Structure-part-1/W6-intro-ca" },
        { name: "Week 7: Random walks, Percolation, Stochastic CA", path: "/M2-Structure-part-1/W7-stochastic-ca" },
      ]
    },
    {
      name: "Structure, part 2",
      path: "Structure-part-2",
      pages: [
        { name: "Week 9: Networks", path: "/M3-Structure-part-2/W9-networks" },
        { name: "Week 10: Models on networks", path: "/M3-Structure-part-2/W10-on-networks" },
        { name: "Week 11: Models of networks", path: "/M3-Structure-part-2/W11-of-networks" },
        { name: "Week 12: Models on and of networks", path: "/M3-Structure-part-2/W12-on-and-of-networks" },
      ]
    },
    {
      name: "Dynamics & Structure",
      path: "Dynamics-and-Structure",
      pages: [
        { name: "Week 13: ABMs in archeology", path: "/M4-Dynamics-and-Structure/W13-crabtree-abms" },
        { name: "Week 14: Evolutionary game theory", path: "/M4-Dynamics-and-Structure/W14-evo-game-theory" },
      ]
    },
    {
      name: "Model Theory (redux)",
      path: "Model-theory-redux",
      pages: [

      ]
    },
    { name: "Syllabus", path: "/syllabus" },
    { name: "Evaluation", path: "/eval" },
    { name: "References", path: "/refs" },
    { name: "Computational resources", path: "/comp-resources" },
    { name: "Pluto ↗", path: "https://jstonge.github.io/2024Fall-MOCS/"},
    { name: "Notebooks ↗", path: "https://github.com/jstonge/2024Fall-MOCS/tree/main/notebooks"},
  ],
  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  header: ({path}) => `<div style="display: justify-content: flex-end; direction: rtl;"><small><a href="https://github.com/jstonge/2024Fall-MOCS/blob/main/docs${path}.md?plain=1">view source</a></small></div>`,
  root: "docs", // path to the source root for preview
  output: "dist", // path to the output root for build
  search: true, // activate search
  style: "style.css"
};
