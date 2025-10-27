import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const catalogCategories = [
    {
      title: 'Лакокрасочные материалы',
      description: 'Краски, эмали, лаки для любых поверхностей',
      icon: 'Droplet',
    },
    {
      title: 'Строительные смеси',
      description: 'Сухие смеси, штукатурки, шпатлёвки',
      icon: 'Box',
    },
    {
      title: 'Грунтовки и пропитки',
      description: 'Защитные составы для подготовки поверхностей',
      icon: 'Shield',
    },
  ];

  const advantages = [
    {
      icon: 'TrendingUp',
      title: 'Широкий ассортимент',
      description: 'Более 5000 наименований продукции от ведущих производителей',
    },
    {
      icon: 'BadgeCheck',
      title: 'Гарантия качества',
      description: 'Все материалы сертифицированы и соответствуют ГОСТ',
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставка по Москве и области в течение 24 часов',
    },
    {
      icon: 'Users',
      title: 'Экспертная поддержка',
      description: 'Профессиональные консультации по подбору материалов',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/95088f3d-13fe-4d54-984f-084d1cf3bbea.png" 
                alt="ТехПроектТрейд"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-secondary">ТехПроектТрейд</h1>
                <p className="text-xs text-muted-foreground">Поставщик строительных материалов</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground'
                }`}
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'catalog' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Контакты
              </button>
            </nav>
            <Button className="hidden md:flex" onClick={() => scrollToSection('contacts')}>
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 bg-gradient-to-br from-muted to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-5xl font-bold leading-tight">
                  Надёжный поставщик
                  <span className="text-primary"> строительных материалов</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  ООО «ТехПроектТрейд» — ваш партнёр в поставке качественных лакокрасочных и
                  строительных материалов для профессионалов и частных клиентов
                </p>
                <div className="flex gap-4">
                  <Button size="lg" onClick={() => scrollToSection('catalog')}>
                    Смотреть каталог
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                    Узнать больше
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
                <img
                  src="https://cdn.poehali.dev/projects/5cadee6b-97bd-43a3-8c0c-747b1d26ba82/files/00566be3-7f70-41d1-aaf8-fa0f68af1199.jpg"
                  alt="Склад строительных материалов"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">О компании</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы специализируемся на поставках качественных материалов для строительства и ремонта
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/5cadee6b-97bd-43a3-8c0c-747b1d26ba82/files/22e74da1-83d6-43cb-adc7-b4b8366ede7d.jpg"
                  alt="Команда ТехПроектТрейд"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg">
                  ООО «ТехПроектТрейд» работает на рынке строительных материалов с 2024 года.
                  Мы предлагаем качественную продукцию и профессиональный сервис для наших клиентов.
                </p>
                <p className="text-lg">
                  Наша компания является официальным дистрибьютором ведущих производителей
                  лакокрасочных материалов и строительных смесей. Мы постоянно расширяем ассортимент
                  и следим за новинками отрасли.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">товаров</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3000+</div>
                    <div className="text-sm text-muted-foreground">клиентов</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-none shadow-lg hover-scale">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={advantage.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Широкий выбор лакокрасочных и строительных материалов для любых задач
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalogCategories.map((category, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover-scale cursor-pointer transition-all hover:shadow-xl"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={category.icon} size={28} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="border-none shadow-xl max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-12">
                  <Icon name="FileText" size={48} className="text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Нужна консультация по подбору?</h3>
                  <p className="text-muted-foreground mb-6">
                    Наши специалисты помогут подобрать оптимальные материалы для вашего проекта
                  </p>
                  <Button size="lg" onClick={() => scrollToSection('contacts')}>
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">Телефон</div>
                        <a href="tel:83952648055" className="text-primary hover:underline block">
                          8 (3952) 648-055
                        </a>
                        <a href="tel:89248312731" className="text-primary hover:underline block">
                          8 (924) 831-27-31
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">Email</div>
                        <a
                          href="mailto:CVV@tp-trade1.ru"
                          className="text-primary hover:underline"
                        >
                          CVV@tp-trade1.ru
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">Адрес</div>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Промышленная, д. 15, офис 301
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">Режим работы</div>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб-Вс: выходной</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Отправить заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="example@mail.ru" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea
                        placeholder="Расскажите о вашем проекте или вопросе"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/95088f3d-13fe-4d54-984f-084d1cf3bbea.png" 
                  alt="ТехПроектТрейд"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="font-bold text-lg">ТехПроектТрейд</h3>
              </div>
              <p className="text-sm text-white/80">
                Надёжный поставщик строительных материалов с 2024 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-white">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white">
                    О компании
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('catalog')} className="hover:text-white">
                    Каталог
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="hover:text-white">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>8 (3952) 648-055</li>
                <li>8 (924) 831-27-31</li>
                <li>CVV@tp-trade1.ru</li>
                <li>г. Москва, ул. Промышленная, д. 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Понедельник - Пятница</li>
                <li>9:00 - 18:00</li>
                <li className="pt-2">Суббота - Воскресенье</li>
                <li>Выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 ООО «ТехПроектТрейд». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;