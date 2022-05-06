const makeBigger = () => {
   /*let my_header = document.getElementsByTagName('h1')[0];
   let content = document.getElementsByClassName("content")[0];
   let header_size = my_header.getAttribute("font-size");
   let content_size = content.getAttribute("font-size");*/
   /*my_header.setAttribute("font-size", "")*/
   /*size += 0.2;*/
   /*let size = document.getElementsByClassName('.content')[0];
   
   let b = size.getAttribute('font-size');*/
   /*let a1 = document.querySelector(".content");
   let a2 = a1.hasAttribute('class');
   alert(a2);
   a1 = a1.getAttribute("padding");
   alert(a1);
   document.querySelector('.content').style.fontSize = `${size}em`;
   document.querySelector('h1').style.fontSize = `${size+0.5}em`;*/

   // code for getting font-size was taken from https://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html
   let content = document.getElementsByClassName("content")[0];
   let style = window.getComputedStyle(content, null).getPropertyValue('font-size');
   let content_size = parseFloat(style); 
   let h1 = document.getElementsByTagName("h1")[0];
   let style_h1 = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   let h1_size = parseFloat(style_h1); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
   document.querySelector('.content').style.fontSize = `${content_size + 2}px`;
   document.querySelector('h1').style.fontSize = `${h1_size+4}px`;
   
};

const makeSmaller = () => {
   let content = document.getElementsByClassName("content")[0];
   let style = window.getComputedStyle(content, null).getPropertyValue('font-size');
   let content_size = parseFloat(style); 
   let h1 = document.getElementsByTagName("h1")[0];
   let style_h1 = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   let h1_size = parseFloat(style_h1); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
   document.querySelector('.content').style.fontSize = `${content_size - 2}px`;
   document.querySelector('h1').style.fontSize = `${h1_size - 4}px`;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

