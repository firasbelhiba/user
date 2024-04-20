import React, { Component, ReactNode } from "react";

interface CustomSlideProps {
    index: number;
    className?: string;
    children?: ReactNode;
}

class CustomSlide extends Component<CustomSlideProps> {
    render() {
        const { index, className, children } = this.props;
        return (
            <div className={className} data-index={index}>
                {children}
            </div>
        );
    }
}

export default CustomSlide;
