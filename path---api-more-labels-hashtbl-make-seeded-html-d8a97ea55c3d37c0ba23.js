webpackJsonp([235],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-make-seeded-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.MakeSeeded.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="MoreLabels.Hashtbl.Make.html" title="MoreLabels.Hashtbl.Make">Previous</a>\n&#xA0;<a class="up" href="MoreLabels.Hashtbl.html" title="MoreLabels.Hashtbl">Up</a>\n&#xA0;</div>\n<h1>Functor <a href="type_MoreLabels.Hashtbl.MakeSeeded.html">MoreLabels.Hashtbl.MakeSeeded</a></h1>\n\n<pre><span class="keyword">module</span> MakeSeeded: (H: SeededHashedType) =&gt; SeededS with type key = H.t;\n</pre><table border="0" cellpadding="3" width="100%">\n<tbody><tr>\n<td align="left" valign="top" width="1%%"><b>Parameters: </b></td>\n<td>\n<table class="paramstable">\n<tbody><tr>\n<td align="center" valign="top" width="15%">\n<code>H</code></td>\n<td align="center" valign="top">:</td>\n<td><code class="type">SeededHashedType</code>\n</td></tr></tbody></table>\n</td>\n</tr>\n</tbody></table>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> key;\n</pre>\n\n\n<pre><span class="keyword">type</span> t &apos;a;\n</pre>\n\n\n<pre><span class="keyword">let</span> create: random::bool? =&gt; int =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> clear: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> reset: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> copy: t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> add: t &apos;a =&gt; key::key =&gt; data::&apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> remove: t &apos;a =&gt; key =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> find: t &apos;a =&gt; key =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> find_all: t &apos;a =&gt; key =&gt; list &apos;a;\n</pre>\n<pre><span class="keyword">let</span> replace: t &apos;a =&gt; key::key =&gt; data::&apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> mem: t &apos;a =&gt; key =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> iter: f::(key::key =&gt; data::&apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: f::(key::key =&gt; data::&apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; init::&apos;b =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> length: t &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> stats: t &apos;a =&gt; MoreLabels.Hashtbl.statistics;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.MakeSeeded.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-make-seeded-html-d8a97ea55c3d37c0ba23.js.map