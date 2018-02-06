import React from "react"
import {   
    Cell,
    Drawer,
    FontIcon,    
    Grid,
    List,
    ListItem,   
    Avatar
} from "react-md"
import "./drawer.css"

import imgMione from "../../assets/imgMione"

const nameWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default class SbxDrawerReactMD extends React.Component {
    render(){
        return(
            <Drawer
                //className="sbx-drawer-body"
                type={Drawer.DrawerTypes.TEMPORARY}
                visible={this.props.visible}
                position="right"
                onVisibilityChange={this.props.onVisibilityChange}

                style={{ width: "256px" }}>
                {this.props.toolbar ? this.props.toolbar : null}
                <List className="sbx-drawer-bodylist">
                    <Grid 
                        className="md-divider-border md-divider-border--bottom"
                        style={{height: '85px', padding: 0}}>
                        <Cell size={8} tabletSize={6} phoneSize={3} style={nameWrapper}>
                            <h3 primary>Nathálya Paula</h3>
                        </Cell>
                        <Cell size={4} tabletSize={2} phoneSize={1}>
                            <Avatar 
                                //style={{minHeight: '50px', minWidth: '50px'}}
                                style={{height: "100%", width:"100%"}}
                                src={imgMione}
                            />
                        </Cell>
                    </Grid>
                </List>
                <List
                    className="md-divider-border md-divider-border--top sbx-footer">
                    <ListItem
                        primaryText="Logout"
                        leftIcon={<FontIcon>exit_to_app</FontIcon>}
                        onClick={this.goToPageLogin}
                        threeLines
                    />
                    <h5 id="sbx-drawer-footer"
                        className="md-divider-border md-divider-border--top">
                        SoftBox Soluções Inteligentes em TI
                    </h5>
                </List>
            </Drawer>
        )
    }
}