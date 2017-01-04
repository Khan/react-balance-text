import React from 'react';
import balanceText from 'balance-text';

class BalanceText extends React.Component {
    static defaultProps = {
        children: '',
        style: {},
        resize: true,
    }

    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.string,
        style: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.any),
            React.PropTypes.any,
        ]),
        resize: React.PropTypes.bool,
    }

    constructor() {
        super();

        this._handleResize = this._handleResize.bind(this);

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
        if (!container) {
            return;
        }

        balanceText(container);
    }

    _handleResize() {
        if (!this.props.resize) {
            return;
        }

        this._balanceText();
    }

    render() {
        const {children, style, className} = this.props;
        const {visible} = this.state;

        const combinedStyle = {
            ...style,
            visibility: visible ? 'visible' : 'hidden',
        };

        return <div style={combinedStyle} className={className}>
            <span ref={container => this.container = container}>
                {children}
            </span>
        </div>;
    }
}

export default BalanceText;
