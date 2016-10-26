console.log(this === window);

function checkThis() {
  'use strict';
  console.log(this);
}
checkThis();

function Chair(style, color) {
  this.style = style;
  this.color = color;
  console.log(this);
};

var sofa = new Chair("sofa", "green");

var couch = {
  color: 'green',
  f: function() {
    return this;
  }
};

console.log(couch.f());

var els = $("pix");

function handleClick(e) {
  console.log(this);
}

for(var i=0; i < els.length; i++) {
  els[i].addEventListener("click", handleClick, false);
}

handleClick();