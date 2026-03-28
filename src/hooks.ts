import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.unobserve(el)
                }
            },
            { threshold }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, isInView }
}

export function useCounter(end: number, duration = 2000, startOnView = true) {
    const [count, setCount] = useState(0)
    const { ref, isInView } = useInView(0.3)

    useEffect(() => {
        if (!startOnView || !isInView) return
        let startTime: number | null = null
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [isInView, end, duration, startOnView])

    return { ref, count }
}
