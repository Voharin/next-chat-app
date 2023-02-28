import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import LoginFace from "../src/components/LoginFace";
export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.name));
  }, []);

  return (
    <div className={styles.container}>
      <LoginFace />

   
    </div>
  );
}
