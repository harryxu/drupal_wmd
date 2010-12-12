;(function($){

$(function(){
    var editor = $('#edit-body');
    editor.before($('<div id="wmd-toolbar" class="wmd-toolbar"></div>'));
    editor.parent().append($('<div id="wmd-preview" class="wmd-preview"></preview>'));
    new WMD("edit-body", "wmd-toolbar", { preview: "wmd-preview" });
});

})(jQuery)
