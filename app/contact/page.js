import React from 'react'
import ServerComponent from '../components/server/ServerComponent'
import Contact from './contact'

// It is correct way to used server side component in client component
const Page = () => {
  return (
    // here we value from server side component to client side component it should be unique and fixed rather function
    <Contact value={"Nice"} childern={<ServerComponent/>}>
    </Contact>
  )
}

export default Page

/** This will work it is not correct way to used server side component in client component */
// const Contact = () => {
//   return (
//     <div>
//     <h1>COntact Page</h1>
//     <ServerComponent></ServerComponent>
//     </div>
//   )
// }

// export default Contact
