import tw from 'twin.macro';
import Box from '@components/common/Box';
import { Input } from '@chakra-ui/react';
import Button from '@components/common/Button';
import { Select } from "@chakra-ui/react"

const FormContainer = tw.div`flex flex-col space-y-5 justify-start items-start`;
const InputContainer = tw.div`flex flex-col w-full`;

export default function Form() {
  return (
    <Box>
      <FormContainer>
        <InputContainer>
          <span>Project name</span>
          <Input placeholder='' />
        </InputContainer>
        
        <InputContainer>
          <span>Description</span>
          <Input placeholder='' />
        </InputContainer>

        <InputContainer>
          <span>Project manager</span>
          <Select placeholder='Select a person'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <span>Assigned to</span>
          <Select placeholder='Select a person'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <span>Status</span>
          <Select placeholder='Select status'>
            <option value='option1'>Enabled</option>
            <option value='option2'>Disabled</option>
          </Select>
        </InputContainer>

        <Button label='Create project' />
      </FormContainer>
    </Box>
  );
}
