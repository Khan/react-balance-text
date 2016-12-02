import React from 'react';
import balanceText from 'balance-text';

class BalanceText extends React.Component {
  static defaultProps = {
    resize: true,
  }

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
    style: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.any),
      React.PropTypes.any,
    ]),
    resize: React.PropTypes.bool,
  }

  constructor() {
    super();
    
    this._handleResize = () => {
      if (!this.props.resize) {
        return;
      }

      this._balanceText();
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this._handleResize);
    this._balanceText();
  }

  componentDidUpdate() {
    this._balanceText();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleResize);
  }

  _balanceText() {
    const {container} = this.refs;

    container.style.visibility = 'visible';
    
    balanceText.balanceText(container);
  }
  
  render() {
    const {children, style} = this.props;
    
    const combinedStyle = {...style, visibility: 'hidden'};
    
    return <div style={style}>
      <span ref="container">{children}</span>
    </div>;
  }
}

export default BalanceText;
