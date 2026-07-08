// Collapsing mobile menu

jQuery(function($) {
    $(document).ready(function() {
        $("body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children").append('<a href="#" class="mobile-toggle-icon"></a>');
        $('ul.et_mobile_menu li.menu-item-has-children .mobile-toggle-icon, ul.et_mobile_menu li.page_item_has_children .mobile-toggle-icon').click(function(event) {
            event.preventDefault();
            $(this).parent('li').toggleClass('mobile-toggle-open');
            $(this).parent('li').find('ul.children').first().toggleClass('visible');
            $(this).parent('li').find('ul.sub-menu').first().toggleClass('visible');
        });
        iconFINAL = 'P';
        $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children').attr('data-icon', iconFINAL);
        $('.mobile-toggle-icon').on('mouseover', function() {
            $(this).parent().addClass('active-toggle');
        }).on('mouseout', function() {
            $(this).parent().removeClass('active-toggle');
        })
    });
});

// Slide-in label trigger
  
jQuery(document).ready(function(){
    jQuery(".slide-in-label-column").click(function(){
        jQuery(".slide-in-section").toggleClass("show-slide-in");
    });
});
	
	
jQuery(document).ready(function(){
    jQuery(".close-slide-in").click(function(){
        jQuery(".slide-in-section").removeClass("show-slide-in");
    });
}); 

// Slide-in scroll trigger

jQuery(document).ready(function($) {
    jQuery('.scroll-trigger-waypoint').waypoint(function() {
       jQuery('.scroll-trigger-slide-in').toggleClass('scroll-show-slide-in');
       
    }, {offset: '97%'}); 
  });
  
jQuery(document).ready(function(){
    jQuery(".close_scroll_slide_in").click(function(){
        jQuery(".scroll_trigger_slide_in").removeClass("scroll_show_slide_in");
      this.destroy()
    });
}); 

