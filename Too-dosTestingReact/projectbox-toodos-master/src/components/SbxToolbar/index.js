import React, { Component } from "react"
import SbxLogo from "../../assets/img/logo.png"
import {
    Button,    
    Cell,
    FontIcon,    
    Grid,  
    Toolbar
} from "react-md"

import DrawerMaterialUI from "../SbxDrawerMaterialUI"
import DrawerReactMD from "../SbxDrawerReactMD"

const styleLogo = {
    content: { minHeight: "auto" },
    img: {
        height: "100%",
        padding: "10px"
    },
};

const centerLogo = {
    height: "100%",
    textAlign: "center"
}

const cellsSize = {
    emptyColumn: null,
    //web desktop
    left: 4,
    right: 4,
    logo: 4,
    //tablet
    leftTablet: 2,
    rightTablet: 2,
    logoTablet: 4,
    //phone
    leftPhone: 1,
    rightPhone: 1,
    logoPhone: 2,
}


export default class SbxToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, visible: false};
    }

    openCloseDrawerReactMD = () => this.setState({visible: !this.state.visible});
    openCloseDrawerMaterialUI = () => this.setState({open: !this.state.open});
    goToPageLogin = () => {
        this.props.history.push({
            pathname: "/login"
        })
    }

    validateCellsSize() {
        if (!this.props.toolbarLeft && this.props.noDrawer) {
            cellsSize.logo = 12
            cellsSize.logoPhone = 4
            cellsSize.logoTablet = 8
        }
        else if ((!this.props.toolbarLeft && !this.props.noDrawer) || !this.props.withLogo) {
            if (this.props.withLogo) {
                cellsSize.emptyColumn = <Cell size={4} phoneSize={1} tabletSize={2} className="md-block-centered"></Cell>
            }
            else {
                cellsSize.emptyColumn = <Cell size={4} phoneSize={2} tabletSize={4} className="md-block-centered"></Cell>
            }
        }
        else {
            cellsSize.logo = 4
            cellsSize.logoPhone = 2
            cellsSize.logoTablet = 4
        }
    }

    render() {
        this.validateCellsSize()
        return (
            <Toolbar colored>
                <Grid noSpacing style={{ width: "100%", height: "100%" }}>
                    {this.props.toolbarLeft ?
                        <Cell
                            size={cellsSize.left}
                            phoneSize={cellsSize.leftPhone}
                            tabletSize={cellsSize.leftTablet}
                            className="md-block-centered">
                            {this.props.toolbarLeft}
                        </Cell>
                        : cellsSize.emptyColumn}
                    {this.props.withLogo ?
                        <Cell
                            size={cellsSize.logo}
                            phoneSize={cellsSize.logoPhone}
                            tabletSize={cellsSize.logoTablet}
                            style={{ height: "100%" }}>
                            <div className="md-block-centered" style={centerLogo}>
                                <img src={SbxLogo} alt="" style={styleLogo.img} />
                            </div>
                        </Cell>
                        : cellsSize.emptyColumn}
                    {!this.props.noDrawer ?
                        <Cell
                            size={cellsSize.right}
                            phoneSize={cellsSize.rightPhone}
                            tabletSize={cellsSize.rightTablet}
                            style={{ textAlign: "right", paddingRight: "20px" }}>

                            <Button
                                style={{ backgroundColor: "rgb(51, 204, 51)" }}
                                raised
                                onClick={this.openCloseDrawerReactMD}>
                                <FontIcon>format_list_bulleted</FontIcon>
                            </Button>

                            <Button
                                style={{ backgroundColor: "rgb(51, 204, 51)" }}
                                raised
                                onClick={this.openCloseDrawerMaterialUI}>
                                <FontIcon>format_list_bulleted</FontIcon>
                            </Button>

                        </Cell>
                        : null}

                </Grid>
               
                <DrawerReactMD 
                    visible={this.state.visible}
                    onVisibilityChange={this.openCloseDrawerReactMD}
                    toolbar={
                        <Toolbar
                            id="toolbar-drawer-rmd"
                            colored
                            nav={<Button icon onClick={this.openCloseDrawerReactMD}>close</Button>}
                            className="md-divider-border md-divider-border--bottom"
                        />
                    }/>
    
                <DrawerMaterialUI 
                    open={this.state.open}
                    onRequestChange={this.openCloseDrawerMaterialUI}
                    toolbar={
                        <Toolbar
                            colored
                            nav={<Button icon onClick={this.openCloseDrawerMaterialUI}>close</Button>}
                            className="md-divider-border md-divider-border--bottom"
                        />
                    }/>
            </Toolbar>
        )
    }
}