import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface ForumPost {
  id: number;
  title: string;
  author: string;
  avatar: string;
  content: string;
  category: string;
  replies: number;
  likes: number;
  timestamp: string;
}

const mockPosts: ForumPost[] = [
  {
    id: 1,
    title: "Новый альбом BLACKPINK - обсуждение треков",
    author: "KpopFan2024",
    avatar: "/placeholder.svg",
    content: "Что думаете о новом альбоме? Какой трек больше всего понравился?",
    category: "BLACKPINK",
    replies: 23,
    likes: 45,
    timestamp: "2 часа назад",
  },
  {
    id: 2,
    title: "BTS comeback - когда ждать?",
    author: "ArmyForever",
    avatar: "/placeholder.svg",
    content: "Есть ли какие-то новости о предстоящем камбэке BTS?",
    category: "BTS",
    replies: 67,
    likes: 89,
    timestamp: "5 часов назад",
  },
  {
    id: 3,
    title: "Рекомендации для новичков в K-pop",
    author: "KpopGuide",
    avatar: "/placeholder.svg",
    content:
      "Составляю список must-listen треков для тех, кто только знакомится с K-pop",
    category: "Общее",
    replies: 34,
    likes: 56,
    timestamp: "1 день назад",
  },
];

export default function Forum() {
  const [posts, setPosts] = useState<ForumPost[]>(mockPosts);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Общее");

  const categories = [
    "Общее",
    "BTS",
    "BLACKPINK",
    "TWICE",
    "aespa",
    "NewJeans",
    "Другие",
  ];

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      const newPost: ForumPost = {
        id: posts.length + 1,
        title: newPostTitle,
        author: "Гость",
        avatar: "/placeholder.svg",
        content: newPostContent,
        category: selectedCategory,
        replies: 0,
        likes: 0,
        timestamp: "только что",
      };
      setPosts([newPost, ...posts]);
      setNewPostTitle("");
      setNewPostContent("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            K-pop Форум 🎵
          </h1>
          <p className="text-gray-600">
            Обсуждай любимых айдолов и делись мнением о музыке
          </p>
        </div>

        {/* Create Post Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="PlusCircle" size={20} />
              Создать новый пост
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Заголовок поста"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              <select
                className="px-3 py-2 border border-gray-300 rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <Textarea
              placeholder="Содержание поста..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              rows={3}
            />
            <Button onClick={handleCreatePost} className="w-full">
              <Icon name="Send" size={16} className="mr-2" />
              Опубликовать
            </Button>
          </CardContent>
        </Card>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm text-gray-600">
                        {post.author} • {post.timestamp}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{post.category}</Badge>
                </div>

                <p className="text-gray-700 mb-4">{post.content}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="MessageCircle" size={16} />
                    {post.replies} ответов
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Heart" size={16} />
                    {post.likes} лайков
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Reply" size={16} className="mr-1" />
                    Ответить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Filter */}
        <Card>
          <CardHeader>
            <CardTitle>Популярные категории</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-white"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
