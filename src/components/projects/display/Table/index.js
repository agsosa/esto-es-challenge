import tw from 'twin.macro';
import Row from './Row';
import Header from './Header';

const Table = tw.table`w-full shadow-md`;

export default function TableComponent() {
  return (
    <Table>
      <Header />
      <Row />
    </Table>
  );
}


