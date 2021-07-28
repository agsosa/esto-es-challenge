import tw from 'twin.macro';

const Status = tw.div`inline px-2 py-1 bg-alabaster-500 rounded-lg border text-center`;

export default function StatusComponent() {
  return <Status>Enabled</Status>;
}
