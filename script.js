// function([string1, string2],target id,[color1,color2])  

function moveCircle(e) {
  TweenMax.to($(".circle"), 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY
    }, ease: Power2.easeOut
  });
}

$(window).on('mousemove', moveCircle);


TweenMax.to($(".circle"),0.4,{scale:2,autoAlpha:1});


$("h1, a").mouseover(function(){
  var largura = $(this).width();
  //  console.log(largura/10);
  TweenMax.to($(".circle"),0.2,{scale:largura/4});
});
$("h1, a").mouseout(function(){

  TweenMax.to($(".circle"),0.4,{scale:2});
});

consoleText(['全链路体验设计', '原型创意设计', '效率工具开发'], 'text',['#000','#000','#000']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}