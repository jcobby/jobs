import React from 'react'
import headerdesktop from '../images/bg-pattern-header.svg'
import './Try.css'
import { ThemeContext } from '../theme';
import { useContext } from 'react';
import Headersvg from './Headersvg';

function Try() {
  const { theme } = useContext(ThemeContext);


  return (
    <div data-theme={theme}>
      <Headersvg />
      hello
<h2>Theme: {theme}</h2>    </div>
  )
}

export default Try
