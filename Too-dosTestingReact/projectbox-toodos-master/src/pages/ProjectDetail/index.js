import React, { PureComponent } from "react"
import MockDetalhes from "../../assets/mockDetalhes"
import {
    Button,
    Card,
    Cell,
    FontIcon,
    Grid,
    List
} from "react-md"
import SbxToolbar from "../../components/SbxToolbar"
import SbxItem from "../../components/SbxItem"
import "./ProjectDetail.css"

class ProjectDetail extends PureComponent {
    detalhes = {}
    constructor(props) {
        super(props)
        this.detalhes = { MockDetalhes }
        this.back = this.back.bind(this)
    }

    back(filtro) {
        this.props.history.push({
            pathname: "/projectList",
            filtro
        })
    }

    render() {
        const detailsContainerStyle = {
            height: "100%",
            padding: "8px 16px",
            display: "flex",
            justifyContent: "center",
            alignItens: "center",
            maxWidth: "50%",
            margin: "auto"
        }

        const styleNormalCell = {
            padding: "10px",
            textAlign: "center",
        }

        const stylesStatus = {
            aguardando: {
                backgroundColor: "rgb(255, 51, 0)",
                padding: "10px",
                textAlign: "center",
                color: "white"
            },
            andamento: {
                backgroundColor: "rgb(255, 153, 0)",
                padding: "10px",
                textAlign: "center",
                color: "white"
            },
            concluido: {
                backgroundColor: "rgb(51, 204, 51)",
                padding: "10px",
                textAlign: "center",
                color: "white"
            }
        }

        // const detalhe = this.detalhes.MockDetalhes[this.props.location.state.params.id - 1]
        const detalhe = MockDetalhes.find((detalhe) => detalhe.id === this.props.location.state.params.id)

        return (
            <div style={{ height: "100%" }}>
                <SbxToolbar
                    withLogo
                    history={this.props.history}
                    toolbarLeft={
                        <Button
                            flat
                            label="Projetos"
                            onClick={() => this.back(this.props.history.location.filtro)}>
                            <FontIcon>arrow_back</FontIcon>
                        </Button>}
                />
                <div style={{ width: "100%", padding: "16px", height: "calc(100vh - 64px)" }}>
                    <Card style={detailsContainerStyle} className="md-block--centered">
                        <List style={{ width: "100%" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItens: "center",
                                    marginBottom: "10px"
                                }}
                                className="md-block--centered md-divider-border md-divider-border--bottom">
                                <List >
                                    <div>
                                        <h3 style={{ color: "#616161", fontSize: "200%", margin: "16px", marginBottom: "32px" }}>
                                            Detalhes do Projeto
                                        </h3>
                                    </div>

                                    <SbxItem
                                        leftIcon={<i class="material-icons">perm_identity</i>}
                                        text={"Cliente: " + detalhe.cliente} />
                                    <SbxItem
                                        leftIcon={<i class="material-icons">date_range</i>}
                                        text={"Duração: " + detalhe.duracao} />
                                    <SbxItem
                                        leftIcon={<i class="material-icons">access_time</i>}
                                        text={"Horas Contratadas: " + detalhe.horasContratadas} />
                                    <SbxItem
                                        leftIcon={<i class="material-icons">store</i>}
                                        text={"Unidade: " + detalhe.unidade} />


                                </List>
                            </div>
                            <div id="status-detalhe">
                                <div>
                                    <h3 style={{ color: "#616161", fontSize: "150%", margin: "16px", textAlign: "center", marginTop: "24px" }}>
                                        Status do Projeto
                                    </h3>
                                </div>

                                {/* Caminhaozinho */}
                                <Grid noSpacing style={{ width: "100%" }}>
                                    <Cell size={4} style={{ textAlign: "center" }} >
                                        {detalhe.status.toLocaleLowerCase().includes("aguardando") ?
                                            <FontIcon>airport_shuttle</FontIcon>
                                            : null}
                                    </Cell>
                                    <Cell size={4} style={{ textAlign: "center" }}>
                                        {detalhe.status.toLocaleLowerCase().includes("andamento") ?
                                            <FontIcon>airport_shuttle</FontIcon>
                                            : null}
                                    </Cell>
                                    <Cell size={4} style={{ textAlign: "center" }}>
                                        {detalhe.status.toLocaleLowerCase().includes("concluido") ?
                                            <FontIcon>airport_shuttle</FontIcon>
                                            : null}
                                    </Cell>
                                </Grid>

                                {/* Cores status */}
                                <Grid noSpacing style={{ width: "100%" }}>
                                    <Cell size={4} >
                                        <div
                                            style={detalhe.status.toLocaleLowerCase().includes("aguardando") ?
                                                stylesStatus.aguardando : styleNormalCell}>
                                            Aguardando
                                        </div>
                                    </Cell>
                                    <Cell size={4}>
                                        <div style={detalhe.status.toLocaleLowerCase().includes("andamento") ?
                                            stylesStatus.andamento : styleNormalCell}>
                                            Andamento
                                        </div>
                                    </Cell>
                                    <Cell size={4}>
                                        <div style={detalhe.status.toLocaleLowerCase().includes("concluido") ?
                                            stylesStatus.concluido : styleNormalCell}>
                                            Concluido
                                        </div>
                                    </Cell>
                                </Grid>
                            </div>
                        </List>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ProjectDetail