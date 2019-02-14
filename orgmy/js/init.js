(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
  $(document).ready(function(){
    $('.tabs').tabs();
  });
  var instance = M.Tabs.getInstance(elem);
  instance.select('tab_id');
  instance.updateTabIndicator()
})(jQuery); // end of jQuery name space
