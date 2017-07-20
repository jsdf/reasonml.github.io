webpackJsonp([183],{"./node_modules/json-loader/index.js!./.cache/json/api-type-array-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Array.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;external&#xA0;length&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;=&#xA0;&quot;%array_length&quot;\n&#xA0;&#xA0;external&#xA0;get&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;=&#xA0;&quot;%array_safe_get&quot;\n&#xA0;&#xA0;external&#xA0;set&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;%array_safe_set&quot;\n&#xA0;&#xA0;external&#xA0;make&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;=&#xA0;&quot;caml_make_vect&quot;\n&#xA0;&#xA0;external&#xA0;create&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;=&#xA0;&quot;caml_make_vect&quot;\n&#xA0;&#xA0;val&#xA0;init&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;(int&#xA0;-&gt;&#xA0;&apos;a)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array\n&#xA0;&#xA0;val&#xA0;make_matrix&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;array\n&#xA0;&#xA0;val&#xA0;create_matrix&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;array\n&#xA0;&#xA0;val&#xA0;append&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;&apos;a&#xA0;array\n&#xA0;&#xA0;val&#xA0;concat&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;list&#xA0;-&gt;&#xA0;&apos;a&#xA0;array\n&#xA0;&#xA0;val&#xA0;sub&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;array\n&#xA0;&#xA0;val&#xA0;copy&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;&apos;a&#xA0;array\n&#xA0;&#xA0;val&#xA0;fill&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;blit&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;to_list&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;&apos;a&#xA0;list\n&#xA0;&#xA0;val&#xA0;of_list&#xA0;:&#xA0;&apos;a&#xA0;list&#xA0;-&gt;&#xA0;&apos;a&#xA0;array\n&#xA0;&#xA0;val&#xA0;iter&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;map&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;&apos;b)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;&apos;b&#xA0;array\n&#xA0;&#xA0;val&#xA0;iteri&#xA0;:&#xA0;(int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;mapi&#xA0;:&#xA0;(int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;b)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;&apos;b&#xA0;array\n&#xA0;&#xA0;val&#xA0;fold_left&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;&apos;b&#xA0;-&gt;&#xA0;&apos;a)&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;b&#xA0;array&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;val&#xA0;fold_right&#xA0;:&#xA0;(&apos;b&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a)&#xA0;-&gt;&#xA0;&apos;b&#xA0;array&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;external&#xA0;make_float&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;float&#xA0;array&#xA0;=&#xA0;&quot;caml_make_float_vect&quot;\n&#xA0;&#xA0;val&#xA0;sort&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;int)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;stable_sort&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;int)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;fast_sort&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;int)&#xA0;-&gt;&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;external&#xA0;unsafe_get&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;=&#xA0;&quot;%array_unsafe_get&quot;\n&#xA0;&#xA0;external&#xA0;unsafe_set&#xA0;:&#xA0;&apos;a&#xA0;array&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;%array_unsafe_set&quot;\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Array.html"}}}});
//# sourceMappingURL=path---api-type-array-html-c93c5c511eecf92cad92.js.map