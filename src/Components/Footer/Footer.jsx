import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Homestay MIT</h2>
      <p>
        &copy; <span>{year}</span> Homestaymit.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/tanvir917"
        >
          SD Lab Group Projet: Tanvir, Rohit, Devansh
        </a>
      </p>
    </footer>
  );
}
