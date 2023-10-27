import { useSpring, animated } from 'react-spring';

export default function Cursor() {
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        loop: true,
        config: { duration: 1000 }
    });

    return(
        <animated.div style={springs} className="pl-2">_</animated.div>
    );
}