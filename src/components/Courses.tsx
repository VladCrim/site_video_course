import { useInView } from '../hooks'

const courses = [
    {
        image: '/images/course-basics.png',
        tag: 'Популярное',
        tagColor: 'bg-cognac text-white',
        title: 'Основы кожевенного дела',
        subtitle: 'С нуля до первой сумки',
        duration: '14 дней',
        lessons: '42 урока',
        price: '0 ₽',
        oldPrice: '12 900 ₽',
        features: [
            'Выбор кожи и инструментов',
            'Базовые швы и техники',
            'Раскрой по лекалам',
            'Сборка сумки-шоппер',
            'Обработка урезов',
        ],
        accent: true,
    },
    {
        image: '/images/bags.png',
        tag: 'Продвинутый',
        tagColor: 'bg-gold text-brown-deep',
        title: 'Мастерская сумок',
        subtitle: 'Все типы конструкций',
        duration: '30 дней',
        lessons: '86 уроков',
        price: '24 900 ₽',
        oldPrice: '39 900 ₽',
        features: [
            'Клатчи, кроссбоди, тоуты',
            'Молнии и фурнитура',
            'Подкладка и карманы',
            'Жёсткие конструкции',
            'Тиснение и декор',
        ],
        accent: false,
    },
    {
        image: '/images/course-restoration.png',
        tag: 'Мастер-класс',
        tagColor: 'bg-brown-deep text-gold-light',
        title: 'Реставрация и ремонт',
        subtitle: 'Вторая жизнь любимых вещей',
        duration: '7 дней',
        lessons: '24 урока',
        price: '9 900 ₽',
        oldPrice: '14 900 ₽',
        features: [
            'Покраска и восстановление',
            'Замена молний и замков',
            'Ремонт ручек',
            'Удаление дефектов',
            'Профессиональный уход',
        ],
        accent: false,
    },
]

export default function Courses() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section id="courses" className="relative py-20 sm:py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div ref={ref} className="text-center mb-14 sm:mb-18">
                    <span
                        className={`line-ornament text-cognac-light text-xs tracking-[0.3em] uppercase font-medium transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Программы обучения
                    </span>
                    <h2
                        className={`font-serif text-brown-deep text-3xl sm:text-4xl lg:text-5xl mt-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Выберите свой <span className="text-gradient-gold italic">путь мастера</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {courses.map((c, i) => {
                        const { ref: cardRef, isInView: cardVisible } = useInView(0.05)
                        return (
                            <div
                                key={i}
                                ref={cardRef}
                                className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${c.accent
                                        ? 'ring-2 ring-cognac shadow-xl shadow-cognac/10'
                                        : 'border border-cognac-light/15 hover:shadow-xl hover:shadow-cognac/5'
                                    } ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                style={{ transitionDelay: `${i * 200}ms` }}
                            >
                                {/* Popular badge */}
                                {c.accent && (
                                    <div className="absolute top-4 right-4 z-20 bg-cognac text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg">
                                        Бесплатно
                                    </div>
                                )}

                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={c.image}
                                        alt={c.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brown-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                        <span className={`${c.tagColor} text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full`}>
                                            {c.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-white p-6 sm:p-7">
                                    <h3 className="font-serif text-brown-deep text-xl font-bold">{c.title}</h3>
                                    <p className="text-warm-gray text-sm mt-1">{c.subtitle}</p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 mt-4 text-xs text-warm-gray-light">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            {c.duration}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            {c.lessons}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul className="mt-5 space-y-2.5">
                                        {c.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-brown-deep/80">
                                                <svg className="w-4 h-4 text-cognac mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price & CTA */}
                                    <div className="mt-6 pt-5 border-t border-cream-dark">
                                        <div className="flex items-baseline gap-3 mb-4">
                                            <span className={`font-serif text-2xl font-bold ${c.accent ? 'text-cognac' : 'text-brown-deep'}`}>
                                                {c.price}
                                            </span>
                                            <span className="text-warm-gray-light line-through text-sm">{c.oldPrice}</span>
                                        </div>
                                        <a
                                            href="#contact"
                                            className={`block text-center py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${c.accent
                                                    ? 'bg-cognac hover:bg-cognac-light text-white shadow-lg shadow-cognac/20 hover:shadow-xl hover:shadow-cognac/30'
                                                    : 'bg-cream-dark hover:bg-cognac hover:text-white text-brown-deep'
                                                }`}
                                        >
                                            {c.accent ? 'Начать бесплатно' : 'Записаться на курс'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
