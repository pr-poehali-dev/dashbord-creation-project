import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('analytics');

  const menuItems = [
    { id: 'analytics', label: 'Аналитика', icon: 'LineChart' },
    { id: 'users', label: 'Пользователи', icon: 'Users' },
    { id: 'notifications', label: 'Уведомления', icon: 'Bell' },
    { id: 'reports', label: 'Отчёты', icon: 'FileText' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  const statsData = [
    { title: 'Активные пользователи', value: '24,589', change: '+12.5%', trend: 'up', icon: 'Users', gradient: 'from-purple-500 to-pink-600' },
    { title: 'Общая выручка', value: '₽2.4M', change: '+8.2%', trend: 'up', icon: 'DollarSign', gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Конверсия', value: '3.24%', change: '+0.8%', trend: 'up', icon: 'TrendingUp', gradient: 'from-orange-500 to-red-500' },
    { title: 'Новые заявки', value: '1,249', change: '-2.4%', trend: 'down', icon: 'FileText', gradient: 'from-green-500 to-emerald-600' },
  ];

  const chartData = [
    { month: 'Янв', value: 45 },
    { month: 'Фев', value: 52 },
    { month: 'Мар', value: 48 },
    { month: 'Апр', value: 65 },
    { month: 'Май', value: 71 },
    { month: 'Июн', value: 68 },
    { month: 'Июл', value: 85 },
  ];

  const activityData = [
    { name: 'Веб-приложение', value: 68, color: 'bg-purple-500' },
    { name: 'Мобильное приложение', value: 45, color: 'bg-pink-500' },
    { name: 'API запросы', value: 82, color: 'bg-blue-500' },
    { name: 'База данных', value: 35, color: 'bg-orange-500' },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border p-6 animate-slide-in">
          <div className="mb-8">
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-sm text-sidebar-foreground/60 mt-1">Панель управления</p>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className={`w-full justify-start transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon name={item.icon as any} className="mr-3" size={18} />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-semibold">
                АП
              </div>
              <div>
                <p className="text-sm font-medium text-sidebar-foreground">Администратор</p>
                <p className="text-xs text-sidebar-foreground/60">admin@example.com</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
              {menuItems.find(item => item.id === activeSection)?.label}
            </h2>
            <p className="text-muted-foreground">Добро пожаловать в панель управления</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur animate-fade-in hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-card-foreground/70">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                      <Icon name={stat.icon as any} className="text-white" size={20} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-heading font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon 
                      name={stat.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={16}
                      className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}
                    />
                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">за месяц</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading">График активности</CardTitle>
                <CardDescription>Динамика за последние 7 месяцев</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-64 gap-4">
                  {chartData.map((item, index) => {
                    const height = (item.value / maxValue) * 100;
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="relative w-full group">
                          <div 
                            className="w-full bg-gradient-to-t from-purple-500 to-pink-600 rounded-t-lg transition-all duration-500 hover:from-purple-600 hover:to-pink-700 cursor-pointer"
                            style={{ 
                              height: `${height}%`,
                              minHeight: '40px',
                              animationDelay: `${index * 100}ms`
                            }}
                          />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {item.value}K
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{item.month}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading">Активность систем</CardTitle>
                <CardDescription>Загрузка в реальном времени</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {activityData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      <span className="text-sm font-bold text-foreground">{item.value}%</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full ${item.color} rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ 
                          width: `${item.value}%`,
                          animationDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Target" size={24} />
                  Цель месяца
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-4xl font-heading font-bold">85%</div>
                  <Progress value={85} className="h-2 bg-white/20" />
                  <p className="text-sm text-white/80">Осталось 15% до достижения цели</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Zap" size={24} />
                  Производительность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-4xl font-heading font-bold">92%</div>
                  <Progress value={92} className="h-2 bg-white/20" />
                  <p className="text-sm text-white/80">Отличная производительность системы</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-red-500 text-white animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="AlertCircle" size={24} />
                  Уведомления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-4xl font-heading font-bold">12</div>
                  <p className="text-sm text-white/80">Новых уведомлений требуют внимания</p>
                  <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                    Просмотреть все
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
