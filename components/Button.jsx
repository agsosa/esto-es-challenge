import tw from 'twin.macro';

const Btn = tw.button`flex justify-around items-center space-x-2 bg-primary-500 text-white px-5 py-2 rounded-md`;

export default function Button({ icon, label, ...props }) {
  return (
    <Btn {...props}>
      {icon}
      <span>{label}</span>
    </Btn>
  );
}
