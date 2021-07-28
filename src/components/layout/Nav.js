import tw from 'twin.macro';
import HStack from '@components/common/HStack';
import {  AiOutlineArrowLeft } from 'react-icons/ai';
import useHistory from '@lib/useHistory';
import { useRouter } from 'next/router';

const Nav = tw.nav`bg-white px-12 py-4 h-20 shadow-lg border-b flex justify-between items-center`;
const NavTitle = tw.h1`font-bold text-xl`;

const BackBtn = tw.button`flex justify-center items-center space-x-2 cursor-pointer mr-3`;

export default function NavComponent({ useBack, title, rightComponent }) {
  const { previous } = useHistory();
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <Nav>
      <HStack centered>
        {previous != null && useBack && (
          <BackBtn onClick={handleBack}>
            <AiOutlineArrowLeft /> <span>Back</span>
          </BackBtn>
        )}
        <NavTitle>{title}</NavTitle>
      </HStack>
      {rightComponent}
    </Nav>
  );
}
