import { useInView } from '../hooks'

export default function Hero() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brown-black/80 via-brown-black/60 to-brown-black/90" />

            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
                {/* Eyebrow */}
                <div
                    className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <span className="inline-flex items-center gap-3 text-gold-light text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
                        <span className="w-8 h-[1px] bg-gold-light" />
                        Школа кожевенного мастерства
                        <span className="w-8 h-[1px] bg-gold-light" />
                    </span>
                </div>

                {/* H1 */}
                <h1
                    className={`font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] mt-6 sm:mt-8 mb-6 sm:mb-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    style={{ transitionDelay: '400ms' }}
                >
                    Сшейте брендовую сумку<br className="hidden sm:block" />
                    <span className="text-gradient-gold"> за 14 дней</span> без страха<br className="hidden sm:block" />
                    испортить материал
                </h1>

                {/* Subtitle */}
                <p
                    className={`text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    style={{ transitionDelay: '600ms' }}
                >
                    Пошаговая система обучения от мастера с 20&#8209;летним стажем. Выдаем профессиональные
                    технологии без секретов: от первого раскроя до зеркального уреза прямо на&nbsp;вашей кухне.
                </p>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    style={{ transitionDelay: '800ms' }}
                >
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center gap-3 bg-cognac hover:bg-cognac-light text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-medium tracking-wide transition-all duration-500 hover:shadow-xl hover:shadow-cognac/40 hover:scale-105"
                    >
                        <span>Начать обучение с 0 ₽</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#courses"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-gold border border-white/20 hover:border-gold/50 px-8 py-4 rounded-full text-base transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                        Смотреть трейлер
                    </a>
                </div>

                {/* Trust badges */}
                <div
                    className={`mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    style={{ transitionDelay: '1000ms' }}
                >
                    {[
                        { value: '2 500+', label: 'учеников' },
                        { value: '150+', label: 'часов видео' },
                        { value: '45', label: 'готовых лекал' },
                        { value: '4.9/5', label: 'средняя оценка' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-gold font-serif text-2xl sm:text-3xl font-bold">{stat.value}</div>
                            <div className="text-white/50 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-white/40 text-[10px] tracking-widest uppercase">Вниз</span>
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}
