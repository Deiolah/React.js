import React from 'react';
//import logo from './logo.svg';
//import './App.css';//

import functcomp from './COMPONENT.js/functcomp';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <functcomp></functcomp>
    
    </div>
    
  );
}

export default App;
// Reusability is when one component can be used over and over again//
// Nested means, one component can consist of several other components //
// Render method//
// Collect propertes from other components//

// Types of components.. stateless funtional and stateful class//
// stateless functional is a javascript function that return HTML can be saved in a .js or a .jsx file//
// stateless class is a regular class that MUST contain a "render" method can also be saved in a .js or a .jsx file it also includes extend//
// app.js is the main componenet that gets rendered into the DOM//
// app.js is a stateless functional component //
// Export is to move a componenet to a file or module, while Import is to move the component into a file or module//
//Types of Export: Default export, and Just Export; Default:JUST one object, //