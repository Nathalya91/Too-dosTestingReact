import React, { Component } from "react"
import {
    Cell,
    Grid,
} from "react-md"

export default class SbxItem extends Component {
    render() {
        return (
            <Grid
                noSpacing
                style={{ marginBottom: "8px", margin: "10px" }}
            >
                {this.props.leftIcon ?
                    <Cell
                        size={2}
                        phoneSize={1}
                        tabletSize={2}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {this.props.leftIcon}
                    </Cell>
                    : null}
                <Cell
                    size={10}
                    phoneSize={3}
                    tabletSize={6}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    {this.props.text}
                </Cell>
            </Grid>
        )
    }
}