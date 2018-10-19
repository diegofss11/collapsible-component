import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Collapsible extends React.Component {
    static propTypes = {
        isExpanded: PropTypes.bool,
        className: PropTypes.string,
        CollapsibleHeaderComponent: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func,
        ]).isRequired,
        title: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]).isRequired,
    }

    static defaultProps = {
        isExpanded: true,
        className: '',
        title: '',
    }

    state = { isExpanded: true }

    componentDidMount() {
        const { isExpanded } = this.state;

        this.setState({ isExpanded });
    }

    handleHeaderClick = () => {
        this.setState(state => ({ isExpanded: !state.isExpanded }));
    }

    render() {
        const {
            className, CollapsibleHeaderComponent, title, children,
        } = this.props;

        const { isExpanded } = this.state;

        const attributes = {};

        const classNameList = ['collapsible'];

        attributes.className = [].concat(
            classNameList,
            className,
        ).join(' ').trim();

        return (
            <section {...attributes}>
                <CollapsibleHeaderComponent
                    onClick={this.handleHeaderClick}
                    isExpanded={isExpanded}
                    title={title}
                />

                {isExpanded && children }
                {/* this could be done using CSS display:none as well.
                    However, this option would still keep the DOM physically present in the DOM at all times
                 */}
            </section>
        );
    }
}

export default Collapsible;
