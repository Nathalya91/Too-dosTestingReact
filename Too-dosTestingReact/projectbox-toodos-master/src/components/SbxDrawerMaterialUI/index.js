import React from "react"
import {
    Cell,
    FontIcon,    
    Grid,
    List,
    ListItem,
    Avatar
} from "react-md"

import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AvatarMaterialUI from 'material-ui/Avatar';
import "./drawer.css"

import imgMione from "../../assets/imgMione"

const nameWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default class SbxDrawerMaterialUI extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
                <Drawer
                    docked={false} 
                    openSecondary={true} 
                    open={this.props.open}
                    onRequestChange={this.props.onRequestChange}>
                    {this.props.toolbar ? this.props.toolbar : null}

                    <List className="sbx-drawer-bodylist">
                        <Grid 
                            className="md-divider-border md-divider-border--bottom"
                            style={{ padding: 0}}>
                            <Cell size={8} tabletSize={5} phoneSize={3} style={nameWrapper}>
                                <h3 id="sbx-drawer" primary>Natalhya Paula</h3>
                            </Cell>
                            <Cell size={4} tabletSize={3} phoneSize={1}>
                                <Avatar 
                                    //style={{minHeight: '50px', minWidth: '50px'}}
                                    style={{height: "68px", width:"68px", float: "right"}}
                                    src={imgMione}
                                />
                            </Cell>
                        </Grid>
                        <Grid
                            className="md-divider-border md-divider-border--bottom"
                            style={{padding: 0}}>
                            <Cell size={8} tabletSize={5} phoneSize={3} style={nameWrapper}>
                                <h3 id="sbx-drawer" primary>Natalhya Paula</h3>
                            </Cell>
                            <Cell size={4} tabletSize={3} phoneSize={1}>
                                <AvatarMaterialUI
                                    //style={{minHeight: '50px', minWidth: '50px'}}
                                    style={{float: "right"}}
                                    size={68}
                                    src={imgMione}
                                />
                                
                            </Cell>
                        </Grid>
                    </List>
                    <List
                        className="md-divider-border md-divider-border--top"
                        style={{ position: "fixed", bottom: 0, width: "100%" }}
                        >
                        <ListItem
                            primaryText="Logout"
                            leftIcon={<FontIcon>exit_to_app</FontIcon>}
                            onClick={this.goToPageLogin}
                            threeLines
                        />
                        <h5 id="sbx-drawer-footer" className="md-divider-border md-divider-border--top">
                            SoftBox Soluções Inteligentes em TI
                        </h5>
                    </List>
                </Drawer>
            </MuiThemeProvider>
        )
    }
}