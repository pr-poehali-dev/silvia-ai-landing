import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Bot",
      title: "Цифровые сотрудники",
      description: "Чат-боты и AI-ассистенты для автоматизации коммуникации с клиентами 24/7"
    },
    {
      icon: "Mic",
      title: "Голосовые помощники",
      description: "Интеллектуальные голосовые системы для обработки звонков и консультаций"
    },
    {
      icon: "Network",
      title: "Интеграции",
      description: "Подключение и синхронизация всех бизнес-систем в единую экосистему"
    },
    {
      icon: "Workflow",
      title: "Сложные автоматизации",
      description: "Решение нестандартных задач и оптимизация уникальных бизнес-процессов"
    }
  ];

  const examples = [
    {
      title: "Служба поддержки клиентов",
      metrics: "Обработка 500+ звонков/день",
      description: "Голосовой ассистент для первичной консультации и маршрутизации обращений"
    },
    {
      title: "Запись на услуги",
      metrics: "Конверсия 85%",
      description: "Автоматическая запись клиентов через телефонные звонки с интеграцией в CRM"
    },
    {
      title: "Квалификация лидов",
      metrics: "Экономия 40 часов/неделю",
      description: "Предварительный опрос потенциальных клиентов и сегментация по критериям"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-secondary">SILVIA AI</div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#demo" className="text-sm font-medium hover:text-primary transition-colors">Демо</a>
            <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#contact-form">Связаться</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
              Автоматизация<br />бизнес-процессов
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создание цифровых и голосовых сотрудников для решения нестандартных задач вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#contact-form">Получить консультацию</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#demo">Смотреть демо</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-8">
            Демонстрация в реальном времени
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Посмотрите, как работает наш чат-бот
          </p>
          <div className="bg-secondary rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <Icon name="PlayCircle" size={80} className="text-white mb-4 mx-auto" />
                <p className="text-white text-lg">Видео демонстрация чат-бота</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-8">
            Примеры работ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Голосовые помощники для различных задач
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mic" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{example.title}</h3>
                <div className="text-primary font-semibold mb-3">{example.metrics}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{example.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-3">500+</div>
              <div className="text-muted-foreground">Автоматизированных процессов</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-3">24/7</div>
              <div className="text-muted-foreground">Работа без выходных</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-3">85%</div>
              <div className="text-muted-foreground">Средняя экономия времени</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  г. Москва, ул. Красноказарменная 14,<br />
                  БЦ «Омега», офис 41
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Станция метро «Авиамоторная»<br />
                  Выход в город на пр. Дзержинского, из перехода направо до остановки автобуса «ПКиО Березовая роща»
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Время работы
                </h3>
                <p className="text-muted-foreground">Пн-Пт: 10:00-19:00</p>
                <p className="text-muted-foreground">Сб-Вс: выходной</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Свяжитесь с нами
                </h3>
                <a href="tel:88001017139" className="text-primary hover:underline text-lg font-semibold block mb-2">
                  8 (800) 101-71-39
                </a>
                <a href="mailto:support@silvla-ai.ru" className="text-primary hover:underline block mb-4">
                  support@silvla-ai.ru
                </a>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Icon name="Send" size={20} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            <Card id="contact-form" className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Отправить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о вашей задаче"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">SILVIA AI</div>
              <p className="text-white/70 text-sm">
                Автоматизация бизнес-процессов с помощью AI-технологий
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Услуги</a>
                <a href="#demo" className="block text-white/70 hover:text-white transition-colors">Демо</a>
                <a href="#examples" className="block text-white/70 hover:text-white transition-colors">Кейсы</a>
                <a href="#contacts" className="block text-white/70 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>8 (800) 101-71-39</p>
                <p>support@silvla-ai.ru</p>
                <p>Пн-Пт: 10:00-19:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; {new Date().getFullYear()} SILVIA AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
