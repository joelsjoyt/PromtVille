import '@styles/globals.css'
import { children } from 'react'

import Nav from '@components/nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "PromptVille",
  description: "Discover &hare prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <main className='app'>
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout