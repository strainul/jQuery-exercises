// 1. Mergi in top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// 2. Nu poti da click dreapta
$(function() {
	$(this).bind("contextmenu", function(e) {
		e.preventDefault();
	});
});

// 3. Dezactivez butonul "submit"
$(document).ready(function() {
  var $submit = $('input[type="submit"]');
  $submit.prop('disabled', true);
  $('input[type="text"]').on('input change', function() { //'input change keyup paste'
      $submit.prop('disabled', !$(this).val().length);
  });
});

// 4. Blink text
function blink_text() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}
setInterval(blink_text, 10);

// 5. Tabel text zebra
$(document).ready(function(){
	$("tr:odd").addClass("zebra");
});

// 6. Limitați introducerea caracterelor într-un textarea, inclusiv afișând câte caractere mai sunt disponibile.
var maxLength = 15;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});
    
// 7. Verificati daca e un obiect jQuery
$('#saftey') instanceof jQuery;
console.log($('#saftey') instanceof jQuery);


// 8.Ștergeți toate rândurile dintr-un tabel cu excepția primului folosind jQuery.
$(document).ready(function(){ 
  $('#button1').click(function(){ 
    $("#myTable").find("tr:gt(0)").remove();
  });
});

// 9.Schimbati alternativ culoarea unui text la apasarea unui buton.
$(document).ready(function(){
  $("#colorButton").click(function(){
    $("p").css("color", "red");
  });
});

// 10. Găsiți clasa CSS a  elementului pe care s-a dat click
$("li").click(function() {
  var colorClass = this.className;
  alert('Clasa este' + colorClass);
});

// 11. Eliminați atributul disabled folosind jQuery.
$(document).ready(function(){
  $("#remove").click(function(){
    $("p").removeAttr("style");
  });
});

// 12. Găsiți lățimea totală a unui element în jQuery.
$(document).ready(function(){
  $("#widthElement").click(function(){
    alert("Width of div: " + $("#divElement").width());
  });
});

// 13.Adăugați un atribut utilizând jQuery.
$(document).ready(function(){
  $("#imgButton").click(function(){
    $("img").attr("width", "500");
  });
});

// 14. Folosind jQuery numărați fiecare element (inclusiv head, body, etc.) în document.
  $("#countElements").click(function(){
  var elementCount = $( "*" ).css( "border", "3px solid red" ).length;
  $( "body" ).prepend( "<h3>" + elementCount + " elements found</h3>" );
  });

  // 15. Afișați un mesaj atunci când focalizarea este îndepărtată dintr-un element.
  $(document).ready(function(){
    $("#target").blur(function(){
      alert("This input field has lost its focus.");
    });
  });
  
  
  // 16. Având o listă de intrări radio, afisati eticheta  celei bifate într-un div separat, pe click.
  jQuery(function () {
    var $contents = $('.contents').hide();
    $('.trigger').change(function () {
        $contents.hide();
        $($(this).data('target')).show()
    })
})

// 17. Având o listă cu casetele de selectare, afisti etichetele celor verificate într-un div separat.
$('#pct').find('input:checked').each(function(){
   var values = [];
   values.push($(this).val());
   alert(pct-output);
})


// 18. Obțineți stilurile (lățimea, înălțimea, culoarea textului și culoarea de fundal) a unei div pe care s-a dat click.
$( "#divColor" ).click(function() {
    var color = $( this ).css( "background-color");
    var fontSS = $( this ).css( "font-size");
  $( "#divColor1" ).html( "That div is " + color + " " + fontSS +".");
});


// 19. Faceți clic pe un cuvânt din paragraf și evidențiați-l.
var words = $( "#highlight" ).first().text().split( /\s+/ );
var text = words.join( "</span> <span>" );
$( "#highlight" ).first().html( "<span>" + text + "</span>" );
$( "span" ).on( "click", function() {
$( this ).css( "background-color", "red" );
});


// 20. Găsiti toate elementele care sunt goale (nu au elemente sau noduri text ca si copil)
$("*:not(:has(*))");
console.log($("*:not(:has(*))"));

