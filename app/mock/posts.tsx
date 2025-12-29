export type Post = {
  id: string;
  title: string;
  imageUrl: string;
};

export const mockPosts: Post[] = [
  {
    id: "1",
    title: 'Next.js App Router로 블로그 만들기',
    imageUrl: 'https://picsum.photos/seed/nextjs/600/400',
  },
  {
    id: "2",
    title: '무한 스크롤 UX를 설계할 때 고민해야 할 것들',
    imageUrl: 'https://picsum.photos/seed/scroll/600/400',
  },
  {
    id: "3",
    title: 'SNS 피드처럼 글을 배치하면 생기는 변화',
    imageUrl: 'https://picsum.photos/seed/feed/600/400',
  },
  {
    id: "4",
    title: '카드 UI vs 리스트 UI, 언제 무엇을 써야 할까',
    imageUrl: 'https://picsum.photos/seed/ui/600/400',
  },
  {
    id: "5",
    title: '개발자가 UX를 설계할 때 빠지기 쉬운 함정',
    imageUrl: 'https://picsum.photos/seed/ux/600/400',
  },
];

