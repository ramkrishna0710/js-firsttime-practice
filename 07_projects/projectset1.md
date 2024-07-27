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


## Project Two
```javascript

    const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    // Show the result
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    const weightGuideDiv = document.createElement('div');
    weightGuideDiv.id = 'weight-guide-result';

    if (bmi < 18.6) {
      weightGuideDiv.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightGuideDiv.innerHTML = `<span>Normal Weight</span>`;
    } else {
      weightGuideDiv.innerHTML = `<span>Over Weight</span>`;
    }

    // Append the weight guide result
    results.appendChild(weightGuideDiv);
  }
});

```