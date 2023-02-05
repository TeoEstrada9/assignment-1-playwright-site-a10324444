import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/menu";

//   // <> </> => React Fragment
//   <>

//  <title>Home</title>

//   </>

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
      </Head>
      <main>
        <div>
          <h1 className="main-title">
            An Investment in knowledge pays the best intrest{" "}
          </h1>
        </div>
        <hr className="divider"></hr>

        <p className="about-school">
          Different than a college or university, the British Columbia Institue
          of Technology offers practical flexible applided education with
          Unstructors who have direct, hands on experice in their field
        </p>

        <button className="more-button">More About Us</button>

        <button className="contact-button">Contact Us</button>
      </main>
    </>
  );
}
