import { useState } from 'react'
import { useInView } from '../hooks'

const reviews = [
    {
        name: 'Анна Котова',
        city: 'Москва',
        course: 'Основы кожевенного дела',
        text: 'За 14 дней я сшила свою первую сумку — и она выглядит как из магазина! Ирина объясняет так, что даже полный новичок разберётся. Муж не поверил, что это моя работа.',
        rating: 5,
        initials: 'АК',
    },
    {
        name: 'Дмитрий Фёдоров',
        city: 'Санкт-Петербург',
        course: 'Мастерская сумок',
        text: 'Я IT-шник и всегда хотел хобби руками. Начал с бесплатного курса, а теперь продаю сумки друзьям. Самое ценное — закрытый чат, где всегда подскажут.',
        rating: 5,
        initials: 'ДФ',
    },
    {
        name: 'Елена Маркова',
        city: 'Казань',
        course: 'Основы кожевенного дела',
        text: 'Превратила карантин в новую профессию. Теперь шью на заказ кошельки и обложки. За полгода заработала больше, чем тратила на офисную работу.',
        rating: 5,
        initials: 'ЕМ',
    },
    {
        name: 'Ольга Смирнова',
        city: 'Новосибирск',
        course: 'Реставрация и ремонт',
        text: 'Спасла любимую сумку Furla, которую хотела выбросить. А потом стала реставрировать для подруг. Теперь это мой маленький бизнес!',
        rating: 5,
        initials: 'ОС',
    },
    {
        name: 'Марина Власова',
        city: 'Екатеринбург',
        course: 'Мастерская сумок',
        text: 'Курс структурирован идеально. Каждый урок — маленькая победа. Ирина внимательна к каждому ученику. Лучшая инвестиция в себя за последние годы.',
        rating: 5,
        initials: 'МВ',
    },
    {
        name: 'Сергей Петров',
        city: 'Краснодар',
        course: 'Основы кожевенного дела',
        text: 'Подарил жене сумку собственного производства на годовщину. Реакция — бесценна. Спасибо Ирине за понятные и подробные уроки!',
        rating: 5,
        initials: 'СП',
    },
]

export default function Reviews() {
    const { ref, isInView } = useInView(0.1)
    const [active, setActive] = useState(0)
    const visibleCount = 3

    const canPrev = active > 0
    const canNext = active + visibleCount < reviews.length

    return (
        <section id="reviews" className="relative py-20 sm:py-28 bg-cream-dark bg-grain">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div ref={ref} className="text-center mb-14 sm:mb-18">
                    <span
                        className={`line-ornament text-cognac-light text-xs tracking-[0.3em] uppercase font-medium transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Отзывы
                    </span>
                    <h2
                        className={`font-serif text-brown-deep text-3xl sm:text-4xl lg:text-5xl mt-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Что говорят <span className="text-gradient-gold italic">наши ученики</span>
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.slice(active, active + visibleCount).map((r, i) => (
                        <div
                            key={active + i}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-cognac-light/5 animate-fade-in"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(r.rating)].map((_, j) => (
                                    <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-brown-deep/80 text-sm leading-relaxed mb-6">«{r.text}»</p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
                                <div className="w-10 h-10 rounded-full bg-cognac/10 flex items-center justify-center">
                                    <span className="text-cognac font-serif text-sm font-bold">{r.initials}</span>
                                </div>
                                <div>
                                    <div className="text-brown-deep text-sm font-semibold">{r.name}</div>
                                    <div className="text-warm-gray-light text-xs">{r.city} · {r.course}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-10">
                    <button
                        onClick={() => canPrev && setActive(a => a - 1)}
                        disabled={!canPrev}
                        className="w-10 h-10 rounded-full border border-cognac/30 flex items-center justify-center text-cognac hover:bg-cognac hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cognac transition-all duration-300"
                        aria-label="Предыдущие отзывы"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: reviews.length - visibleCount + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-cognac w-6' : 'bg-cognac/30 hover:bg-cognac/60'}`}
                                aria-label={`Слайд ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => canNext && setActive(a => a + 1)}
                        disabled={!canNext}
                        className="w-10 h-10 rounded-full border border-cognac/30 flex items-center justify-center text-cognac hover:bg-cognac hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cognac transition-all duration-300"
                        aria-label="Следующие отзывы"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
