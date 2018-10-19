import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import { ReactComponent as Caret } from '../../svg/caret.svg';
import { ReactComponent as Info } from '../../svg/info.svg';

import './index.scss';

// one example of a possible header that can be given to the collapsible component
const CollapsibleHeader = ({ title, className, onClick }) => {
    const attributes = {};
    const classNameList = ['collapsible-header'];

    attributes.className = [].concat(
        classNameList,
        className,
    ).join(' ').trim();

    return (
        <section {...attributes}>
            <div className="information">
                <Info className="svg svg-info" />
                <h1 className="collapsible-title">{title}</h1>
            </div>

            <Button
                aria-label="Expand or Hide content"
                onClick={onClick}
                className="btn-collapsible-header"
            >
                <Caret className="svg svg-caret" />
            </Button>
        </section>
    );
};

CollapsibleHeader.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
};

CollapsibleHeader.defaultProps = {
    className: '',
    title: '',
};

export default CollapsibleHeader;
