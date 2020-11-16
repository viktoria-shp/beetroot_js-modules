
import {basics} from './basics_js';
basics();

import {data_js} from './data_js';
data_js();

import {cicle} from './cicle_js';
cicle();

import {fun_js} from './function_js';
fun_js();
    

$('.accordion-toggle').click(function(e) {
    e.preventDefault();  
  $("a:first-of-type").removeClass('chev');
  
  let $this = $(this);
  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .accordion-inner').removeClass('show');
      $this.parent().parent().find('li .accordion-inner').slideUp(350);
      $this.toggleClass('chev');
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

