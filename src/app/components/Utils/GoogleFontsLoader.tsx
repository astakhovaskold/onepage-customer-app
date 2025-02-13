import {useEffect} from 'react';

interface Props {
    fontFamily: string;
    weights?: Array<string>;
    display?: string;
}

const GoogleFontLoader: React.FC<Props> = ({fontFamily, weights = ['400'], display = 'swap'}) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        const weightsString = weights.join(';');
        const href = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${weightsString}&display=${display}`;
        link.href = href;

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link); // Corrected line
        };
    }, [fontFamily, weights, display]);

    return null;
};

export default GoogleFontLoader;
