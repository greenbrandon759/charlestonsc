import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function PageHeader({ title, description, imageSrc, imageAlt }: PageHeaderProps) {
  return (
    <div className="relative h-[50vh] flex items-center justify-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl">{description}</p>
      </div>
    </div>
  );
}