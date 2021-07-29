import tw from 'twin.macro';
import VStack from '@components/common/VStack';
import HStack from '@components/common/HStack';

const DateValue = tw.span`text-sm text-gray-400`;
const DateLabel = tw(DateValue)`hidden sm:flex`;

export default function ProjectInfo({ project }) {
  const d = new Date(project?.createdAt);
  let dateString;

  if (d && !isNaN(d.getTime()))
    dateString = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()} ${
      d.getHours() > 12 ? 'pm' : 'am'
    }`;

  return (
    <VStack>
      <span>{project?.projectName}</span>
      <HStack><DateLabel>Creation date:</DateLabel> <DateValue>{dateString}</DateValue></HStack>
    </VStack>
  );
}
