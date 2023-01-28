import React, {PropsWithChildren, useEffect, useRef} from 'react';

import '../../../assets/css/synthwave.css';

const SynthWaveLayout = ({children}: PropsWithChildren): JSX.Element => {
    const synthWaveRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!synthWaveRef || !synthWaveRef.current) {
            return;
        }

        const updateRatios = ({x, y}: MouseEvent) => {
            if (!synthWaveRef || !synthWaveRef.current) {
                return;
            }

            const {offsetWidth, offsetHeight} = synthWaveRef.current;

            const centerX = offsetWidth / 2;
            const centerY = offsetHeight / 2;

            const ratioX = (centerX - x) / centerX;
            const ratioY = (centerY - y) / centerY;

            document.documentElement.style.setProperty('--ratio-x', `${ratioX}`);
            document.documentElement.style.setProperty('--ratio-y', `${ratioY}`);
        }

        synthWaveRef.current.addEventListener('mousemove', updateRatios, {passive: true})

        return () => {
            synthWaveRef?.current?.removeEventListener('mousemove', updateRatios);
        }


    }, [synthWaveRef]);

    return (
        <div ref={synthWaveRef} className="synthwave">
            <div className="sun"></div>
            <div className="ground">
                <div className="mountain"></div>
                <div className="mountain"></div>
                <div className="mountain"></div>
                <div className="mountain"></div>
            </div>
            {children}
        </div>
    )
};

export default SynthWaveLayout;

