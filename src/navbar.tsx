import * as React from 'react';



export default function Navbar() { 

    return (
        <nav className='m-5'>
            <ul className='z-800 relative'>
                <li><a href="/">Contacts</a></li>
                <li> <a href="/Map">Maps and Charts</a></li>
            </ul>
        </nav>
    )
}