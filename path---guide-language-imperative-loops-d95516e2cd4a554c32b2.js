webpackJsonp([25],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-imperative-loops.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:11}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{html:'<h4>For Loops</h4>\n<p>For loops iterate from a starting value up to (and including) the ending value.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">for</span> myBinding <span class="hljs-keyword">in</span> (startValue) <span class="hljs-keyword">to</span> (endValue) {\n  <span class="hljs-comment">/* use myBinding here */</span>\n};</code></pre>\n      </div>\n<p>The parenthesis around <code>startValue</code> and <code>endValue</code> may be omitted if they are\nunnecessary.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> xStart = <span class="hljs-number">1</span>;\n<span class="hljs-keyword">let</span> xEnd = <span class="hljs-number">3</span>;\n<span class="hljs-comment">/* prints: 1 2 3 */</span>\n<span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> xStart <span class="hljs-keyword">to</span> xEnd {\n  print_int x;\n  print_string <span class="hljs-string">" "</span>;\n};</code></pre>\n      </div>\n<p>You can make the <code>for</code> loop count in the opposite direction by using <code>downto</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">for</span> myBinding <span class="hljs-keyword">in</span> (startValue) <span class="hljs-keyword">downto</span> (endValue) {\n  statements\n};</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> xStart = <span class="hljs-number">3</span>;\n<span class="hljs-keyword">let</span> xEnd = <span class="hljs-number">1</span>;\n<span class="hljs-comment">/* prints: 3 2 1 */</span>\n<span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> xStart <span class="hljs-keyword">downto</span> xEnd {\n  print_int x;\n  print_string <span class="hljs-string">" "</span>;\n};</code></pre>\n      </div>\n<h4>While Loops</h4>\n<p>While loops execute a code block while some condition is true. The form of a <code>while</code> loop includes a single expression, the condition to test.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">while</span> (<span class="hljs-forDocGrammarHighlighting">testCondition</span>) {\n  statements;\n};</code></pre>\n      </div>\n<p>The parenthesis around <code>testCondition</code> may be omitted if they are unnecessary.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">while</span> <span class="hljs-literal">true</span> {\n  print_endline <span class="hljs-string">"hello"</span>;\n};</code></pre>\n      </div>\n<h4>Breaking Out of Loop</h4>\n<p>There\'s no loop-breaking <code>break</code> keyword (nor early <code>return</code> from functions, for that matter) in Reason/OCaml. In general, prefer map/filter/reduce over imperative loops. However, we can break out of a while loop easily through using a <a href="#diving-deeper-mutation">mutable binding</a>. Example without the <code>ref</code> syntax sugar:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-type">Random</span>.self_init ();\n<span class="hljs-keyword">let</span> <span class="hljs-keyword">break</span> = {contents: <span class="hljs-literal">false</span>};\n<span class="hljs-keyword">while</span> (not <span class="hljs-keyword">break</span>.contents) {\n  <span class="hljs-keyword">if</span> (<span class="hljs-type">Random</span>.int <span class="hljs-number">10</span> === <span class="hljs-number">3</span>) {\n    <span class="hljs-keyword">break</span>.contents = <span class="hljs-literal">true</span>\n  } <span class="hljs-keyword">else</span> {\n    print_endline <span class="hljs-string">"hello"</span>\n  }\n};</code></pre>\n      </div>',frontmatter:{title:"Imperative Loops"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/imperative-loops.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-imperative-loops-d95516e2cd4a554c32b2.js.map