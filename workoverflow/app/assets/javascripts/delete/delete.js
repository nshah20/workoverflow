$(function() {
  $(".project_delete").on("ajax:success", function(e) {
    var listItem = $(e.target).closest("tr");
    listItem.remove();
  });
});

$(function() {
  $(".comment_delete").on("ajax:success", function(e) {
    var listItem = $(e.target).parent();
    listItem.remove();
  });
});