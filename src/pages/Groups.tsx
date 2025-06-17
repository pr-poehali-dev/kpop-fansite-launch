import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState("BLACKPINK");

  const groups = {
    BLACKPINK: {
      color: "from-pink-500 to-rose-500",
      members: [
        {
          name: "Дженни",
          rating: 4.9,
          photo:
            "https://images.unsplash.com/photo-1494790108755-2616c27fa49b?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Лиса",
          rating: 4.8,
          photo:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Розэ",
          rating: 4.7,
          photo:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Джису",
          rating: 4.6,
          photo:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
        },
      ],
      playlist: [
        "How You Like That",
        "Kill This Love",
        "DDU-DU DDU-DU",
        "Pink Venom",
      ],
    },
    BTS: {
      color: "from-purple-500 to-indigo-500",
      members: [
        {
          name: "Джин",
          rating: 4.9,
          photo:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Шуга",
          rating: 4.8,
          photo:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Джей-Хоуп",
          rating: 4.7,
          photo:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "РМ",
          rating: 4.6,
          photo:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        },
      ],
      playlist: ["Dynamite", "Butter", "Permission to Dance", "My Universe"],
    },
    TWICE: {
      color: "from-orange-400 to-pink-400",
      members: [
        {
          name: "Наён",
          rating: 4.8,
          photo:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Чонён",
          rating: 4.7,
          photo:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Мина",
          rating: 4.6,
          photo:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
        {
          name: "Сана",
          rating: 4.5,
          photo:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        },
      ],
      playlist: ["What Is Love?", "TT", "Fancy", "Feel Special"],
    },
  };

  const events = [
    { date: "25 дек", title: "BLACKPINK World Tour", venue: "Москва Арена" },
    {
      date: "15 янв",
      title: "BTS Online Concert",
      venue: "Виртуальный концерт",
    },
    { date: "3 фев", title: "TWICE Fan Meeting", venue: "СК Олимпийский" },
  ];

  const contests = [
    {
      title: "Викторина K-pop 2024",
      prize: "🎁 Альбом с автографами",
      participants: 1247,
    },
    {
      title: "Конкурс танцев",
      prize: "🏆 Билеты на концерт",
      participants: 892,
    },
    {
      title: "Фото-челлендж",
      prize: "💎 Эксклюзивные фотокарты",
      participants: 2156,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b-4 border-pink-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              K-POP ГРУППЫ ✨
            </h1>
            <Button
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="groups" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="groups" className="text-purple-700">
              👥 Группы
            </TabsTrigger>
            <TabsTrigger value="cards" className="text-pink-700">
              🎴 Фотокарты
            </TabsTrigger>
            <TabsTrigger value="events" className="text-orange-700">
              📅 События
            </TabsTrigger>
            <TabsTrigger value="contests" className="text-green-700">
              🏆 Конкурсы
            </TabsTrigger>
          </TabsList>

          {/* Groups Tab */}
          <TabsContent value="groups" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.keys(groups).map((groupName) => (
                <Card
                  key={groupName}
                  className={`cursor-pointer transition-all hover:scale-105 bg-gradient-to-br ${groups[groupName].color} text-white border-0 shadow-xl ${selectedGroup === groupName ? "ring-4 ring-white" : ""}`}
                  onClick={() => setSelectedGroup(groupName)}
                >
                  <CardHeader>
                    <CardTitle className="text-center text-xl font-bold">
                      {groupName}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Selected Group Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Members Rating */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Icon name="Star" size={20} />
                    Рейтинг участников {selectedGroup}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {groups[selectedGroup].members.map((member, index) => (
                    <div
                      key={member.name}
                      className="flex items-center gap-4 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-purple-600">
                        #{index + 1}
                      </div>
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-pink-300"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Icon
                            name="Star"
                            size={16}
                            className="text-yellow-500 fill-current"
                          />
                          <span className="text-sm font-bold text-gray-700">
                            {member.rating}
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-pink-300 text-pink-600"
                      >
                        Голосовать
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Playlist */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Icon name="Music" size={20} />
                    Плейлист {selectedGroup}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {groups[selectedGroup].playlist.map((song, index) => (
                    <div
                      key={song}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{song}</h4>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-purple-600"
                      >
                        <Icon name="Play" size={16} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Photo Cards Tab */}
          <TabsContent value="cards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
                <Card
                  key={card}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:scale-105 transition-transform"
                >
                  <CardContent className="p-4">
                    <div className="bg-gradient-to-br from-pink-200 to-purple-200 h-40 rounded-lg mb-3 flex items-center justify-center">
                      <Icon
                        name="Image"
                        size={40}
                        className="text-purple-500"
                      />
                    </div>
                    <h3 className="font-bold text-center text-gray-800">
                      Фотокарта #{card}
                    </h3>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-pink-500 hover:bg-pink-600"
                      >
                        Обменять
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-300 text-purple-600"
                      >
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-xl"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-orange-400 to-pink-500 text-white px-3 py-2 rounded-lg text-center">
                        <div className="text-xs font-semibold">
                          {event.date.split(" ")[1]}
                        </div>
                        <div className="text-lg font-bold">
                          {event.date.split(" ")[0]}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-purple-700">
                          {event.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{event.venue}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      Узнать подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contests Tab */}
          <TabsContent value="contests" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contests.map((contest, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-xl"
                >
                  <CardHeader>
                    <CardTitle className="text-purple-700">
                      {contest.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Users" size={16} />
                      {contest.participants} участников
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🏆</div>
                        <div className="font-semibold text-gray-800">
                          {contest.prize}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                      Участвовать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Groups;
