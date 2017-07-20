webpackJsonp([28],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-data-types.json":function(s,e){s.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:11}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}}]},file:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{html:'<h3>Tuple</h3>\n<p>Tuples are</p>\n<ul>\n<li>immutable</li>\n<li>ordered</li>\n<li>fixed-sized</li>\n<li>heterogeneous</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myThreeFloats = (<span class="hljs-number">20.0</span>, <span class="hljs-number">30.0</span>, <span class="hljs-number">100.0</span>);\n<span class="hljs-keyword">let</span> myIntAndString = (<span class="hljs-number">20</span>, <span class="hljs-string">"totallyNotAnInteger"</span>);</code></pre>\n      </div>\n<p>Tuples\' types can be used in type annotations as well. Tuple types visually resemble tuples values.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myThreeFloats: (float, float, float) = (<span class="hljs-number">20.0</span>, <span class="hljs-number">30.0</span>, <span class="hljs-number">100.0</span>);\n<span class="hljs-comment">/* a tuple type alias */</span>\n<span class="hljs-keyword">type</span> myPair = (int, string);\n<span class="hljs-keyword">let</span> myIntAndString: myPair = (<span class="hljs-number">20</span>, <span class="hljs-string">"totallyNotAnInteger"</span>);</code></pre>\n      </div>\n<p><strong>Note</strong>: there\'s no tuple of size 1.</p>\n<h3>Record</h3>\n<p>Records are a set of named values. They resemble "objects" but are</p>\n<ul>\n<li>lighter</li>\n<li>immutable by default</li>\n<li>less flexible</li>\n<li>much faster</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {age: int, name: string}; <span class="hljs-comment">/* type */</span>\n<span class="hljs-keyword">let</span> me = {age: <span class="hljs-number">30</span>, name: <span class="hljs-string">"Jordan"</span>}; <span class="hljs-comment">/* value */</span>\nprint_string me.name; <span class="hljs-comment">/* field access */</span></code></pre>\n      </div>\n<p><strong>Note</strong>: Records must have a type definition.</p>\n<p>New records can be created from old records with the <code>...</code> spread operator. The\noriginal record isn\'t mutated.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> meNextYear = {...me, age: me.age + <span class="hljs-number">1</span>};</code></pre>\n      </div>\n<p><strong>Note</strong>: spread cannot add new fields.</p>\n<h5>Sugar</h5>\n<p>To reduce redundancy, we provide <strong>punning</strong> for a record\'s types and values. You can use it when the name of a record field matches the name of its value/type.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> horsePower = {power: int, metric: bool};\n\n<span class="hljs-keyword">let</span> metric = <span class="hljs-literal">true</span>;\n<span class="hljs-keyword">let</span> horsePower1 = {power: <span class="hljs-number">10</span>, metric};\n<span class="hljs-comment">/* same as the value {power: 10, metric: metric}; */</span>\n\n<span class="hljs-keyword">type</span> car = {name: string, horsePower};\n<span class="hljs-comment">/* same as the type {name: string, horsePower: horsePower}; */</span></code></pre>\n      </div>\n<p><strong>Note</strong>: there\'s no punning for a single record field! <code>{foo}</code> doesn\'t do what you expect (it\'s a block that returns the value <code>foo</code>).</p>\n<h5>Mutable Fields</h5>\n<p>Record fields can optionally be mutable. This allows you to update those fields in-place with the <code>=</code> operator.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {\n  name: string,\n  <span class="hljs-keyword">mutable</span> age: int\n};\n<span class="hljs-keyword">let</span> me = {name: <span class="hljs-string">"Jordan"</span>, age: <span class="hljs-number">30</span>};\nme.age = me.age + <span class="hljs-number">1</span>; <span class="hljs-comment">/* alter `me`. Happy birthday! */</span></code></pre>\n      </div>\n<h3>Variant</h3>\n<p>Most data structures are about "this <strong>and</strong> that". A variant allows us to express "this <strong>or</strong> that".</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> response =\n| <span class="hljs-type">Yes</span>\n| <span class="hljs-type">No</span>\n| <span class="hljs-type">PrettyMuch</span>;\n\n<span class="hljs-keyword">let</span> areYouCrushingIt = <span class="hljs-type">Yes</span>;</code></pre>\n      </div>\n<p><code>Yes</code>, <code>No</code> and <code>PrettyMuch</code> aren\'t strings, nor references, nor some special data type. They\'re called "constructors" (or "tag"). The <code>|</code> bar separates each constructor.</p>\n<p><strong>Note</strong>: variant constructors need to be capitalized.</p>\n<p>A <code>switch</code> expression is like a large <code>if/elseif/elseif..</code> allows you to check every possible case of a variant. To use it, enumerate every variant constructor, each followed by an <code>=></code> and the expression corresponding to that case.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message = <span class="hljs-keyword">switch</span> (areYouCrushingIt) {\n| <span class="hljs-type">No</span> =&gt; <span class="hljs-string">"No worries. Keep going!"</span>\n| <span class="hljs-type">Yes</span> =&gt; <span class="hljs-string">"Great!"</span>\n| <span class="hljs-type">PrettyMuch</span> =&gt; <span class="hljs-string">"Nice!"</span>\n};\n<span class="hljs-comment">/* message is "Great!" */</span></code></pre>\n      </div>\n<p>The compiler will raise a type error if you\'ve forgotten to cover a case of your\nvariant, or if two cases are redundant!</p>\n<h5>Constructor Arguments</h5>\n<p>Constructors can carry extra data in a space-separated list.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> account =\n| <span class="hljs-type">None</span>\n| <span class="hljs-type">Instagram</span> string\n| <span class="hljs-type">Facebook</span> string int;</code></pre>\n      </div>\n<p>Here, <code>Instagram</code> carries a <code>string</code> and <code>Facebook</code> carries a <code>string</code> and an <code>int</code>. Usage:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myAccount = <span class="hljs-type">Facebook</span> <span class="hljs-string">"Josh"</span> <span class="hljs-number">26</span>;\n<span class="hljs-keyword">let</span> friendAccount = <span class="hljs-type">Instagram</span> <span class="hljs-string">"Jenny"</span>;</code></pre>\n      </div>\n<p><strong>Note</strong> how using a constructor is like calling a function! It\'s as if <code>Facebook</code> was a function that accepts two arguments. This isn\'t a coincidence; there\'s a reason why a constructor\'s data is called "argument".</p>\n<p><strong>Note</strong>: careful not to confuse a constructor with e.g. 2 arguments with a constructor carrying a single tuple argument:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> account =\n| <span class="hljs-type">Facebook</span> string int <span class="hljs-comment">/* 2 arguments */</span>\n<span class="hljs-keyword">type</span> account2 =\n| <span class="hljs-type">Instagram</span> (string, int) <span class="hljs-comment">/* 1 argument - happens to be a 2-tuple */</span></code></pre>\n      </div>\n<h5>Using Switch with Constructors Arguments</h5>\n<p>The <code>switch</code> expression can also let you "open up" a variant and bind its arguments to names you can refer to.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> account =\n| <span class="hljs-type">None</span>\n| <span class="hljs-type">Instagram</span> string;\n| <span class="hljs-type">Facebook</span> string int\n<span class="hljs-keyword">let</span> myAccount = <span class="hljs-type">Facebook</span> <span class="hljs-string">"Josh"</span> <span class="hljs-number">26</span>;\n...\n<span class="hljs-keyword">let</span> greeting = <span class="hljs-keyword">switch</span> (myAccount) {\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"Hi!"</span>\n| <span class="hljs-type">Facebook</span> name age =&gt;\n  <span class="hljs-string">"Hi "</span> ^ name ^ <span class="hljs-string">", you\'re "</span> ^ (string_of_int age) ^ <span class="hljs-string">"-year-old."</span>\n| <span class="hljs-type">Instagram</span> name =&gt; <span class="hljs-string">"Hello "</span> ^ name ^ <span class="hljs-string">"!"</span>\n}</code></pre>\n      </div>\n<p>This is called pattern-matching. It\'s a stronger version of destructuring, often found in other languages.</p>\n<h3>(Linked) List</h3>\n<p>Lists are homogeneous, immutable, and support fast <code>O(1)</code> append at the head of the list.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myList = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];\n<span class="hljs-keyword">let</span> anotherList = [<span class="hljs-number">0</span>, ...myList]; <span class="hljs-comment">/* myList didn\'t mutate */</span></code></pre>\n      </div>\n<p>Under the hood, a list is just a normal variant with a neat syntax. To illustrate this, here\'s how you\'d declare your own int list type, without the nice syntax:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> myListType = <span class="hljs-type">Empty</span> | <span class="hljs-type">NonEmpty</span> int myListType;\n<span class="hljs-keyword">let</span> myList = <span class="hljs-type">NonEmpty</span> <span class="hljs-number">1</span> (<span class="hljs-type">NonEmpty</span> <span class="hljs-number">2</span> (<span class="hljs-type">NonEmpty</span> <span class="hljs-number">3</span> <span class="hljs-type">Empty</span>));\n<span class="hljs-comment">/* basically [1, 2, 3] */</span></code></pre>\n      </div>\n<h3>Array</h3>\n<p>Arrays are like lists, except mutable and support fast random access, for performance-sensitive scenarios.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myArray = [|<span class="hljs-string">"hello"</span>, <span class="hljs-string">"world"</span>, <span class="hljs-string">"how are you"</span>|];\n<span class="hljs-keyword">let</span> world = myArray.(<span class="hljs-number">1</span>);\n<span class="hljs-type">Array</span>.<span class="hljs-keyword">set</span> myArray <span class="hljs-number">0</span> <span class="hljs-string">"hey"</span>;\n<span class="hljs-comment">/* now [|"hey", "world", "how are you"|] */</span></code></pre>\n      </div>',frontmatter:{title:"Built-in Data Types"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/data-types.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-data-types-65310103f28dcbe67cc0.js.map