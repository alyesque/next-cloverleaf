import Link from 'next/link'

function Dropdown() {
    return (
        <div className='dropdown'>
            <li><Link href='/'>  Home  </Link></li>
            <li><Link href='/about'>  About </Link></li>
            <li> <Link href='/blog'> Blog  </Link></li>
            <li><Link href='/contact'>  Contact  </Link></li>

        </div>
    )
}

export default Dropdown