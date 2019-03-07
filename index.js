import React from 'react'
import ReactDOM from 'react-dom'

import Header from './src/components/Header.react'

const Root = () => (<Header />)

ReactDOM.render(<Root />, document.getElementById('app'))
