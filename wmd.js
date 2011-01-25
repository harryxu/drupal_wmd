;(function($){

$(function(){
    var editor = $('#edit-body-und-0-value');
    editor.before($('<div id="wmd-toolbar" class="wmd-toolbar"></div>'));
    //editor.parent().append($('<div id="wmd-preview" class="wmd-preview"></preview>'));
    var ta = $('#edit-body').find('textarea');
    if (ta.length > 0) {
        var taid = ta.attr('id');
        new WMD(taid, "wmd-toolbar");
    }
});

})(jQuery)
