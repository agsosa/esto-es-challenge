// Vertical stack (flex col)

import tw, { styled} from 'twin.macro';

export default styled.td(({ centered }) => [tw`flex flex-col`, centered && tw`justify-center items-center`]);