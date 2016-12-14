function hello() {
  document.write("Hello, World");

}


$(document).ready(function(){
    $("p").click(function(){
        hello();
    });
});
