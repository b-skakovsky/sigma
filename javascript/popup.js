function closePopup() {
  $.magnificPopup.close();
}
$(".popup").magnificPopup({
  type: 'inline',
 removalDelay: 150,
 callbacks: {
     beforeOpen: function () {
         this.st.mainClass = this.st.el.attr('data-effect');
     }
 },
 midClick: true
});
