import styles from '../styles/Contact.module.css'
import Image from "next/image"
export default function Contact() {

    return (
      <main className={styles.main}>

            <Image className={styles.menu}
            src={"/icons/menu-icon.png"}
            alt={"/icons/menu.png"}
            width={50}
            height={40}

            />

            <Image className={styles.gradHat} 

                src={"/icons/graduation-hat.png"}
                alt={"/icons/menu.png"}
                width={50}
                height={40}

            />




       <h1 className={styles.contactUs}>Contact Us</h1>
       <p className={styles.discuss}>Want to discuss? Lets Chat</p>
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

       


      </main>
    )
   }
   