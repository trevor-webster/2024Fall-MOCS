// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "MOCS Fall 2024",
  pages: [
    { name: "Getting Started", path: "/getting-started" },
    {
      name: "Agent-based modeling",
      open: false,
      pager: "abms",
      pages: [
        { name: "Getting started", path: "abms/getting-started" },
      ]
    },
    {
      name: "Ordinary Differential Equations",
      open: false,
      pager: "odes",
      pages: [
        { name: "Getting started", path: "odes/getting-started" },
      ]
    },
    {
      name: "Networks",
      open: false,
      pager: "networks",
      pages: [
        { name: "Getting started", path: "networks/getting-started" },
      ]
    },
    {
      name: "Cellular Automata",
      open: false,
      pager: "cellular-automata",
      pages: [
        { name: "Getting started", path: "cellular-automata/getting-started" },
      ]
    },
    { name: "Schedule & Assignments", path: "/schedule" },
    { name: "Extra ressources", path: "/extra-resources" },
    { name: "References", path: "/refs" },
  ],
  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "docs", // path to the source root for preview
  output: "dist", // path to the output root for build
  search: true, // activate search
  style: "style.css"
};
