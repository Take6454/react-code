
import React from 'react';
import './Works.css';
import CardItem from './CardItem';

function Works() {
  return (
    <div className='works_section'>
      <h1>My Work</h1>
      <div className='works_container'>
        <div className='works_wrapper'>
          <ul className='works_items'>
            <CardItem
              src='images/project1.png'
              text='Website for musical artist built with Three.js'
              href_site="https://ramagu4ever.github.io"
              href_code="https://github.com/Take6454/project-Three.js.git"
              code="View Code"
            />
            <CardItem
              src='images/project2.png'
              text='Site for looking up Seinfeld 
              episodes by character, uses JavaScript to process JSON data files'
              href_site="https://takeotani.000webhostapp.com/"
              href_code="https://github.com/Take6454/project-JSON-file.git"
              code="View Code"
            />
            <CardItem
              src='images/project3.png'
              text='This site, built with React'
              href_site="https://take6454.github.io/project-react/."
              href_code="https://github.com/Take6454/react-code.git"
              code="View Code"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Works;
