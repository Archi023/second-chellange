import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { add,sub,mul,div } from './Calc';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<App/>
 <ol>
  <li>Addtion of two number:{add(40,4)}</li>
  <li>Subtraction of two number:{sub(40,4)}</li>
  <li>Multiplication of two number:{mul(40,4)}</li>
  <li>Division of two number:{div(10,5)}</li>
 </ol>
</>
);
reportWebVitals();
