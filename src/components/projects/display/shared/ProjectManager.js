import tw from 'twin.macro';
import HStack from '@components/common/HStack';

const ManagerAvatar = tw.div`rounded-full bg-caramel-500 text-burnt-500 text-xs px-1 flex justify-center items-center`;

export default function ProjectManager({project}) {
  return (
    <HStack>
      <ManagerAvatar>{project?.manager?.firstName[0]}{project?.manager?.lastName[0]}</ManagerAvatar>
      <span>{project?.manager?.firstName} {project?.manager?.lastName}</span>
    </HStack>
  );
}
