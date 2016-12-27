import React from 'react';
import balanceText from 'balance-text';

class BalanceText extends React.Component {
    static defaultProps = {
        children: '',
        style: {},
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

        this.state = {
            visible: false,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this._handleResize);
        this._makeVisible();
    }

    componentDidUpdate() {
        this._balanceText();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._handleResize);
    }

    _makeVisible() {
        this.setState({visible: true});
    }

    _balanceText() {
        const {container} = this;

        balanceText.balanceText(container);
    }

    render() {
        const {children, style} = this.props;
        const {visible} = this.state;

        const combinedStyle = {
            ...style,
            visibility: visible ? 'visible' : 'hidden',
        };

        return <div style={combinedStyle}>
            <span ref={container => this.container = container}>
                {children}
            </span>
        </div>;
    }
}

export default BalanceText;
