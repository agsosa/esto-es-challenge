import tw from 'twin.macro';
import Image from 'next/image';
import HStack from '@components/common/HStack';

const AsigneeAvatar = tw(Image)`rounded-full bg-gray-200`;

export default function Row({project}) {
  return (
    <HStack>
      <AsigneeAvatar src='/person.webp' width='30px' height='30px' />
      <span>{project?.assignee?.firstName} {project?.assignee?.lastName}</span>
    </HStack>
  );
}
