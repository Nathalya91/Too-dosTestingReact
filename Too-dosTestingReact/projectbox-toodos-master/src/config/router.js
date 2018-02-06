import React, { PureComponent } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProjectList from "../pages/ProjectList"
import ProjectDetail from "../pages/ProjectDetail"
import TelaLogin from "../pages/TelaLogin"
import ProjectFilter from "../pages/ProjectFilter"

class AppRouter extends PureComponent {
    render() {
        return (
            <Router>
                <div
                    className="app-full-height">
                    <Route exact path="/" component={TelaLogin} />
                    <Route path="/login" component={TelaLogin} />
                    <Route path="/projectList" component={ProjectList} />
                    <Route path="/projectDetail" component={ProjectDetail} />
                    <Route path="/projectFilter" component={ProjectFilter} />
                </div>
            </Router>
        )
    }
}

export default AppRouter