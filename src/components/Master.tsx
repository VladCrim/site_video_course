import { useInView } from '../hooks'

const milestones = [
    { year: '2005', text: 'Первый мастер-класс по коже в Москве' },
    { year: '2012', text: 'Открытие собственной мастерской «Берзина Leather»' },
    { year: '2018', text: 'Запуск онлайн-школы, первые 500 учеников' },
    { year: '2023', text: 'Коллаборация с российскими дизайнерами одежды' },
    { year: '2025', text: '2 500+ выпускников, премия «Мастер года»' },
]

export default function Master() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section id="master" className="relative py-20 sm:py-28 bg-brown-deep text-white overflow-hidden">
            {/* Subtle grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div ref={ref} className="text-center mb-14 sm:mb-18">
                    <span
                        className={`line-ornament text-gold-light text-xs tracking-[0.3em] uppercase font-medium transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Ваш наставник
                    </span>
                    <h2
                        className={`font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Ирина <span className="text-gradient-gold italic">Берзина</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Photos */}
                    <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="relative space-y-4">
                            {/* Main portrait */}
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cognac/20 via-transparent to-gold/20 blur-2xl" />
                                <img
                                    src="/images/master.png"
                                    alt="Ирина Берзина — мастер по коже"
                                    className="relative rounded-2xl w-full aspect-[4/5] object-cover shadow-2xl"
                                />
                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-cognac rounded-xl p-4 shadow-xl shadow-cognac/30">
                                    <div className="font-serif text-2xl font-bold">20+</div>
                                    <div className="text-white/80 text-xs uppercase tracking-wider">лет опыта</div>
                                </div>
                            </div>
                            {/* Award ceremony */}
                            <div className="relative mt-6">
                                <img
                                    src="/images/irina-award.png"
                                    alt="Ирина Берзина — церемония награждения"
                                    className="rounded-2xl w-full aspect-[3/4] object-cover object-top shadow-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute bottom-3 left-3 bg-brown-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5">
                                    <span className="text-gold-light text-xs font-medium">Премия «Мастер года» 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio & Timeline */}
                    <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                            «Когда я начинала, у меня не было ни мастерской, ни дорогих инструментов — только кусок кожи,
                            нитки и огромное желание создавать. Сегодня я знаю: чтобы сшить красивую вещь, не нужны годы
                            обучения — нужна правильная система. Именно такую систему я и создала для вас.»
                        </p>

                        {/* Credentials */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {['Член Союза Дизайнеров', 'Сертификат Tandy Leather', 'Эксперт телеканала «Мастер»'].map((c, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gold-light"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    {c}
                                </span>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="relative pl-6 border-l border-gold/30 space-y-6">
                            {milestones.map((m, i) => (
                                <div key={i} className="relative group">
                                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2 border-gold bg-brown-deep group-hover:bg-gold transition-colors duration-300" />
                                    <span className="text-gold font-serif text-sm font-bold">{m.year}</span>
                                    <p className="text-white/60 text-sm mt-0.5">{m.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
