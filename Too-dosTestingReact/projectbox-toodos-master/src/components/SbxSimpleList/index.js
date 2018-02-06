import React, { Component } from "react"
import {
    Button,
    FontIcon,
    ListItem,
    List,
    Subheader,
    TextField,
} from "react-md"
import detalhes from "../../assets/mockDetalhes"
import "./SbxSimpleList.css"

class SbxSimpleList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: undefined
        }

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
        this.goToPageFilter = this.goToPageFilter.bind(this)
        this.isFilter = false
        this.habilityClearFilter()
    }

    habilityClearFilter() {
        if (this.props.history.location.filtro) {
            this.isFilter = true
        }
    }

    //{} para undefined sempre que digito algo
    handleSearchTermChange(term) {
        this.setState({ searchTerm: term.toLowerCase() })
        this.props.history.location.afterLogin = undefined
    }

    handleListItemClick(item) {
        if (this.props.onClickItem) {
            this.props.onClickItem(item)
        }
    }

    goToPageFilter(filtro) {
        this.props.history.push({
            pathname: "/projectFilter",
            filtro
        })
    }

    findDetailByProject(detalhe, projeto) {
        for (let keyProjeto in projeto) {
            for (let keyDetalhe in detalhe) {
                if (keyDetalhe === keyProjeto) {
                    if (detalhe[keyDetalhe] === projeto[keyProjeto]) {
                        return detalhe
                    }
                }
            }
        }
    }

    filterProjetos(projeto) {
        const arrayFiltro = this.props.history.location.filtro;
        const detail = detalhes.find((detalhe) => this.findDetailByProject(detalhe, projeto))
        
        //esconde os itens quando for diferente de underfined
        if (this.props.history.location.afterLogin) {
            return false
        } 

        else if (this.props.history.location.filtro) {
            for (let key in arrayFiltro) {
                const itemFilter = arrayFiltro[key]
                if (detail[itemFilter.fatherName] === itemFilter.value
                    && !this.state.searchTerm) {
                    return true
                }
                for (let chave in projeto) {
                    const valueResp = projeto[chave] + ""
                    if ((detail[itemFilter.fatherName] === itemFilter.value)
                        && valueResp.toLowerCase().includes(this.state.searchTerm)) {
                        return true
                    }
                }

            }
        }
        else {
            if (this.state.searchTerm === undefined) {
                return true
            }
            for (let key in projeto) {
                const value = projeto[key] + ""
                if (value.toLowerCase().includes(this.state.searchTerm)) {
                    return true
                }
            }
            return false
        }
        return false
    }

    clearFilters() {
        this.props.history.push({
            filtro: undefined,
        })
        this.isFilter = false

        document.getElementById("list-search-input").value = null
        this.setState({ searchTerm: undefined })
    }

    render() {

        const listContainerStyle = {
            width: "100%",
            height: "100%"
        }

        return (
            <div style={Object.assign({}, listContainerStyle, this.props.style || {})}>

                <TextField
                    id="list-search-input"
                    label="Filtro"
                    lineDirection="center"
                    placeholder="Digite para filtrar"
                    className="md-cell--bottom"
                    style={{ marginBottom: "12px" }}
                    onChange={this.handleSearchTermChange}
                    rightIcon={
                        <div>
                            <Button 
                                raised
                                primary
                                label="Filtrar"
                                onClick={() => this.goToPageFilter(this.props.history.location.filtro)}>
                                <FontIcon>filter_list</FontIcon>
                            </Button>

                            {this.isFilter ?
                                <Button
                                    raised
                                    label="LIMPAR"
                                    onClick={() => this.clearFilters()}
                                    style={{ marginLeft: "10px" }}>
                                    <FontIcon>delete</FontIcon>
                                </Button>
                                : null}
                        </div>
                    }
                />
                <List className="md-paper md-paper--1 sbx-simple-list">
                    <Subheader primaryText={this.props.headerText} primary />
                    {this.props.data.MockProjetos
                        .filter((projeto) => this.filterProjetos(projeto))

                        .map((item, index) =>
                            <ListItem
                                key={index}
                                primaryText={item.cliente}
                                secondaryText={item.responsavel}
                                onClick={this.handleListItemClick.bind(this, item)}
                                rightIcon={<FontIcon>chevron_right</FontIcon>}
                            />
                        )
                    }

                </List>
            </div>
        )
    }
}

export default SbxSimpleList