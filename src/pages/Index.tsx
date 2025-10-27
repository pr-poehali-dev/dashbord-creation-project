import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [selectedCar, setSelectedCar] = useState({
    brand: '',
    model: '',
    engine: '',
    year: '',
    power: ''
  });

  const cars = [
    { brand: 'Audi', model: 'A4', engine: '2.0 TFSI', year: '2020', power: '190' },
    { brand: 'Audi', model: 'A6', engine: '3.0 TDI', year: '2019', power: '272' },
    { brand: 'BMW', model: '320i', engine: '2.0', year: '2021', power: '184' },
    { brand: 'BMW', model: '520d', engine: '2.0 Diesel', year: '2020', power: '190' },
    { brand: 'BMW', model: 'X5', engine: '3.0d', year: '2019', power: '265' },
    { brand: 'Mercedes-Benz', model: 'C200', engine: '1.5', year: '2021', power: '184' },
    { brand: 'Mercedes-Benz', model: 'E220d', engine: '2.0 Diesel', year: '2020', power: '194' },
    { brand: 'Mercedes-Benz', model: 'GLE', engine: '3.0 Diesel', year: '2019', power: '272' },
    { brand: 'Volkswagen', model: 'Golf GTI', engine: '2.0 TSI', year: '2021', power: '245' },
    { brand: 'Volkswagen', model: 'Tiguan', engine: '2.0 TDI', year: '2020', power: '150' },
    { brand: 'Volkswagen', model: 'Passat', engine: '1.5 TSI', year: '2019', power: '150' },
    { brand: 'Škoda', model: 'Octavia', engine: '1.5 TSI', year: '2021', power: '150' },
    { brand: 'Škoda', model: 'Superb', engine: '2.0 TSI', year: '2020', power: '190' },
    { brand: 'Toyota', model: 'Camry', engine: '2.5', year: '2021', power: '181' },
    { brand: 'Toyota', model: 'RAV4', engine: '2.0', year: '2020', power: '173' },
    { brand: 'Ford', model: 'Focus ST', engine: '2.3 EcoBoost', year: '2020', power: '280' },
    { brand: 'Ford', model: 'Mondeo', engine: '2.0 TDCi', year: '2019', power: '150' },
    { brand: 'Hyundai', model: 'Tucson', engine: '2.0 CRDi', year: '2021', power: '185' },
    { brand: 'Hyundai', model: 'Santa Fe', engine: '2.2 CRDi', year: '2020', power: '200' },
    { brand: 'Kia', model: 'Sportage', engine: '2.0 CRDi', year: '2021', power: '185' },
  ];

  const brands = [...new Set(cars.map(car => car.brand))].sort();

  const benefits = [
    {
      icon: 'Zap',
      title: 'Прирост мощности',
      description: 'До +30% к мощности и крутящему моменту',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'DollarSign',
      title: 'Экономия топлива',
      description: 'Снижение расхода топлива до 15%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Сертифицированное оборудование и гарантия',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Clock',
      title: 'Быстро',
      description: 'Работа занимает 1-2 часа',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    {
      name: 'Stage 1',
      description: 'Базовый чип-тюнинг',
      features: ['Прирост мощности +15-20%', 'Оптимизация топливной карты', 'Улучшение динамики', 'Гарантия 1 год'],
      price: '15 000 ₽',
      popular: false
    },
    {
      name: 'Stage 2',
      description: 'Продвинутый тюнинг',
      features: ['Прирост мощности +25-30%', 'Удаление катализатора', 'Настройка под премиум топливо', 'Гарантия 2 года'],
      price: '25 000 ₽',
      popular: true
    },
    {
      name: 'Stage 3',
      description: 'Максимальная производительность',
      features: ['Прирост мощности до +40%', 'Полная перенастройка ЭБУ', 'Доработка турбины', 'Гарантия 3 года'],
      price: '45 000 ₽',
      popular: false
    }
  ];

  const steps = [
    { icon: 'Search', title: 'Диагностика', description: 'Проверка состояния автомобиля' },
    { icon: 'Laptop', title: 'Считывание', description: 'Снятие заводской прошивки ЭБУ' },
    { icon: 'Settings', title: 'Настройка', description: 'Оптимизация программы под ваш авто' },
    { icon: 'CheckCircle', title: 'Прошивка', description: 'Загрузка новой программы и тестирование' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Gauge" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CarDialog
            </span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="text-foreground/80 hover:text-primary transition-colors">Процесс</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-semibold">🚀 Профессиональный чип-тюнинг</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Раскройте <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">потенциал</span> вашего авто
              </h1>
              <p className="text-xl text-muted-foreground">
                Увеличьте мощность до 30%, снизьте расход топлива и получите новые ощущения от вождения с CarDialog
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Записаться на тюнинг
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (999) 123-45-67
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Авто настроено</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="text-foreground/80">Мощность</span>
                    <span className="text-2xl font-bold text-primary">+30%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="text-foreground/80">Крутящий момент</span>
                    <span className="text-2xl font-bold text-secondary">+35%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="text-foreground/80">Расход топлива</span>
                    <span className="text-2xl font-bold text-green-500">-15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Почему выбирают <span className="text-primary">CarDialog</span>?
            </h2>
            <p className="text-xl text-muted-foreground">Профессиональный подход к каждому автомобилю</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-0 bg-card/50 backdrop-blur hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                    <Icon name={benefit.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наши <span className="text-primary">услуги</span>
            </h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный пакет для вашего автомобиля</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`relative border-2 ${service.popular ? 'border-primary shadow-xl shadow-primary/20 scale-105' : 'border-border'} bg-card hover:border-primary/50 transition-all duration-300`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-semibold">
                    Популярно
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-heading font-bold text-primary">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${service.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                    variant={service.popular ? 'default' : 'outline'}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Как мы <span className="text-primary">работаем</span>?
            </h2>
            <p className="text-xl text-muted-foreground">Простой и прозрачный процесс чип-тюнинга</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon name={step.icon as any} className="text-white" size={36} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Готовы <span className="text-primary">начать</span>?
            </h2>
            <p className="text-xl text-muted-foreground">Выберите ваш автомобиль и оставьте заявку</p>
          </div>
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4 p-6 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-lg font-heading font-semibold flex items-center gap-2">
                    <Icon name="Car" size={20} />
                    Выберите ваш автомобиль
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Марка</label>
                      <Select 
                        value={selectedCar.brand} 
                        onValueChange={(value) => {
                          setSelectedCar({...selectedCar, brand: value, model: '', engine: '', year: '', power: ''});
                        }}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Выберите марку" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map((brand) => (
                            <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Модель</label>
                      <Select 
                        value={selectedCar.model} 
                        onValueChange={(value) => {
                          const car = cars.find(c => c.brand === selectedCar.brand && c.model === value);
                          if (car) {
                            setSelectedCar({
                              brand: car.brand,
                              model: car.model,
                              engine: car.engine,
                              year: car.year,
                              power: car.power
                            });
                          }
                        }}
                        disabled={!selectedCar.brand}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Выберите модель" />
                        </SelectTrigger>
                        <SelectContent>
                          {cars
                            .filter(car => car.brand === selectedCar.brand)
                            .map((car, index) => (
                              <SelectItem key={index} value={car.model}>
                                {car.model} ({car.engine}, {car.year})
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {selectedCar.model && (
                    <div className="grid grid-cols-3 gap-4 p-4 bg-background rounded-lg border border-primary/20 animate-fade-in">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Объем двигателя</div>
                        <div className="text-lg font-bold text-primary">{selectedCar.engine}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Год выпуска</div>
                        <div className="text-lg font-bold text-secondary">{selectedCar.year}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Мощность</div>
                        <div className="text-lg font-bold text-accent">{selectedCar.power} л.с.</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-muted/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-muted/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших пожеланиях..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="bg-muted/50"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Gauge" className="text-white" size={20} />
                </div>
                <span className="text-xl font-heading font-bold">CarDialog</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Профессиональный чип-тюнинг автомобилей с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Stage 1</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Stage 2</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Stage 3</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@cardialog.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 CarDialog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;