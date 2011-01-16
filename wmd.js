;(function($){

$(function(){
    var editor = $('#edit-body-und-0-value');
    editor.before($('<div id="wmd-toolbar" class="wmd-toolbar"></div>'));
    //editor.parent().append($('<div id="wmd-preview" class="wmd-preview"></preview>'));
    new WMD("edit-body-und-0-value", "wmd-toolbar");
    //new WMD("edit-body-und-0-value", "wmd-toolbar", { preview: "wmd-preview" });
});

})(jQuery)
