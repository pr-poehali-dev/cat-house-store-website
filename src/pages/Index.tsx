import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cart, setCart] = useState<
    { id: number; name: string; price: number }[]
  >([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Уютный деревянный домик",
      price: 2500,
      image: "/img/2cc5ae4b-a6b9-423d-bbd6-37d15fe28007.jpg",
      description:
        "Современный домик из натурального дерева с мягкими подушками",
    },
    {
      id: 2,
      name: "Многоуровневый комплекс",
      price: 4500,
      image: "/img/6ea3950d-1948-4be6-bfff-435d799707a8.jpg",
      description: "Роскошный комплекс с когтеточками и уютными лежанками",
    },
    {
      id: 3,
      name: "Компактный домик-лежанка",
      price: 1800,
      image: "/img/e4123961-a560-4879-8814-9ae0e7733d45.jpg",
      description: "Идеальный домик для маленьких котиков",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна",
      rating: 5,
      text: "Мой Мурзик просто обожает свой новый домик! Качество отличное, дерево натуральное.",
      catPhoto: "/img/e4123961-a560-4879-8814-9ae0e7733d45.jpg",
      catName: "Мурзик",
    },
    {
      id: 2,
      name: "Дмитрий",
      rating: 5,
      text: "Заказал комплекс для двух кошек. Они в восторге! Много места для игр и отдыха.",
      catPhoto: "/img/2cc5ae4b-a6b9-423d-bbd6-37d15fe28007.jpg",
      catName: "Барсик и Муся",
    },
  ];

  const addToCart = (product: (typeof products)[0]) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">КотоДом</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-gray-500">Корзина пуста</p>
                  ) : (
                    <>
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 border rounded"
                        >
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-500">
                              {item.price} ₽
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      ))}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-bold">
                            Итого: {totalPrice} ₽
                          </span>
                        </div>
                        <Button className="w-full">Оформить заказ</Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Уютные домики для ваших{" "}
            <span className="text-primary">котиков</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаем современные и комфортные домики из натуральных материалов.
            Каждый котик заслуживает свой особенный уголок!
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="animate-fade-in">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="animate-fade-in">
              <Icon name="Heart" size={20} className="mr-2" />
              Отзывы котиков
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Каталог домиков
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow animate-fade-in"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price} ₽
                    </span>
                    <Button
                      onClick={() => addToCart(product)}
                      className="hover-scale"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Отзывы счастливых котиков
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={review.catPhoto} />
                      <AvatarFallback>{review.catName[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Icon name="Camera" size={16} />
                    <span>Фото: {review.catName}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить отзыв с фото
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Добавить отзыв</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="reviewer-name">Ваше имя</Label>
                    <Input id="reviewer-name" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="cat-name">Имя котика</Label>
                    <Input id="cat-name" placeholder="Имя вашего котика" />
                  </div>
                  <div>
                    <Label htmlFor="review-text">Отзыв</Label>
                    <Textarea
                      id="review-text"
                      placeholder="Расскажите о вашем опыте..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="cat-photo">Фото котика</Label>
                    <Input id="cat-photo" type="file" accept="image/*" />
                  </div>
                  <Button className="w-full">Отправить отзыв</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>
                  Мы всегда рады помочь вашим котикам!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Кошачья, 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@kotodom.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Задать вопрос</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Home" size={24} className="text-primary" />
            <span className="text-xl font-bold">КотоДом</span>
          </div>
          <p className="text-gray-400">© 2024 КотоДом. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
