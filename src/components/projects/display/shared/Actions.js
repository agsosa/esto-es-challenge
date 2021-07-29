/*
  Popover to display and trigger actions for a specific project (edit, delete)

  To use simply pass a project object through props
*/

import { useState } from 'react';
import tw from 'twin.macro';
import { HiDotsVertical, HiOutlinePencilAlt } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow } from '@chakra-ui/react';
import { showConfirmation, showSuccess, showError } from '@lib/Alerts';
import API from '@lib/API';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';

const MenuBtn = tw.button`text-2xl`;

const ItemList = tw.ul`flex flex-col`;
const Item = tw.li`flex space-x-2 items-center border-b p-3 w-full cursor-pointer transition duration-500 hover:bg-gray-100`;

export default function Actions({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  // On edit click
  const handleEdit = () => {
    router.push(`/projects/update/${project.id}`);
  };

  // On delete click
  const handleDelete = async () => {
    const isConfirmed = await showConfirmation({
      title: 'Delete project',
      description: `Do you want to delete the project "${project.projectName}"?`,
    });

    if (isConfirmed) {
      const deleted = await API.deleteProject(project.id);
      if (deleted) showSuccess(); else showError();
    }
  };

  return (
    <>
      <Popover returnFocusOnClose={false} isOpen={isOpen} onClose={close} placement='bottom' closeOnBlur closeOnEsc>
        <PopoverTrigger>
          <MenuBtn onClick={open}>
            <HiDotsVertical />
          </MenuBtn>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <ItemList>
            <Item onClick={handleEdit}>
              <HiOutlinePencilAlt />
              <span>Edit</span>
            </Item>
            <Item onClick={handleDelete}>
              <AiOutlineDelete />
              <span>Delete</span>
            </Item>
          </ItemList>
        </PopoverContent>
      </Popover>
    </>
  );
}

Actions.propTypes = {
  project: PropTypes.shape({ id: PropTypes.number.isRequired, projectName: PropTypes.string.isRequired }).isRequired
}