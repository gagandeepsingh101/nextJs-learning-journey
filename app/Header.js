import Link from 'next/link'
import Search from "/components/client/Search";

const Header = () => {
  return (
    <nav className='flex bg-yellow-100 p-4 justify-between'>
    <Link href={"/"}>Home</Link>      
    <Link href={"/about"}>About</Link>      
    <Link href={"/contact"}>Contact</Link>      
    <Search></Search>
    </nav>
  )
}

export default Header
