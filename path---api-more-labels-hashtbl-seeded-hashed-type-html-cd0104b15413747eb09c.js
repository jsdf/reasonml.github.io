webpackJsonp([233],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-seeded-hashed-type-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.SeededHashedType.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="MoreLabels.Hashtbl.HashedType.html" title="MoreLabels.Hashtbl.HashedType">Previous</a>\n&#xA0;<a class="up" href="MoreLabels.Hashtbl.html" title="MoreLabels.Hashtbl">Up</a>\n&#xA0;<a class="post" href="MoreLabels.Hashtbl.S.html" title="MoreLabels.Hashtbl.S">Next</a>\n</div>\n<h1>Module type <a href="type_MoreLabels.Hashtbl.SeededHashedType.html">MoreLabels.Hashtbl.SeededHashedType</a></h1>\n\n<pre><span class="keyword">module</span> type SeededHashedType = Hashtbl.SeededHashedType;\n</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe type of the hashtable keys.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> equal: t =&gt; t =&gt; bool;\n</pre><div class="info ">\nThe equality predicate used to compare keys.<br>\n</div>\n\n<pre><span class="keyword">let</span> hash: int =&gt; t =&gt; int;\n</pre><div class="info ">\nA seeded hashing function on keys.  The first argument is\n          the seed.  It must be the case that if <code class="code">equal x y</code> is true,\n          then <code class="code">hash seed x = hash seed y</code> for any value of <code class="code">seed</code>.\n          A suitable choice for <code class="code">hash</code> is the function <a href="Hashtbl.html#VALseeded_hash"><code class="code">Hashtbl.seeded_hash</code></a>\n          below.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.SeededHashedType.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-seeded-hashed-type-html-cd0104b15413747eb09c.js.map