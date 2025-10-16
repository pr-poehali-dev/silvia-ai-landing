import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [chatMessages, setChatMessages] = useState<Message[]>([
    { id: 1, text: "Здравствуйте! Я AI-ассистент Silvia. Чем могу помочь?", sender: 'bot', timestamp: new Date() }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const botResponses: { [key: string]: string } = {
    "привет": "Здравствуйте! Рад помочь вам с автоматизацией бизнес-процессов.",
    "цена": "Стоимость зависит от сложности задачи. Оставьте заявку, и мы подготовим индивидуальное предложение.",
    "услуги": "Мы предлагаем: создание чат-ботов, голосовых помощников, интеграцию систем и сложные автоматизации.",
    "контакт": "Звоните: 8 (800) 101-71-39 или пишите: support@silvla-ai.ru",
    "время": "Мы работаем Пн-Пт с 10:00 до 19:00",
    "default": "Интересный вопрос! Для детальной консультации свяжитесь с нами по телефону 8 (800) 101-71-39"
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage: Message = {
      id: chatMessages.length + 1,
      text: userInput,
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = userInput.toLowerCase();
      let responseText = botResponses.default;

      for (const key in botResponses) {
        if (lowerInput.includes(key)) {
          responseText = botResponses[key];
          break;
        }
      }

      const botMessage: Message = {
        id: chatMessages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заявку, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "Bot",
      title: "Цифровые сотрудники",
      description: "Чат-боты и AI-ассистенты для автоматизации коммуникации с клиентами 24/7. Обработка заявок, консультации, поддержка.",
      features: ["Обработка до 1000 диалогов/день", "Интеграция с CRM", "Многоязычность"]
    },
    {
      icon: "Mic",
      title: "Голосовые помощники",
      description: "Интеллектуальные голосовые системы для обработки звонков, записи клиентов и консультаций по телефону.",
      features: ["Распознавание речи", "Естественный голос", "Запись разговоров"]
    },
    {
      icon: "Network",
      title: "Интеграции систем",
      description: "Подключение и синхронизация всех бизнес-систем: CRM, 1С, склад, аналитика в единую экосистему.",
      features: ["API любой сложности", "Синхронизация данных", "Безопасность"]
    },
    {
      icon: "Workflow",
      title: "Сложные автоматизации",
      description: "Решение нестандартных задач и оптимизация уникальных бизнес-процессов под ваши требования.",
      features: ["Индивидуальные решения", "Анализ процессов", "Масштабируемость"]
    }
  ];

  const voiceExamples = [
    {
      title: "Служба поддержки клиентов",
      industry: "E-commerce",
      metrics: "500+ звонков/день",
      description: "Голосовой ассистент для первичной консультации, проверки статуса заказов и маршрутизации обращений к специалистам.",
      results: ["Снижение нагрузки на операторов на 70%", "Среднее время ответа: 15 секунд", "Удовлетворенность клиентов: 92%"]
    },
    {
      title: "Запись на услуги",
      industry: "Медицина",
      metrics: "Конверсия 85%",
      description: "Автоматическая запись пациентов на прием через телефонные звонки с интеграцией в медицинскую информационную систему.",
      results: ["Работа 24/7 без выходных", "Сокращение времени записи в 3 раза", "Отмена записи и перенос онлайн"]
    },
    {
      title: "Квалификация лидов",
      industry: "B2B продажи",
      metrics: "Экономия 40 часов/неделю",
      description: "Предварительный опрос потенциальных клиентов, сегментация по критериям и передача горячих лидов менеджерам.",
      results: ["Увеличение конверсии в 2.5 раза", "Автоматическая оценка качества лида", "Интеграция с Битрикс24"]
    }
  ];

  const stats = [
    { value: "500+", label: "Автоматизированных процессов" },
    { value: "24/7", label: "Работа без выходных" },
    { value: "85%", label: "Средняя экономия времени" },
    { value: "92%", label: "Удовлетворенность клиентов" }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Быстрое внедрение",
      description: "От идеи до запуска за 2-4 недели"
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Соответствие требованиям 152-ФЗ"
    },
    {
      icon: "TrendingUp",
      title: "Масштабируемость",
      description: "Решения растут вместе с бизнесом"
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 24/7",
      description: "Техподдержка и консультации"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SILVIA AI
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#demo" className="text-sm font-medium hover:text-primary transition-colors">Демо</a>
            <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:flex">
            <a href="#contact-form">Связаться</a>
          </Button>
          <Button size="icon" variant="outline" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">🚀 Автоматизация нового поколения</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
              Автоматизация<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                бизнес-процессов
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Создание цифровых и голосовых сотрудников для решения нестандартных задач вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow" asChild>
                <a href="#contact-form">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Получить консультацию
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#demo">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть демо
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для автоматизации любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Icon name="CheckCircle2" size={16} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Демонстрация в реальном времени
            </h2>
            <p className="text-lg text-muted-foreground">
              Попробуйте пообщаться с нашим AI-ассистентом прямо сейчас
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-2">
              <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Bot" size={24} />
                </div>
                <div>
                  <div className="font-bold">Silvia AI Ассистент</div>
                  <div className="text-xs text-white/80 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Онлайн
                  </div>
                </div>
              </div>
              <div className="h-[400px] overflow-y-auto p-6 bg-gray-50">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-white border border-gray-200 text-gray-800'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                        {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Напишите сообщение... (попробуйте: цена, услуги, контакт)"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon" className="flex-shrink-0">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
            <div className="text-center mt-6 text-sm text-muted-foreground">
              💡 Попробуйте спросить про цену, услуги или контакты
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Примеры работ
            </h2>
            <p className="text-lg text-muted-foreground">
              Голосовые помощники для различных отраслей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {voiceExamples.map((example, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Mic" size={24} className="text-white" />
                  </div>
                  <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {example.industry}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{example.title}</h3>
                <div className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <Icon name="TrendingUp" size={16} />
                  {example.metrics}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{example.description}</p>
                <div className="border-t pt-4">
                  <div className="text-xs font-semibold text-secondary mb-2">Результаты:</div>
                  <ul className="space-y-2">
                    {example.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-xs text-muted-foreground">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground">
              Преимущества работы с Silvia AI
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес офиса
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  г. Москва, ул. Красноказарменная 14,<br />
                  БЦ «Омега», офис 41
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <Icon name="Navigation" size={16} className="text-primary" />
                    Как проехать
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Станция метро «Авиамоторная»<br />
                    Выход в город на пр. Дзержинского, из перехода направо до остановки автобуса «ПКиО Березовая роща»
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Время работы
                </h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground flex justify-between">
                    <span>Пн-Пт:</span>
                    <span className="font-semibold text-secondary">10:00-19:00</span>
                  </p>
                  <p className="text-muted-foreground flex justify-between">
                    <span>Сб-Вс:</span>
                    <span className="font-semibold text-secondary">выходной</span>
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Свяжитесь с нами
                </h3>
                <a href="tel:88001017139" className="text-primary hover:underline text-xl font-bold block mb-3 flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  8 (800) 101-71-39
                </a>
                <a href="mailto:support@silvla-ai.ru" className="text-primary hover:underline block mb-4 flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  support@silvla-ai.ru
                </a>
                <div className="flex gap-3 mt-4">
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hover:shadow-lg transition-shadow" title="Telegram">
                    <Icon name="Send" size={20} className="text-white" />
                  </a>
                  <a href="https://vk.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hover:shadow-lg transition-shadow" title="VK">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </a>
                </div>
              </Card>
            </div>

            <Card id="contact-form" className="p-8 border-2 border-primary/20 h-fit">
              <h3 className="text-2xl font-bold text-secondary mb-2">Оставить заявку</h3>
              <p className="text-muted-foreground mb-6">Заполните форму, и мы свяжемся с вами в течение часа</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-secondary mb-1 block">Ваше имя *</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary mb-1 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="ivan@company.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary mb-1 block">Телефон *</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary mb-1 block">Опишите вашу задачу</label>
                  <Textarea
                    placeholder="Расскажите, какой процесс вы хотите автоматизировать..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-secondary to-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold">SILVIA AI</div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Автоматизация бизнес-процессов с помощью AI-технологий нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Услуги</h4>
              <div className="space-y-2 text-sm">
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Цифровые сотрудники</a>
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Голосовые помощники</a>
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Интеграции систем</a>
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Автоматизации</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Навигация</h4>
              <div className="space-y-2 text-sm">
                <a href="#demo" className="block text-white/70 hover:text-white transition-colors">Демо</a>
                <a href="#examples" className="block text-white/70 hover:text-white transition-colors">Кейсы</a>
                <a href="#benefits" className="block text-white/70 hover:text-white transition-colors">Преимущества</a>
                <a href="#contacts" className="block text-white/70 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (800) 101-71-39
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@silvla-ai.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Пн-Пт: 10:00-19:00
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70 text-center md:text-left">
              &copy; {new Date().getFullYear()} SILVIA AI. Все права защищены.
            </p>
            <div className="flex gap-4 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
