import * as React from 'react'
import useStoreState from '../hooks/useStoreState';

interface TimerObject {
    initialTime: number 
}

export default function Timer() {
    const [timer] = useStoreState<TimerObject>("timer", { initialTime: new Date().getTime() })
    const [secondsPassed, setSecondsPassed] = React.useState<number>(0);

    React.useEffect(() => {
        const x = setInterval(() => {
            const newTime = new Date().getTime() - timer.initialTime
            setSecondsPassed(newTime)
        }, 93)
        return () => {
            clearInterval(x)
            localStorage.removeItem("timer")
        }
    }, [])

    return (<p>{(secondsPassed / 1000).toFixed(2)}</p>)
}