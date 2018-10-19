import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

import './index.scss';

const Panel = ({
    description, thumbnail, className,
}) => {
    const attributes = {};
    const classNameList = ['panel'];

    attributes.className = [].concat(
        classNameList,
        className,
    ).join(' ').trim();

    const parsedDescription = Parser(description);
    // another alternative to html-react-parser library, since the API is TRUSTED,
    // is using the dangerouslySetInnerHTML

    return (
        <section {...attributes}>
            {Boolean(thumbnail) && (
                <img
                    className="product-img"
                    alt={`Alternative text to ${thumbnail} `}
                    src={`images/${thumbnail}`}
                />
            )}

            <div className="description">
                {parsedDescription}
            </div>
        </section>
    );
};

Panel.propTypes = {
    className: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
};

Panel.defaultProps = {
    className: '',
    description: '',
    thumbnail: '',
};

export default Panel;
