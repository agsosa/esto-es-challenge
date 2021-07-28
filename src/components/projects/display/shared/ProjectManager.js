import tw from 'twin.macro';
import HStack from '@components/common/HStack';

const ManagerAvatar = tw.div`rounded-full bg-caramel-500 text-burnt-500 text-xs px-1 flex justify-center items-center`;

export default function ProjectManager() {
  return (
    <HStack>
      <ManagerAvatar>WC</ManagerAvatar>
      <span>Walt Cosani</span>
    </HStack>
  );
}
