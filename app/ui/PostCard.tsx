import Image from 'next/image';
import Link from 'next/link';

export default function NewneekCard({ title, imageUrl, href }) {
  return (
    <Link
      href={`/post/${href}`}
      className="grid grid-cols-[auto_103px] items-center gap-4 border-b border-gray-100 py-4
                 md:grid-cols-[4fr_6fr] md:gap-3
                 lg:flex lg:flex-col lg:items-start lg:border-none lg:py-0"
    >
      {/* 이미지 영역: 모바일은 뒤(order-2), 태블릿부터는 위/앞(md:order-1) */}
      <div className="relative order-2 aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-100 md:order-1">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-fit"
        />
      </div>

      {/* 텍스트 영역: 모바일은 앞(order-1), 태블릿부터는 아래(md:order-2) */}
      <div className="order-1 flex flex-col gap-2 md:order-2">
        <h3 className="line-clamp-2 text-base font-bold text-gray-900 lg:text-lg">
          {title}
        </h3>
        <div className="flex flex-row gap-2">
          { /*
          <div className="text-xs font-bold text-gray-700">{category}</div>
          <div className="text-xs text-gray-500 font-regular">{date}</div>
          */ }
        </div>
      </div>
    </Link>
  );
}
