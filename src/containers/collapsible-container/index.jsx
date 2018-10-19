import React from 'react';

import Button from '../../components/button';
import Collapsible from '../../components/collapsible';
import CollapsibleHeader from '../../components/collapsible-header';
import Panel from '../../components/panel';

import { ReactComponent as SliderArrowSvg } from '../../svg/slider-arrow.svg';

import './index.scss';

class CollapsibleContainer extends React.Component {
    state = {
        response: null,
        error: null,
        isLoading: true,
        index: 0,
    }

    componentDidMount() {
        fetch('/data/content.json')
            .then((response) => {
                if (response.ok) return response.json();

                throw new Error('Something went wrong...');
            })
            .then(response => this.setState({ response, isLoading: false }))
            .catch(error => this.setState({ error: error.message, isLoading: false }));
    }

    handleNext = () => {
        this.setState(state => ({ index: state.index + 1 }));
    }

    hasNext = () => {
        const { response, index } = this.state;

        return index < response.content.length - 1;
    }

    handlePrevious = () => {
        this.setState(state => ({ index: state.index - 1 }));
    }

    hasPrevious = () => {
        const { index } = this.state;

        return index > 0;
    }

    render() {
        const {
            response, error, isLoading, index,
        } = this.state;

        if (isLoading || response === null) return <p>Loading the content...</p>;

        if (error !== null) return <p>{error}</p>;

        const currentContent = response.content[index];

        return (
            <main className="collapsible-container-wrapper">
                <Collapsible
                    CollapsibleHeaderComponent={CollapsibleHeader}
                    title={response.title}
                >
                    <Panel
                        thumbnail={currentContent.thumbnail}
                        description={currentContent.description}
                    />
                </Collapsible>

                <section className="action-buttons-wrapper">
                    <Button
                        aria-labelledby="previous-button"
                        className="btn--secondary"
                        disabled={!this.hasPrevious()}
                        onClick={this.handlePrevious}
                    >
                        <SliderArrowSvg
                            className="svg svg-previous"
                        />
                        <span
                            id="previous-button"
                            className="action-text"
                        >
                            Previous
                        </span>
                    </Button>

                    <Button
                        aria-labelledby="next-button"
                        className="btn--primary"
                        disabled={!this.hasNext()}
                        onClick={this.handleNext}
                    >
                        <span
                            id="next-button"
                            className="action-text right-aligned"
                        >
                            {currentContent.title}

                        </span>
                        <SliderArrowSvg
                            className="svg svg-next"
                        />
                    </Button>
                </section>
            </main>
        );
    }
}

export default CollapsibleContainer;
