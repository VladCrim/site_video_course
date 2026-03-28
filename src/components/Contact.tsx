import { useState } from 'react'
import { useInView } from '../hooks'

export default function Contact() {
    const { ref, isInView } = useInView(0.1)
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

    return (
        <section id="contact" className="relative py-20 sm:py-28 bg-brown-black text-white overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-cognac/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className="text-center mb-12 sm:mb-16">
                    <span className={`line-ornament text-gold-light text-xs tracking-[0.3em] uppercase font-medium transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                        Начните сегодня
                    </span>
                    <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                        Готовы создать свою <span className="text-gradient-gold italic">первую сумку?</span>
                    </h2>
                    <p className={`text-white/60 max-w-2xl mx-auto mt-4 text-base sm:text-lg transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                        Оставьте заявку — мы свяжемся с вами и поможем выбрать подходящий курс. Первый урок — бесплатно!
                    </p>
                </div>

                <div className={`max-w-xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10">
                        {submitted ? (
                            <div className="text-center py-8 animate-scale-in">
                                <div className="w-16 h-16 mx-auto rounded-full bg-cognac/20 flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-cognac" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                </div>
                                <h3 className="font-serif text-xl mb-2">Спасибо за заявку!</h3>
                                <p className="text-white/60 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="c-name" className="block text-sm text-white/60 mb-2">Ваше имя</label>
                                    <input id="c-name" type="text" required placeholder="Как вас зовут?" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac transition-all duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="c-phone" className="block text-sm text-white/60 mb-2">Телефон</label>
                                    <input id="c-phone" type="tel" required placeholder="+7 (___) ___-__-__" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac transition-all duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="c-course" className="block text-sm text-white/60 mb-2">Интересующий курс</label>
                                    <select id="c-course" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white/80 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac transition-all duration-300">
                                        <option value="" className="bg-brown-deep">Выберите курс</option>
                                        <option value="basics" className="bg-brown-deep">Основы кожевенного дела (0 ₽)</option>
                                        <option value="bags" className="bg-brown-deep">Мастерская сумок (24 900 ₽)</option>
                                        <option value="rest" className="bg-brown-deep">Реставрация и ремонт (9 900 ₽)</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full bg-cognac hover:bg-cognac-light text-white py-3.5 rounded-full font-medium tracking-wide shadow-lg shadow-cognac/20 hover:shadow-xl hover:shadow-cognac/30 transition-all duration-300 hover:scale-[1.02]">
                                    Получить бесплатный урок
                                </button>
                                <p className="text-white/30 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
