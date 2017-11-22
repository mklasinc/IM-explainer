window.onload= function(){
   document.sketch = new p5(outroSketch,'sketch_container');
   console.log('hello world');
   var my_button = document.getElementById('test_button');
   var myDiv = createDiv('this is some text');
   myDiv.remove();
   my_button.onclick = function(){
     console.log(document.sketch);
     //document.sketch.remove();

     console.log('we are clicked!');

     document.sketch = new p5(introSketch,'sketch_container');
   }
 }
