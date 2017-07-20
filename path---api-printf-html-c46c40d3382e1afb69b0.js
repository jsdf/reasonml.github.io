webpackJsonp([207],{"./node_modules/json-loader/index.js!./.cache/json/api-printf-html.json":function(e,o){e.exports={data:{file:{relativePath:"api/Printf.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Printexc.html" title="Printexc">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Queue.html" title="Queue">Next</a>\n</div>\n<h1>Module <a href="type_Printf.html">Printf</a></h1>\n\n<pre><span class="keyword">module</span> Printf: sig .. end</pre><div class="info module top">\nFormatted output functions.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> fprintf: Pervasives.out_channel =&gt; Pervasives.format &apos;a Pervasives.out_channel unit =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">fprintf outchan format arg1 ... argN</code> formats the arguments\n   <code class="code">arg1</code> to <code class="code">argN</code> according to the format string <code class="code">format</code>, and\n   outputs the resulting string on the channel <code class="code">outchan</code>.\n<p>\n\n   The format string is a character string which contains two types of\n   objects: plain characters, which are simply copied to the output\n   channel, and conversion specifications, each of which causes\n   conversion and printing of arguments.\n</p><p>\n\n   Conversion specifications have the following form:\n</p><p>\n\n   <code class="code">% [flags] [width] [.precision] type</code>\n</p><p>\n\n   In short, a conversion specification consists in the <code class="code">%</code> character,\n   followed by optional modifiers and a type which is made of one or\n   two characters.\n</p><p>\n\n   The types and their meanings are:\n</p><p>\n</p><ul>\n<li><code class="code">d</code>, <code class="code">i</code>: convert an integer argument to signed decimal.</li>\n<li><code class="code">u</code>, <code class="code">n</code>, <code class="code">l</code>, <code class="code">L</code>, or <code class="code">N</code>: convert an integer argument to\n     unsigned decimal.  Warning: <code class="code">n</code>, <code class="code">l</code>, <code class="code">L</code>, and <code class="code">N</code> are\n     used for <code class="code">scanf</code>, and should not be used for <code class="code">printf</code>.</li>\n<li><code class="code">x</code>: convert an integer argument to unsigned hexadecimal,\n     using lowercase letters.</li>\n<li><code class="code">X</code>: convert an integer argument to unsigned hexadecimal,\n     using uppercase letters.</li>\n<li><code class="code">o</code>: convert an integer argument to unsigned octal.</li>\n<li><code class="code">s</code>: insert a string argument.</li>\n<li><code class="code">S</code>: convert a string argument to OCaml syntax (double quotes, escapes).</li>\n<li><code class="code">c</code>: insert a character argument.</li>\n<li><code class="code">C</code>: convert a character argument to OCaml syntax\n     (single quotes, escapes).</li>\n<li><code class="code">f</code>: convert a floating-point argument to decimal notation,\n     in the style <code class="code">dddd.ddd</code>.</li>\n<li><code class="code">F</code>: convert a floating-point argument to OCaml syntax (<code class="code">dddd.</code>\n     or <code class="code">dddd.ddd</code> or <code class="code">d.ddd e+-dd</code>).</li>\n<li><code class="code">e</code> or <code class="code">E</code>: convert a floating-point argument to decimal notation,\n     in the style <code class="code">d.ddd e+-dd</code> (mantissa and exponent).</li>\n<li><code class="code">g</code> or <code class="code">G</code>: convert a floating-point argument to decimal notation,\n     in style <code class="code">f</code> or <code class="code">e</code>, <code class="code">E</code> (whichever is more compact).</li>\n<li><code class="code">B</code>: convert a boolean argument to the string <code class="code">true</code> or <code class="code">false</code></li>\n<li><code class="code">b</code>: convert a boolean argument (deprecated; do not use in new\n     programs).</li>\n<li><code class="code">ld</code>, <code class="code">li</code>, <code class="code">lu</code>, <code class="code">lx</code>, <code class="code">lX</code>, <code class="code">lo</code>: convert an <code class="code">int32</code> argument to\n     the format specified by the second letter (decimal, hexadecimal, etc).</li>\n<li><code class="code">nd</code>, <code class="code">ni</code>, <code class="code">nu</code>, <code class="code">nx</code>, <code class="code">nX</code>, <code class="code">no</code>: convert a <code class="code">nativeint</code> argument to\n     the format specified by the second letter.</li>\n<li><code class="code">Ld</code>, <code class="code">Li</code>, <code class="code">Lu</code>, <code class="code">Lx</code>, <code class="code">LX</code>, <code class="code">Lo</code>: convert an <code class="code">int64</code> argument to\n     the format specified by the second letter.</li>\n<li><code class="code">a</code>: user-defined printer. Take two arguments and apply the\n     first one to <code class="code">outchan</code> (the current output channel) and to the\n     second argument. The first argument must therefore have type\n     <code class="code">out_channel -&gt; &apos;b -&gt; unit</code> and the second <code class="code">&apos;b</code>.\n     The output produced by the function is inserted in the output of\n     <code class="code">fprintf</code> at the current point.</li>\n<li><code class="code">t</code>: same as <code class="code">%a</code>, but take only one argument (with type\n     <code class="code">out_channel -&gt; unit</code>) and apply it to <code class="code">outchan</code>.</li>\n<li><code class="code">{ fmt %}</code>: convert a format string argument to its type digest.\n     The argument must have the same type as the internal format string\n     <code class="code">fmt</code>.</li>\n<li><code class="code">( fmt %)</code>: format string substitution. Take a format string\n     argument and substitute it to the internal format string <code class="code">fmt</code>\n     to print following arguments. The argument must have the same\n     type as the internal format string <code class="code">fmt</code>.</li>\n<li><code class="code">!</code>: take no argument and flush the output.</li>\n<li><code class="code">%</code>: take no argument and output one <code class="code">%</code> character.</li>\n<li><code class="code">@</code>: take no argument and output one <code class="code">@</code> character.</li>\n<li><code class="code">,</code>: take no argument and output nothing: a no-op delimiter for\n     conversion specifications.</li>\n</ul>\n\n   The optional <code class="code">flags</code> are:<ul>\n<li><code class="code">-</code>: left-justify the output (default is right justification).</li>\n<li><code class="code">0</code>: for numerical conversions, pad with zeroes instead of spaces.</li>\n<li><code class="code">+</code>: for signed numerical conversions, prefix number with a <code class="code">+</code>\n     sign if positive.</li>\n<li>space: for signed numerical conversions, prefix number with a\n     space if positive.</li>\n<li><code class="code">#</code>: request an alternate formatting style for the hexadecimal\n     and octal integer types (<code class="code">x</code>, <code class="code">X</code>, <code class="code">o</code>, <code class="code">lx</code>, <code class="code">lX</code>, <code class="code">lo</code>, <code class="code">Lx</code>,\n     <code class="code">LX</code>, <code class="code">Lo</code>).</li>\n</ul>\n\n   The optional <code class="code">width</code> is an integer indicating the minimal\n   width of the result. For instance, <code class="code">%6d</code> prints an integer,\n   prefixing it with spaces to fill at least 6 characters.\n<p>\n\n   The optional <code class="code">precision</code> is a dot <code class="code">.</code> followed by an integer\n   indicating how many digits follow the decimal point in the <code class="code">%f</code>,\n   <code class="code">%e</code>, and <code class="code">%E</code> conversions. For instance, <code class="code">%.4f</code> prints a <code class="code">float</code> with\n   4 fractional digits.\n</p><p>\n\n   The integer in a <code class="code">width</code> or <code class="code">precision</code> can also be specified as\n   <code class="code">*</code>, in which case an extra integer argument is taken to specify\n   the corresponding <code class="code">width</code> or <code class="code">precision</code>. This integer argument\n   precedes immediately the argument to print.\n   For instance, <code class="code">%.*f</code> prints a <code class="code">float</code> with as many fractional\n   digits as the value of the argument given before the float.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> printf: Pervasives.format &apos;a Pervasives.out_channel unit =&gt; &apos;a;\n</pre><div class="info ">\nSame as <a href="Printf.html#VALfprintf"><code class="code">Printf.fprintf</code></a>, but output on <code class="code">stdout</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> eprintf: Pervasives.format &apos;a Pervasives.out_channel unit =&gt; &apos;a;\n</pre><div class="info ">\nSame as <a href="Printf.html#VALfprintf"><code class="code">Printf.fprintf</code></a>, but output on <code class="code">stderr</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> sprintf: Pervasives.format &apos;a unit string =&gt; &apos;a;\n</pre><div class="info ">\nSame as <a href="Printf.html#VALfprintf"><code class="code">Printf.fprintf</code></a>, but instead of printing on an output channel,\n   return a string containing the result of formatting the arguments.<br>\n</div>\n\n<pre><span class="keyword">let</span> bprintf: Buffer.t =&gt; Pervasives.format &apos;a Buffer.t unit =&gt; &apos;a;\n</pre><div class="info ">\nSame as <a href="Printf.html#VALfprintf"><code class="code">Printf.fprintf</code></a>, but instead of printing on an output channel,\n   append the formatted arguments to the given extensible buffer\n   (see module <a href="Buffer.html"><code class="code">Buffer</code></a>).<br>\n</div>\n\n<pre><span class="keyword">let</span> ifprintf: &apos;a =&gt; Pervasives.format &apos;b &apos;a unit =&gt; &apos;b;\n</pre><div class="info ">\nSame as <a href="Printf.html#VALfprintf"><code class="code">Printf.fprintf</code></a>, but does not print anything.\n    Useful to ignore some material when conditionally printing.<br>\n<b>Since</b> 3.10.0<br>\n</div>\n<br>\nFormatted output functions with continuations.<br>\n\n<pre><span class="keyword">let</span> kfprintf:\n  (Pervasives.out_channel =&gt; &apos;a) =&gt;\n  Pervasives.out_channel =&gt;\n  Pervasives.format4 &apos;b Pervasives.out_channel unit &apos;a =&gt;\n  &apos;b;\n</pre><div class="info ">\nSame as <code class="code">fprintf</code>, but instead of returning immediately,\n   passes the out channel to its first argument at the end of printing.<br>\n<b>Since</b> 3.09.0<br>\n</div>\n\n<pre><span class="keyword">let</span> ikfprintf:\n  (Pervasives.out_channel =&gt; &apos;a) =&gt;\n  Pervasives.out_channel =&gt;\n  Pervasives.format4 &apos;b Pervasives.out_channel unit &apos;a =&gt;\n  &apos;b;\n</pre><div class="info ">\nSame as <code class="code">kfprintf</code> above, but does not print anything.\n   Useful to ignore some material when conditionally printing.<br>\n<b>Since</b> 4.0<br>\n</div>\n\n<pre><span class="keyword">let</span> ksprintf: (string =&gt; &apos;a) =&gt; Pervasives.format4 &apos;b unit string &apos;a =&gt; &apos;b;\n</pre><div class="info ">\nSame as <code class="code">sprintf</code> above, but instead of returning the string,\n   passes it to the first argument.<br>\n<b>Since</b> 3.09.0<br>\n</div>\n\n<pre><span class="keyword">let</span> kbprintf: (Buffer.t =&gt; &apos;a) =&gt; Buffer.t =&gt; Pervasives.format4 &apos;b Buffer.t unit &apos;a =&gt; &apos;b;\n</pre><div class="info ">\nSame as <code class="code">bprintf</code>, but instead of returning immediately,\n   passes the buffer to its first argument at the end of printing.<br>\n<b>Since</b> 3.10.0<br>\n</div>\n<br>\nDeprecated<br>\n\n<pre><span class="keyword">let</span> kprintf: (string =&gt; &apos;a) =&gt; Pervasives.format4 &apos;b unit string &apos;a =&gt; &apos;b;\n</pre><div class="info ">\nA deprecated synonym for <code class="code">ksprintf</code>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Printf.html"}}}});
//# sourceMappingURL=path---api-printf-html-c46c40d3382e1afb69b0.js.map