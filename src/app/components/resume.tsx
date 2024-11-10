// pages/index.js
import React from 'react';

export default function Resume() {
  return (
    <div className="colorback w-fit min-w-24 flex flex-col justify-center resumeradius  mt-6 p-5 
    ">
      <h3>Name:</h3>
      <h4 style={{ textTransform: 'uppercase' }}>Saiyed Muhammad Anas Maududi</h4>

      <h3>Skills:</h3>
      <ul>
        <li>Qualifies Giaic Quarter 1 (A Grade)</li>
        <li>HTML (HyperText Markup Language)</li>
        <li>CSS (Cascading Stylesheet)</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Debate Writer</li>
        <li>Hosting</li>
      </ul>

      <h3>Experience:</h3>
      <ul>
        <li>
          5-months Experience in working with <em>TypeScript</em> at the Governor House
        </li>
        <li>HTML work experience while making testing websites</li>
        <li>CSS work experience while making testing websites</li>
        <li>Debate experience in interschool competitions</li>
        <li>MUNs (Model United Nations) work experience</li>
      </ul>

      <h3>Contact:</h3>
      <h4>
        Email: <a href="mailto:tafs4920@gmail.com">tafs4920@gmail.com</a>
        <br />
        Contact No: 0321-2859972
      </h4>

    </div>
  );
}
