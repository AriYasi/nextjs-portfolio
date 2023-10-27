import { useSpring, animated } from 'react-spring';

export default function Cursor() {
    const styles = useSpring({
        reset: true,
        loop: { reverse: true },
        delay: 500,
        from: { opacity: 1 },
        to: { opacity: 0 },
    });

    return(
        <animated.div style={styles} className="pl-2">_</animated.div>
    );
}