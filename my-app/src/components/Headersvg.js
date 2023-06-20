import React from 'react'
import './Headersvg.css'

function Headersvg() {
  return (
    <div>
       <svg className='svg-background' width="1865" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H0v60c0 85.228 64.772 110 190 100h1680V0z" fill="#5964E0" />
        <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="160"><path d="M1440 0H0v60c0 55.228 44.772 100 100 100h1340V0z" fill="#fff"/></mask>
        <g mask="url(#a)" fill-rule="evenodd" clip-rule="evenodd" fill="#fff">
        <path opacity=".081" d="M1163.89-205.424c21.12-23.963 60.32-15.63 69.88 14.853l114.11 364.163c9.39 29.936-16.96 58.887-47.64 52.364l-366.492-77.899c-30.685-6.522-42.976-43.685-22.23-67.217l252.372-286.264zM254.539-323.259c-3.117-31.792 29.711-54.779 58.52-40.976L657.22-199.336c28.291 13.555 31.498 52.566 5.8 70.56L356.104 86.129c-25.698 17.994-61.259 1.637-64.321-29.584L254.539-323.26zM-71.46 71.741c-3.119-31.792 29.71-54.78 58.52-40.976l344.16 164.899c28.291 13.555 31.498 52.566 5.8 70.56L30.104 481.129c-25.698 17.994-61.26 1.637-64.32-29.584L-71.462 71.741z"/>
      <text x="12.5%" y="30%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="32" font-weight="bold" >
        devjobs
      </text>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z" fill="#FFF" fill-rule="nonzero"/></svg>
        </g>
      </svg>
    </div>
  )
}

export default Headersvg
