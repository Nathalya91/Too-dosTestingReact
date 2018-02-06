import React, { Component } from "react"
import {
    Button,
    ExpansionList,
    ExpansionPanel,
    FontIcon,
    SelectionControlGroup,
    Toolbar
} from "react-md"
import filters from "../../assets/filtros"
import "./ProjectFilter.css"
import SbxToolbar from "../../components/SbxToolbar"

const styleFooter = {
    display: "flex",
    alignItems: "center",
    margin: 0,
    height: "100%"
}

class ProjectFilter extends Component {
    constructor(props) {
        super(props)
        this.back = this.back.bind(this)
        this.filtros = { filters }
    }

    back() {
        this.props.history.push({
            pathname: "/projectList",
        })
    }

    backInFiltro = (filtro) => {
        this.props.history.push({
            pathname: "/projectList",
            filtro,
        })
    }

    lerFiltro = () => {
        const checkedCheckbox = document.querySelectorAll("input[type=checkbox]:checked")
        if (checkedCheckbox.length > 0) {
            const filtros = []

            checkedCheckbox.forEach(function (element) {
                const fatherName = element.name.replace("[]", "").replace("chk-", "")
                filtros.push({ value: element.value, fatherName })
            }, this);

            this.backInFiltro(filtros)
        }
    }
    createItens = (itens, returnFilters) => {
        const seletores = []
        var checked = undefined
        itens.forEach((val) => {
            if (returnFilters) {
                if (returnFilters.find((item) => item.value === val)) {
                    checked = "checked"
                }
            }
            seletores.push({ label: val, value: val, checked })
            checked = undefined
        })
        return seletores
    }

    render() {
        const returnFilters = this.props.history.location.filtro
        this.returnFilters = returnFilters === undefined ? [] : returnFilters
        return (
            <div>
                <SbxToolbar
                    withLogo
                    history={this.props.history}
                    toolbarLeft={
                        <Button
                            flat
                            label="Projetos"
                            onClick={this.back}>
                            <FontIcon>arrow_back</FontIcon>
                        </Button>}
                />

                <div style={{ width: "100%", textAlign: "right", padding: "20px" }}>
                    <Button 
                        raised
                        label="LIMPAR"
                        onClick={this.back}>
                        <FontIcon>delete</FontIcon>
                    </Button>
                </div>

                <ExpansionList
                    className="project-filter-list">
                    {Object.entries(this.filtros.filters).map((chave) =>
                        <ExpansionPanel
                            key={chave[0]}
                            label={chave[0]}
                            footer={null}
                            defaultExpanded={returnFilters ? (returnFilters.find((item) => item.fatherName === chave[0]) ? true : false) : false}>
                            <SelectionControlGroup
                                id={"chk-" + chave[0]}
                                name={"chk-" + chave[0]}
                                type="checkbox"
                                defaultValue="null"
                                controls={this.createItens(chave[1], returnFilters)}
                            />
                        </ExpansionPanel>
                    )}
                </ExpansionList>

                <Toolbar
                    colored
                    actions={
                        <div
                            style={styleFooter}>
                            <Button style={{backgroundColor: "rgb(51, 204, 51)"}}
                                raised
                                label="APLICAR"
                                onClick={this.lerFiltro}>
                                <FontIcon>done</FontIcon>
                            </Button>
                        </div>
                    }
                >
                </Toolbar>
            </div>
        )
    }
}

export default ProjectFilter