import tw from 'twin.macro';

const Status = tw.div`inline px-2 py-1 bg-alabaster-500 rounded-lg border text-center`;

export default function StatusComponent({project}) {
  return <Status value={project?.status}>{project?.status ? "Enabled" : "Disabled"}</Status>;
}
