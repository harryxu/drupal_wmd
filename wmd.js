;(function($){

$(function(){
    var editor = $('#edit-body').find('textarea.text-full');
    if (editor.length > 0) {
        editor.before($('<div id="wmd-toolbar" class="wmd-toolbar"></div>'));
        var taid = editor.attr('id');
        new WMD(taid, "wmd-toolbar");
    }
});

})(jQuery);
