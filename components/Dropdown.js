import Link from 'next/link'

function Dropdown() {
    return (
        <div className='dropdown'>

            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/blog'><li>Blog</li></Link>
            <Link href='/contact'><li>Contact</li></Link>

        </div>
    )
}

export default Dropdown