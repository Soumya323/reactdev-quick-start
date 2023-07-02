import { useState } from 'react';
import './App.css';

function App() {

    var showBig = false;

  var [clickCount, setClickCount] = useState(0);

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  var listItems =
    products.map(product => <li key={product.id}>{product.title}</li>);

  function onClicking() {
    clickCount++;
    setClickCount(clickCount);
  }

  var toShow;

  if(showBig)
  {
    toShow =<h1>Hello Big letter</h1>;
  }else
  {
    toShow =<h3>Hello small letter</h3>; 
  }

  return (
    <div className="App">
      <h1>Hellooo</h1>
      <ul>
        {listItems}
      </ul>
      <NewButton clickTimes={clickCount} onClicked={onClicking} />
      <NewButton clickTimes={clickCount} onClicked={onClicking} />
      {toShow}
    </div>
  );
}

export default App;

function NewButton({ clickTimes, onClicked }) {

  function handleClick() {
    onClicked();
  }

  return (
    <div>
      <button onClick={handleClick}>Click Button + {clickTimes}</button>
    </div>
  );
}




