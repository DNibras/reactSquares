import "./style.css"
import * as React from 'react';
import Square from "../Square";

const RandomSquares = () => {
    const [squares, setSquares] = React.useState<Array<JSX.Element>>([]);

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getRandomColor = () => {
        return `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
    };


    const deleteSquareClick = (index: number) => {
        const updatedSquares = squares.filter((_, i) => i !== index);        
        if (updatedSquares.length === 0) {
            initializeSquares();
        } else {
        setSquares(updatedSquares);
        }
    }

    const initializeSquares = () => {
        const widthMin = 50;
        const widthMax = 200; 
        const heightMin = 50; 
        const heightMax = 200;
        const minSquare = 10;
        const maxSquare = 20;

        const initialSquares = Array.from({ length: getRandomNumber(minSquare, maxSquare) }, (_, i) => (
            <div
                key={i}
                style={{
                    width: `${getRandomNumber(widthMin, widthMax)}px`,
                    height: `${getRandomNumber(heightMin, heightMax)}px`,
                    backgroundColor: getRandomColor(),
                    transform: `translate(${getRandomNumber(0, 100)}vw, ${getRandomNumber(0, 100)}vh)`,
                    // animation: 'squareDisappear 0.5s forwards'
                }}
                onClick={() => deleteSquareClick(i)}
            ></div>
        ));
        setSquares(initialSquares);
    }

    React.useEffect(() => {
        initializeSquares();
    }, []);

    return squares.map((square, index) => <Square index={index} style={square.props.style} onClick={deleteSquareClick} />);
};

export default RandomSquares;