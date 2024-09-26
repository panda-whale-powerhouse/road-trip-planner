import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Button from 'material-ui/Button'
import { red, blue } from 'material-ui/colors'

const redTheme = createMuiTheme({ palette: { primary: red } })
const blueTheme = createMuiTheme({ palette: { primary: blue } })

class Buttons extends Component {
  render = () => (
    <div className="ledger-actions-module">
      <MuiThemeProvider theme={redTheme}>
        <Button color="primary" variant="raised">
          Delete
        </Button>
      </MuiThemeProvider>
      <MuiThemeProvider theme={blueTheme}>
        <Button color="primary" variant="raised">
          Update
        </Button>
      </MuiThemeProvider>
    </div>
  )
}

export default Buttons;