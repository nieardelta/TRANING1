import logo from '/logo-name.svg'

import { useState } from 'react'

export default function Header() {
  const [now, setNow] = useState(new Date())
setInterval(() => setNow (new Date()), 1000)

    return (
      <header>
        <img src={logo} alt={'Delta'} />
        

  
          <span>Время сейчас: { now.toLocaleTimeString() }</span>
        </header>
    )
  }