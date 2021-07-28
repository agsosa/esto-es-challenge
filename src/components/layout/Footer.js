import tw from 'twin.macro';
import Image from 'next/image';
import { Tooltip } from '@chakra-ui/react';

const Footer = tw.footer`bg-gray-200 border-t w-full p-10 flex items-center justify-between`;

const Left = tw.span`text-lg font-semibold flex justify-center items-center space-x-4`;
const YearText = tw.span`ml-1 text-gray-400 text-base font-normal`;

const Right = tw.span`flex space-x-3 justify-center items-center text-gray-800`;
const TechContainer = tw.div`grid grid-cols-4 gap-3`;

const Img = tw(Image)`opacity-50 hover:opacity-90 transition duration-500`;

const techIconSize = { width: 38, height: 34 };

const techs = [
  { name: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript', image: '/js.webp' },
  { name: 'React.js', url: 'https://reactjs.org/', image: '/reactjs.webp' },
  { name: 'Next.js', url: 'https://nextjs.org/', image: '/nextjs.webp' },
  { name: 'TailwindCSS', url: 'https://tailwindcss.com/', image: '/tailwind.webp' },
];

export default function FooterComponent() {
  return (
    <Footer>
      <Left>
        Alejandro Sosa <YearText>© {new Date().getFullYear()}</YearText>
      </Left>
      <Right>
        <span>Created with</span>
        <TechContainer>
          {techs.map((t) => (
            <Tooltip key={t.name} label={t.name} aria-label={t.name} placement='top'>
              <a href={t.url} target='_blank'>
                <Img src={t.image} {...techIconSize} />
              </a>
            </Tooltip>
          ))}
        </TechContainer>
      </Right>
    </Footer>
  );
}
