import tw from 'twin.macro';
import { HiDotsVertical } from 'react-icons/hi';

const MenuBtn = tw(HiDotsVertical)`text-2xl`;

export default function Actions() {
  return <MenuBtn />;
}
