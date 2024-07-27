# Projects

## Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-64n9i3?file=index.html)


```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "pink":
        body.style.backgroundColor = "pink";
        break;
      case "purple":
        body.style.backgroundColor = "purple";
        break;
      default:
        console.log("No matching color found");
    }
  });
});

```