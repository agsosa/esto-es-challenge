import tw, { styled } from 'twin.macro';

const TableRow = tw.tr`border-b`;
const Header = styled.th(({ roundedLeft, roundedRight }) => [
  tw`p-6 bg-alabaster-500 text-black text-left`,
  roundedLeft && tw`rounded-tl-lg`,
  roundedRight && tw`rounded-tr-lg`,
]);

export default function Row() {
  return (
    <TableRow>
      <Header roundedLeft>Project Info</Header>
      <Header>Project Manager</Header>
      <Header>Assigned to</Header>
      <Header>Status</Header>
      <Header roundedRight>Action</Header>
    </TableRow>
  );
}
