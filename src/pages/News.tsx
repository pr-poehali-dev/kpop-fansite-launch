import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const News = () => {
  const news = [
    {
      id: 1,
      title: "BLACKPINK объявили о мировом турне 2024",
      summary:
        "Девочки из BLACKPINK готовят грандиозный тур по всему миру с новыми песнями",
      group: "BLACKPINK",
      groupColor: "from-pink-500 to-rose-500",
      date: "15 июня 2024",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      category: "Туры",
    },
    {
      id: 2,
      title: "BTS представили новый альбом с неожиданным звучанием",
      summary:
        "Участники BTS экспериментируют с джазовыми мотивами в своем последнем релизе",
      group: "BTS",
      groupColor: "from-purple-500 to-indigo-500",
      date: "12 июня 2024",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      category: "Релизы",
    },
    {
      id: 3,
      title: "NewJeans побили рекорд стриминга на Spotify",
      summary:
        "Их новый трек набрал 50 миллионов прослушиваний за первые 24 часа",
      group: "NewJeans",
      groupColor: "from-blue-400 to-cyan-400",
      date: "10 июня 2024",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=250&fit=crop",
      category: "Рекорды",
    },
    {
      id: 4,
      title: "IVE готовят коллаборацию с западными артистами",
      summary:
        "Слухи о совместной работе с популярными американскими исполнителями подтверждаются",
      group: "IVE",
      groupColor: "from-emerald-400 to-teal-500",
      date: "8 июня 2024",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop",
      category: "Коллаборации",
    },
    {
      id: 5,
      title: "(G)I-DLE анонсировали сольные проекты участниц",
      summary:
        "Каждая участница группы работает над индивидуальным творческим проектом",
      group: "(G)I-DLE",
      groupColor: "from-red-400 to-pink-500",
      date: "5 июня 2024",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop",
      category: "Сольные проекты",
    },
  ];

  const categories = [
    "Все",
    "Туры",
    "Релизы",
    "Рекорды",
    "Коллаборации",
    "Сольные проекты",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">🎵 K-pop Новости</h1>
          <p className="text-xl opacity-90">
            Все самые свежие новости из мира корейской поп-музыки
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Все" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${article.groupColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {article.group}
                </div>
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                  {article.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg leading-tight hover:text-purple-600 transition-colors">
                  {article.title}
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500 gap-2">
                  <Icon name="Calendar" size={16} />
                  {article.date}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Читать полностью
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Загрузить еще новости
          </Button>
        </div>

        {/* Breaking News Ticker */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <Badge
              variant="secondary"
              className="bg-white text-red-500 font-bold"
            >
              🔥 BREAKING
            </Badge>
            <div className="flex-1 overflow-hidden">
              <p className="animate-pulse">
                STRAY KIDS объявили о специальном концерте в Москве! Билеты в
                продаже с понедельника...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
