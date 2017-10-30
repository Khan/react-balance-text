import React from 'react';
import balanceText from 'balance-text';
import PropTypes from 'prop-types';
class BalanceText extends React.Component {
    static defaultProps = {
        children: '',
        style: {},
        resize: true,
    }

    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        style: PropTypes.oneOfType([
            PropTypes.arrayOf(React.PropTypes.any),
            PropTypes.any,
        ]),
        resize: PropTypes.bool,
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
