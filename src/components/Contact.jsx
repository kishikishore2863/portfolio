import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div>
        <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact