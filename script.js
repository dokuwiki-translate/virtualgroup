/**
 * Add JavaScript confirmation to the User Delete button
 */
jQuery(function(){
    jQuery('*.vg_del').click(function(){
        return confirm(LANG.del_confirm);
    });
});
