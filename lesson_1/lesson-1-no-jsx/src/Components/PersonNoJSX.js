import React from 'react'

const PersonNoJSX = props => {
    return React.createElement('div', {
        className: 'container',
        children: [
          React.createElement('span', null, 'Hello'),
          ' ',
          React.createElement('span', null, 'World'),
        ],
      })
      
}

export default PersonNoJSX