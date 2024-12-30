import { LanguagesT } from "@/types/types";

export const customLanguages: LanguagesT = {
  shell: {
    name: "Bash",
    className: "bash",
  },
  cpp: {
    name: "C++",
    className: "cpp",
  },
  csharp: {
    name: "C#",
    className: "csharp",
  },
  clojure: {
    name: "Clojure",
    className: "clojure",
  },
  crystal: {
    name: "Crystal",
    className: "crystal",
  },
  css: {
    name: "CSS",
    className: "css",
  },
  diff: {
    name: "Diff",
    className: "diff",
  },
  dockerfile: {
    name: "Docker",
    className: "dockerfile",
  },
  elm: {
    name: "Elm",
    className: "elm",
  },
  elixir: {
    name: "Elixir",
    className: "elixir",
  },
  erlang: {
    name: "Erlang",
    className: "erlang",
  },
  graphql: {
    name: "GraphQL",
    className: "graphql",
  },
  go: {
    name: "Go",
    className: "go",
  },
  haskell: {
    name: "Haskell",
    className: "haskell",
  },
  html: {
    name: "HTML",
    className: "xml",
  },
  java: {
    name: "Java",
    className: "java",
  },
  javascript: {
    name: "JavaScript",
    className: "javascript",
  },
  json: {
    name: "JSON",
    className: "json",
  },
  jsx: {
    name: "JSX",
    className: "javascript",
  },
  kotlin: {
    name: "Kotlin",
    className: "kotlin",
  },
  lisp: {
    name: "Lisp",
    className: "lisp",
  },
  lua: {
    name: "Lua",
    className: "lua",
  },
  markdown: {
    name: "Markdown",
    className: "markdown",
  },
  matlab: {
    name: "MATLAB/Octave",
    className: "matlab",
  },
  plaintext: {
    name: "Plaintext",
    className: "unknown",
  },
  powershell: {
    name: "Powershell",
    className: "powershell",
  },
  objectivec: {
    name: "Objective C",
    className: "objectivec",
  },
  php: {
    name: "PHP",
    className: "php",
  },
  python: {
    name: "Python",
    className: "python",
  },
  ruby: {
    name: "Ruby",
    className: "ruby",
  },
  rust: {
    name: "Rust",
    className: "rust",
  },
  scala: {
    name: "Scala",
    className: "scala",
  },
  scss: {
    name: "SCSS",
    className: "scss",
  },
  sql: {
    name: "SQL",
    className: "sql",
  },
  swift: {
    name: "Swift",
    className: "swift",
  },
  toml: {
    name: "TOML",
    className: "toml",
  },
  typescript: {
    name: "TypeScript",
    className: "typescript",
  },
  tsx: {
    name: "TSX",
    className: "typescript",
  },
  xml: {
    name: "XML",
    className: "xml",
  },
  yaml: {
    name: "YAML",
    className: "yaml",
  },
};

type languageNameT = keyof (typeof customLanguages)[];
