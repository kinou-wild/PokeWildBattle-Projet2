import React from 'react'
import Contact from './Contact'
import './Contact.css'
import {Link} from 'react-router-dom'

const MyContactList = [
    {
        name: 'Stevie CUTMAN',
        avatar:'https://zupimages.net/up/19/45/1bjx.png',
        linkedIn:'www.linkedin.com/in/steviecutman'
    },
    {
        name: 'Solène TELLIER',
        avatar: 'https://zupimages.net/up/19/45/7rsa.png',
        linkedIn:'https://www.linkedin.com/in/sol%C3%A8ne-tellier-84b742154/'
    },
    {
        name: 'Anthony PORTIER',
        avatar:'https://zupimages.net/up/19/45/vsw5.png',
        linkedIn:'https://www.linkedin.com/in/anthony-portier-8a578994/'
    },
    {
        name: 'Kevin THOMANN',
        avatar:'https://zupimages.net/up/19/45/4y0m.png',
        linkedIn:'https://effinamazing.com/wp-content/uploads/2015/06/Linkedin-Advertising.png'
    },
    {
        name: 'Jean NICOLAS DE LAMBALLERIE',
        avatar: 'https://zupimages.net/up/19/45/mxue.png',
        linkedIn:'https://www.linkedin.com/in/jean-nicolasdelamballerie/'
    }
]
 const ContactList= () => {
     return (
        <div className='contactcontainer'>
         <div className='cards'>
             {MyContactList.map(e => 
                <Contact key={e.name} {...e} />)}
         </div>
         <div>
             <Link to='/pokedex'>
                <button>Back to Pokedex</button>
            </Link>
         </div>
        </div>
     )
 }
export default ContactList;