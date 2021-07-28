import tw from 'twin.macro';
import Button from '@components/common/Button';

import { AiOutlinePlus } from 'react-icons/ai';

const Nav = tw.nav`bg-white px-12 py-4 h-20 shadow-lg border-b flex justify-between items-center`;
const NavTitle = tw.h1`font-bold text-xl`;

export default function NavComponent() {
  return (
    <Nav>
      <NavTitle>My projects</NavTitle>
      <Button icon={<AiOutlinePlus size='20px' />} label='Add project' />
    </Nav>
  );
}
