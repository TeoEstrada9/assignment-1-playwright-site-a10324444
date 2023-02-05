import styles from '../styles/Contact.module.css'
export default function Contact() {

    return (
      <div>


       <h1>Contact Us</h1>
       <p>Want to discuss? Lets Chat</p>
       <form>
            <div id="first-name-box">
                <label for="firstName">
                    First Name:
                </label>
                <input id="firstName" name="firstName" placeholder="First Name Here" type="text"/>
            </div>
            
            <div id="last-name-box">
                <label for="lastName">
                   Last Name:
                </label>
                <input id="lastName" name="lastName" placeholder="Last Name Here" type="text"/>
            </div>

            <div id="email-box">
                <label for="email">
                   Email: 
                </label>
                <input id="email" name="email" placeholder="Email Here" type="text"/>
            </div>
       </form>


      </div>
    )
   }
   