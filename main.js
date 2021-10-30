$(function(){
  searchword = function(){
    let searchtext = $(this).val();
    $(".target-text").each(function(index){
      let targettext = $(this).text();
      let original_class = `.photo_box${index}`;
      if (targettext.indexOf(searchtext) == -1){
        $(original_class).addClass("hidden");
      }else{
        $(original_class).removeClass("hidden");
      }
    });
  };
  $(".filter").on("input", searchword);
});
