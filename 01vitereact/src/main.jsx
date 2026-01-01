import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello React !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//       rel: 'noopener noreferrer'
//   },
//   children: 'Click Me To Visit Google!'
// }

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
);

const anotherusername = "Bhanu";

const ReactElement = React.createElement(
  'a',
  {
    href: "https://www.google.com/",
    target: "_blank",
  },
  'Click Me To Visit Google! ',
  anotherusername
)

createRoot(document.getElementById('root')).render(
  ReactElement
)
