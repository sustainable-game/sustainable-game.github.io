$( document ).ready(function(){

  // 横のナビゲータの設定
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();

  // 導入のところ
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  // 円形のボタン
  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();

  // 文字入力制限付きのinput-field
  $('input#input_text').characterCounter();
  $('div.input-field span:last-child').remove();

  // セレクトボックス
  $('select').material_select();

  // カレンダーを使った日付入力
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });


  // アンカーへスクロールして移動
  // 参考http://memo.ravenalala.org/scroll-to-anchor/
  $('a[href*=#]').click(function() {
	var target = $(this.hash);
	//if (target.length) {
	if (target) {
		var targetOffset = target.offset().top;
		$('html,body').animate({scrollTop: targetOffset},400,"easeInOutQuart");
		return false;
		}
	});

  // google-code-prettify
  //prettyPrint();

});
