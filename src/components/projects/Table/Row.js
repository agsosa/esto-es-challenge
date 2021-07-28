import tw from 'twin.macro';
import Image from 'next/image';
import { HiDotsVertical } from 'react-icons/hi';

const VStack = tw.td`flex flex-col`; // Vertical (flex col)
const HStack = tw.td`flex space-x-2`; // Horizontal (flex row)

const TableRow = tw.tr`bg-white`;
const Data = tw.td`p-5 border-b`;

const DateText = tw.span`text-sm text-gray-400`;

const ManagerAvatar = tw.div`rounded-full bg-caramel-500 text-burnt-500 text-xs px-1 flex justify-center items-center`;
const AsigneeAvatar = tw(Image)`rounded-full bg-gray-200`;

const MenuBtn = tw(HiDotsVertical)`text-2xl`;

const Status = tw.div`inline px-2 py-1 bg-alabaster-500 rounded-lg border text-center`;

export default function Row() {
  return (
    <TableRow>
      <Data>
        <VStack>
          <span>Landing Page</span>
          <DateText>Creation date: 28/07/2021 15:31</DateText>
        </VStack>
      </Data>
      <Data>
        <HStack>
          <ManagerAvatar>WC</ManagerAvatar>
          <span>Walt Cosani</span>
        </HStack>
      </Data>
      <Data>
        <HStack>
          <AsigneeAvatar src='/person.webp' width='30px' height='30px' />
          <span>Ignacio Truffa</span>
        </HStack>
      </Data>
      <Data>
        <Status>Enabled</Status>
      </Data>
      <Data>
        <MenuBtn />
      </Data>
    </TableRow>
  );
}
