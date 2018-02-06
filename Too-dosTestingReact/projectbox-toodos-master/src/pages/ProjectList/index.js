import React, { Component } from "react"
import SbxSimpleList from "../../components/SbxSimpleList"
import MockProjetos from "../../assets/mockProjetos"
import SbxToolbar from "../../components/SbxToolbar"

const simpleListStyles = {
    padding: "8px 16px"
}


class ProjectList extends Component {
    dados = {}
    constructor(props) {
        super(props)
        this.dados = { MockProjetos }

        this.onClickItem = this.onClickItem.bind(this)
        this.callPage = this.callPage.bind(this)
    }

    callPage(url, params, filtro) {
        this.props.history.push({
            pathname: url,
            state: { params: params },
            filtro
        })
    }

    onClickItem(item) {
        this.callPage("/projectDetail", item, this.props.history.location.filtro)
    }

    render() {
        return (
            <div>
                <SbxToolbar
                    withLogo
                    history={this.props.history}
                />

                <SbxSimpleList
                    history={this.props.history}
                    style={simpleListStyles}
                    headerText="Projetos"
                    data={this.dados}
                    onClickItem={this.onClickItem}
                />
            </div>
        )
    }
}

export default ProjectList
