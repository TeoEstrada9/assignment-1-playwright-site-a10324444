import styles from "@/styles/about.module.css";
import link from 'next/link'
import Image from 'next/image'
export default function About() {

    return (
       
      
      <main className={styles.main}>
       <h1 className={styles.aboutPage}>About Us</h1> 
       <p className={styles.aboutMessage}>We are proud to deliver education that goes beyond textbooks and classroom.
        Our Students gain the technical skills, real-world experice, and problem-solving-ability <br></br>
        needed to embrace complexity and lead innovation in a rapidly changing workforce. 

        Through close collaboration with industry, our network of alumni and partners contuine to achieve global success
       </p>
       <div>
          <h1 className={styles.infoSection}>Information Sessions</h1>
          <p className={styles.infoText}>Infomration sessions are a simple way to figure out the next step along your career path. <br></br>
          Learn more about the programs that intrest you.</p>
       </div>
       <div>
        <h3 className={styles.bigInfoSection}>Big Info</h3>
        <p>Big info is the largest program expo and infomration sessions at BCIT. It's your chance to find <br></br>
        out about all our programs - from business, computing, and health to engeineering, trades, and applied sciences.</p>
       </div>
       <div>
        <h3 className={styles.campusTours}>Campus Tours</h3>
        <p>Tours run weekdays September to May, on your Brunaby campus. See BCIT in person and get a taste of campus life</p>
       </div>
          <div>
             <h1 className={styles.Departments}>Departments</h1>
              <ul>
                <li>Applied & Natural Sciences</li>
                <li>Business & Media</li>
                <li>computing & IT</li>
                <li>Engineering</li>
                <li>health Sciences</li>
                <li>Trades & Apprenticeships</li>
              </ul>
          </div>

        
      </main>


      
    )
   }