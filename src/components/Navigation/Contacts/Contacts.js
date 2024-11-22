import "./Contacts.css"

function Contacts(){
    return (
        <div className="container_contacts">
            <div className="contacts contact_block">
                <div className="socials contact_block">
                    <p className="name">Telegram / WhatsApp</p>
                    <p className="subName">+38 (068) 499-98-53</p>
                </div>

                <div className="email contact_block">
                    <p className="name">Email</p>
                    <p className="subName">developapiproject@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts;