// Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
counter = function() {
  var value = $('textarea#micropost_content').val();

  if (value.length == 0) {
    $('#charCount').html(140);
    return;
  }

  var charCount = value.trim().length;
  $('#charCount').html(140 - charCount);
};

$(document).ready(function() {
  $('textarea#micropost_content').change(counter);
  $('textarea#micropost_content').keydown(counter);
  $('textarea#micropost_content').keypress(counter);
  $('textarea#micropost_content').keyup(counter);
  $('textarea#micropost_content').blur(counter);
  $('textarea#micropost_content').focus(counter);
});
