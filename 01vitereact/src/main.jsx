import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello React !</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank',
      rel: 'noopener noreferrer'
  },
  children: 'Click Me To Visit Google!'
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
    // MyApp()

    ReactElement

)
