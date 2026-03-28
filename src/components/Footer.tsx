export default function Footer() {
    return (
        <footer className="bg-brown-black border-t border-white/5 py-12 text-white/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <a href="#" className="inline-block mb-4">
                            <img
                                src="/images/logo.png"
                                alt="Irina Berzina Hand Made"
                                className="h-12 object-contain"
                            />
                        </a>
                        <p className="text-sm leading-relaxed">Превращаем новичков в мастеров кожевенного дела с 2005 года.</p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Навигация</h4>
                        <ul className="space-y-2.5 text-sm">
                            {[['О школе', '#trust'], ['Курсы', '#courses'], ['Мастер', '#master'], ['Отзывы', '#reviews']].map(([l, h]) => (
                                <li key={h}><a href={h} className="hover:text-gold transition-colors duration-300">{l}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Курсы</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#courses" className="hover:text-gold transition-colors duration-300">Основы (бесплатно)</a></li>
                            <li><a href="#courses" className="hover:text-gold transition-colors duration-300">Мастерская сумок</a></li>
                            <li><a href="#courses" className="hover:text-gold transition-colors duration-300">Реставрация</a></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Контакты</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-cognac shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                                info@berzina-leather.ru
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-cognac shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                                +7 (999) 123-45-67
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-4">
                            {['Telegram', 'VK', 'YouTube'].map(s => (
                                <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-cognac/30 flex items-center justify-center text-xs font-medium hover:text-gold transition-all duration-300">
                                    {s[0]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <span>© 2025 Ирина Берзина. Все права защищены.</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="hover:text-gold transition-colors">Оферта</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
