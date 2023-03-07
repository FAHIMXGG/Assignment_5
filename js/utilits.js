//area calculation append function
let numItemsAppended = 0;
function createResultListItem(name, value, unit, buttonLabel, onClickFunction) {
    if (numItemsAppended >= 7) {
        alert('Maximum generated reload for more :)')
        return;
      }
    const Place = document.getElementById('result');
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const nameSpan = document.createElement('div');
    const valueSpan = document.createElement('div');
    const insideList = document.createElement('div');
  
    btn.classList.add('result-btn');
    insideList.style.display='flex';
    insideList.style.justifyContent ='space-between';
    insideList.style.alignItems ='center';
  
    btn.innerHTML = buttonLabel;
    btn.addEventListener('click', onClickFunction);
    nameSpan.innerText = name;
    valueSpan.innerText = value + unit;
    valueSpan.innerHTML += '<sup>2</sup>'
  
    insideList.appendChild(nameSpan);
    insideList.appendChild(valueSpan);
    insideList.appendChild(btn);
  
    li.appendChild(insideList);
    Place.appendChild(li);

    numItemsAppended++;
  }
  

//input function
function InputValue(InputId){
    const getInputValue = document.getElementById(InputId);
    const InputValueString = getInputValue.value;
    const InputValue = parseFloat(InputValueString);
    return InputValue;
}