import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import MateriCrud from './materiCRUD';
import MateriRestRouter from './materiRestRouter';
import MateriRedux from './materiRedux';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MateriRedux />
    </>
  )
}

export default App
