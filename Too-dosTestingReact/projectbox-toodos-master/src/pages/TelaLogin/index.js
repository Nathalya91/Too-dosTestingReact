import React, { Component } from "react"
import {
    Button,
    Card,
    TextField,
    Toolbar
} from "react-md"
import Logo from "../../assets/img/LogoSemSlogan.png"

const styleLogo = {
    content: {
        width: "100%"
    },

    content2: {
        padding: "5%"
    },

    img: {
        width: "100%",
        padding: "8px",
        paddingLeft: "10%",
        paddingRight: "10%"
    }
};

const styleCard = {
    maxWidth: 320,
    marginTop: "12,5%"
}

const styleButton = {
    marginTop: "12%",
    width: "275px"
}


const loginWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default class TelaLogin extends Component {
    callPage = (url) => {
        this.props.history.push({
            pathname: url,
            afterLogin: {} //parametro 
        })
    }

    onClickOpenNewPage = () => {
        this.callPage("/projectList")
    }

    render() {
        return (
            <div
                style={loginWrapper}
                className="app-full-height">
                <Card style={styleCard} className="md-block-centered">

                    <Toolbar
                        colored
                        style={styleLogo.content}>
                        <img src={Logo} alt="" style={styleLogo.img} />
                    </Toolbar>

                    <div style={styleLogo.content2}>
                        <TextField
                            id="floating-center-title"
                            label="Entre com seu usuario"
                            type="usuário"
                            className="md-cell md-cell--12"
                        />
                        <TextField
                            id="floating-password"
                            label="Entre com sua senha"
                            type="password"
                            className="md-cell md-cell--12"
                        >
                        </TextField>
                        <Button
                            style={styleButton}
                            flat
                            raised
                            primary
                            className="md-block-centered"
                            onClick={this.onClickOpenNewPage}>
                            Entrar
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }
}