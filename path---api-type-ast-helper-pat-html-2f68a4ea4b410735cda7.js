webpackJsonp([165],{"./node_modules/json-loader/index.js!./.cache/json/api-type-ast-helper-pat-html.json":function(A,x){A.exports={data:{file:{relativePath:"api/type_Ast_helper.Pat.html",childRawHtml:{content:'<div class="ocamldoc">\n<code class="code">sig\n&#xA0;&#xA0;val&#xA0;mk&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Parsetree.pattern_desc&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;attr&#xA0;:&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;Parsetree.attribute&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;any&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;unit&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;var&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Ast_helper.str&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;alias&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;Ast_helper.str&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;constant&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Asttypes.constant&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;interval&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;Asttypes.constant&#xA0;-&gt;&#xA0;Asttypes.constant&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;tuple&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;list&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;construct&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;Ast_helper.lid&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;option&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;variant&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;Asttypes.label&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;option&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;record&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(Ast_helper.lid&#xA0;*&#xA0;Parsetree.pattern)&#xA0;list&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;Asttypes.closed_flag&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;array&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;list&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;or_&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;constraint_&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;Parsetree.core_type&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;type_&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Ast_helper.lid&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;lazy_&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;unpack&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Ast_helper.str&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;exception_&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;Parsetree.pattern\n&#xA0;&#xA0;val&#xA0;extension&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Ast_helper.loc&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?attrs:Ast_helper.attrs&#xA0;-&gt;&#xA0;Parsetree.extension&#xA0;-&gt;&#xA0;Parsetree.pattern\nend</code></div>'}}},pathContext:{relativePath:"api/type_Ast_helper.Pat.html"}}}});
//# sourceMappingURL=path---api-type-ast-helper-pat-html-2f68a4ea4b410735cda7.js.map