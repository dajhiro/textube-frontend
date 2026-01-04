export type Post = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  likes: number;
  comments: number;
  views: number;
};

export const mockPosts: Post[] = [
  {
    id: "1",
    title: 'Next.js App Router로 블로그 만들기',
    description: 'App Router의 새로운 기능과 Server Components를 활용한 블로그 구축 가이드',
    imageUrl: 'https://picsum.photos/seed/nextjs/600/400',
    author: 'TexTube',
    date: '2025.01.03',
    category: '개발',
    likes: 124,
    comments: 8,
    views: 2847,
  },
  {
    id: "2",
    title: '무한 스크롤 UX를 설계할 때 고민해야 할 것들',
    description: '사용자 경험을 해치지 않으면서 무한 스크롤을 구현하는 방법',
    imageUrl: 'https://picsum.photos/seed/scroll/600/400',
    author: 'TexTube',
    date: '2025.01.02',
    category: 'UX/UI',
    likes: 89,
    comments: 5,
    views: 1923,
  },
  {
    id: "3",
    title: 'SNS 피드처럼 글을 배치하면 생기는 변화',
    description: '피드 기반 레이아웃이 사용자 참여도에 미치는 영향 분석',
    imageUrl: 'https://picsum.photos/seed/feed/600/400',
    author: 'TexTube',
    date: '2025.01.01',
    category: '디자인',
    likes: 156,
    comments: 12,
    views: 3512,
  },
  {
    id: "4",
    title: '카드 UI vs 리스트 UI, 언제 무엇을 써야 할까',
    description: '상황에 맞는 UI 패턴 선택 가이드와 실전 적용 사례',
    imageUrl: 'https://picsum.photos/seed/ui/600/400',
    author: 'TexTube',
    date: '2024.12.30',
    category: 'UX/UI',
    likes: 203,
    comments: 15,
    views: 4156,
  },
  {
    id: "5",
    title: '개발자가 UX를 설계할 때 빠지기 쉬운 함정',
    description: '기술 중심 사고에서 벗어나 사용자 중심으로 설계하는 법',
    imageUrl: 'https://picsum.photos/seed/ux/600/400',
    author: 'TexTube',
    date: '2024.12.28',
    category: '개발',
    likes: 178,
    comments: 9,
    views: 3089,
  },
];

