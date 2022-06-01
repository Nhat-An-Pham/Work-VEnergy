import React from 'react';
import Home__sliderData from '../assets/data/Home_sliderData';

const slides = Home__sliderData;
const delay = 2500;

function Slider() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slides.map((backgroundColor, index) => (
                    // <div
                    //     className="slide"
                    //     key={index}
                    //     style={{ backgroundColor }}
                    // ></div>
                    <img
                        className="slide"
                        src={backgroundColor.img}
                        key={index}
                        alt=""
                        // style={{ backgroundColor }}
                    ></img>
                ))}
            </div>

            <div className="slideshowDots">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;