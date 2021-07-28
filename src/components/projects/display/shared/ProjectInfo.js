import tw from 'twin.macro';
import VStack from '@components/common/VStack';

const DateText = tw.span`text-sm text-gray-400`;

export default function ProjectInfo() {
  return (
    <VStack>
      <span>Landing Page</span>
      <DateText>Creation date: 28/07/2021 15:31</DateText>
    </VStack>
  );
}
