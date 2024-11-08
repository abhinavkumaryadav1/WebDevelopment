import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp()
{
  return(
    <div>
      <h1>Custom MyApp!</h1>
    </div>
  )
}

let anothervariable = "abhinavji"
const reactElement = React.createElement(
  /* syntax to create element through react is:-
  1) tag
  2)object
  3)text
  4) at last all variables are injected
   */

  'a',
  {href:'https://google.com', target:'_blank'},
  'click to visit google by creating react element manually'
  , anothervariable
)

createRoot(document.getElementById('root')).render(
  
reactElement  
)
