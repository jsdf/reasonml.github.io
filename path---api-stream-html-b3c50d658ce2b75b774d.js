webpackJsonp([189],{"./node_modules/json-loader/index.js!./.cache/json/api-stream-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Stream.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="StdLabels.html" title="StdLabels">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="String.html" title="String">Next</a>\n</div>\n<h1>Module <a href="type_Stream.html">Stream</a></h1>\n\n<pre><span class="keyword">module</span> Stream: sig .. end</pre><div class="info module top">\nStreams and parsers.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> t &apos;a;\n</pre>\n<div class="info ">\nThe type of streams holding values of type <code class="code">&apos;a</code>.<br>\n</div>\n\n\n<pre><span class="keyword">exception</span> Failure;\n</pre>\n<div class="info ">\nRaised by parsers when none of the first components of the stream\n   patterns is accepted.<br>\n</div>\n\n<pre><span class="keyword">exception</span> Error string;\n</pre>\n<div class="info ">\nRaised by parsers when the first component of a stream pattern is\n   accepted, but one of the following components is rejected.<br>\n</div>\n<br>\n<h6 id="6_Streambuilders">Stream builders</h6><br>\n\n<pre><span class="keyword">let</span> from: (int =&gt; option &apos;a) =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">Stream.from f</code> returns a stream built from the function <code class="code">f</code>.\n   To create a new stream element, the function <code class="code">f</code> is called with\n   the current stream count. The user function <code class="code">f</code> must return either\n   <code class="code">Some &lt;value&gt;</code> for a value or <code class="code">None</code> to specify the end of the\n   stream.\n<p>\n\n   Do note that the indices passed to <code class="code">f</code> may not start at <code class="code">0</code> in the\n   general case. For example, <code class="code">[&lt; &apos;0; &apos;1; Stream.from f &gt;]</code> would call\n   <code class="code">f</code> the first time with count <code class="code">2</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> of_list: list &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\nReturn the stream holding the elements of the list in the same\n   order.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_string: string =&gt; t char;\n</pre><div class="info ">\nReturn the stream of the characters of the string parameter.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_bytes: bytes =&gt; t char;\n</pre><div class="info ">\nReturn the stream of the characters of the bytes parameter.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">let</span> of_channel: Pervasives.in_channel =&gt; t char;\n</pre><div class="info ">\nReturn the stream of the characters read from the input channel.<br>\n</div>\n<br>\n<h6 id="6_Streamiterator">Stream iterator</h6><br>\n\n<pre><span class="keyword">let</span> iter: (&apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">Stream.iter f s</code> scans the whole stream s, applying function <code class="code">f</code>\n   in turn to each stream element encountered.<br>\n</div>\n<br>\n<h6 id="6_Predefinedparsers">Predefined parsers</h6><br>\n\n<pre><span class="keyword">let</span> next: t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\nReturn the first element of the stream and remove it from the\n   stream. Raise Stream.Failure if the stream is empty.<br>\n</div>\n\n<pre><span class="keyword">let</span> empty: t &apos;a =&gt; unit;\n</pre><div class="info ">\nReturn <code class="code">()</code> if the stream is empty, else raise <code class="code">Stream.Failure</code>.<br>\n</div>\n<br>\n<h6 id="6_Usefulfunctions">Useful functions</h6><br>\n\n<pre><span class="keyword">let</span> peek: t &apos;a =&gt; option &apos;a;\n</pre><div class="info ">\nReturn <code class="code">Some</code> of &quot;the first element&quot; of the stream, or <code class="code">None</code> if\n   the stream is empty.<br>\n</div>\n\n<pre><span class="keyword">let</span> junk: t &apos;a =&gt; unit;\n</pre><div class="info ">\nRemove the first element of the stream, possibly unfreezing\n   it before.<br>\n</div>\n\n<pre><span class="keyword">let</span> count: t &apos;a =&gt; int;\n</pre><div class="info ">\nReturn the current count of the stream elements, i.e. the number\n   of the stream elements discarded.<br>\n</div>\n\n<pre><span class="keyword">let</span> npeek: int =&gt; t &apos;a =&gt; list &apos;a;\n</pre><div class="info ">\n<code class="code">npeek n</code> returns the list of the <code class="code">n</code> first elements of\n   the stream, or all its remaining elements if less than <code class="code">n</code>\n   elements are available.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Stream.html"}}}});
//# sourceMappingURL=path---api-stream-html-b3c50d658ce2b75b774d.js.map