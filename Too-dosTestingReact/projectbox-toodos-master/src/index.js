import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from "./config/router"
import registerServiceWorker from './registerServiceWorker'

import "react-md/dist/react-md.blue-amber.min.css"
import "./assets/css/material-icons.css"


ReactDOM.render(<AppRouter/>, document.getElementById("root"))

registerServiceWorker()
