import tw, { styled} from 'twin.macro';

export default styled.td(({ centered }) => [tw`flex space-x-2`, centered && tw`justify-center items-center`]); // Horizontal (flex row)