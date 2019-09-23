import React, { PureComponent } from 'react'
import { merge } from './utils'
import PropTypes from 'prop-types'

export default class Label extends PureComponent {
  styles() {
    const offset = this.props.active ? { left: '0px' } : { right: '0px' }
    console.log('this.props', this.props);
    return merge(
      {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        pointerEvents: 'none',
        fontSize: '1em',
        lineHeight: '1em',
        textAlign: 'center'
      },
      {
        width: this.props.width
      },
      offset
    )
  }

  render() {
    return (
      <span style={this.styles()} className="react-flexible-switch-label">
        {this.props.active ? this.props.labels.on : this.props.labels.off}
      </span>
    )
  }
}

Label.propTypes = {
  active: PropTypes.bool,
  labels: PropTypes.shape({
    on: PropTypes.string.isRequired,
    off: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.string
}
