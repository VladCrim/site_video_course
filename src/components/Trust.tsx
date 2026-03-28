import { useInView, useCounter } from '../hooks'

const features = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        ),
        title: 'Система, а не хаос',
        desc: 'Пошаговые уроки с логичной последовательностью. Каждый навык закрепляется практикой — вы не просто смотрите, а делаете.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
        ),
        title: 'Без дорогого оборудования',
        desc: 'Начните с минимума инструментов. Показываем, как создавать изделия премиум-качества буквально на кухонном столе.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        ),
        title: 'Поддержка 24/7',
        desc: 'Закрытый чат с мастером и учениками. Обратная связь по каждой работе — мы не оставим вас одних с кожей и иголкой.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
        title: 'Окупается с первого изделия',
        desc: 'Средний чек готовой сумки ручной работы — от 15 000 ₽. Стоимость материалов — от 2 000 ₽. Считайте сами!',
    },
]

function CounterCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
    const { ref, count } = useCounter(end, 2000)
    return (
        <div ref={ref} className="text-center">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-cognac">
                {count}{suffix}
            </div>
            <div className="text-warm-gray text-sm mt-2 uppercase tracking-wider">{label}</div>
        </div>
    )
}

export default function Trust() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section id="trust" className="relative py-20 sm:py-28 bg-cream-dark bg-grain">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div ref={ref} className="text-center mb-16 sm:mb-20">
                    <span
                        className={`line-ornament text-cognac-light text-xs tracking-[0.3em] uppercase font-medium transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Почему выбирают нас
                    </span>
                    <h2
                        className={`font-serif text-brown-deep text-3xl sm:text-4xl lg:text-5xl mt-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Мастерство, которое <span className="text-gradient-gold italic">меняет жизнь</span>
                    </h2>
                    <p
                        className={`text-warm-gray max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        Более 2 500 учеников уже создали свои первые изделия.
                        Присоединяйтесь к сообществу мастеров, которые превращают кожу в искусство.
                    </p>
                </div>

                {/* Counters */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 sm:mb-20">
                    <CounterCard end={2500} suffix="+" label="учеников" />
                    <CounterCard end={150} suffix="+" label="часов видео" />
                    <CounterCard end={45} suffix="" label="готовых лекал" />
                    <CounterCard end={20} suffix=" лет" label="опыт мастера" />
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {features.map((f, i) => {
                        const { ref: cardRef, isInView: cardVisible } = useInView(0.1)
                        return (
                            <div
                                key={i}
                                ref={cardRef}
                                className={`group bg-white/60 backdrop-blur-sm border border-cognac-light/10 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:shadow-cognac/5 hover:-translate-y-1 transition-all duration-500 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cognac/10 text-cognac group-hover:bg-cognac group-hover:text-white transition-all duration-300 mb-5">
                                    {f.icon}
                                </div>
                                <h3 className="font-serif text-brown-deep text-lg font-semibold mb-3">{f.title}</h3>
                                <p className="text-warm-gray text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
