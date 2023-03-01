import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/menu";


export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.mainPage}>
          <div className={styles.navbar} onClick>
            <Menu/>
          </div>
          <h1 className={styles.title}>
            An Investment in <br>
          </br>knowledge pays the best <br></br> 
            intrest{" "}
          </h1>
        </div>
        <hr className={styles.divider}></hr>

        <p className={styles.description}>
          Different than a college or university, the British Columbia <br></br> 
          Institue of Technology offers practical flexible applided <br></br> 
          education with Instructors who have direct, hands on experice in their field
        </p>

        <button className={styles.moreButton}>More About Us</button>

        <button className={styles.contact}>Contact Us</button>
      </main>
    </>
  );
}
