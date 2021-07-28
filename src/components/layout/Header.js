import tw from 'twin.macro';
import Link from 'next/link';

const Header = tw.header`bg-white px-12 py-4 h-20 border-b`;

const LogoPlaceholder = tw.a`
text-xl text-gray-400 
uppercase cursor-pointer 
transition duration-500 hover:text-black`;

export default function HeaderComponent() {
  return (
    <Header>
      <Link href='/'>
        <LogoPlaceholder>Logo</LogoPlaceholder>
      </Link>
    </Header>
  );
}
