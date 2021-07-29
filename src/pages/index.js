import { useState } from 'react';
import Main from '@components/layout/Main';
import Nav from '@components/layout/Nav';
import ProjectsTable from '@components/projects/display/Table';
import ProjectsCards from '@components/projects/display/Cards';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '@components/common/Button';
import { useRouter } from 'next/router';
import API from '@lib/API';
import { useMediaQuery } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import Pagination from '@components/common/Pagination';
import Search from '@components/projects/display/shared/Search';
import HStack from '@components/common/HStack';
import tw from 'twin.macro';

const ActionsContainer = tw.div`flex flex-col space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row justify-center items-center`;

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, error, isValidating } = API.getProjects(page, search);
  const [isLG] = useMediaQuery('(min-width: 1024px)');
  const handleAddProject = () => router.push('/projects/add');

  const handlePreviousPage = () => setPage((old) => old - 1);
  const handleNextPage = () => setPage((old) => old + 1);
  const handlePageJump = (page) => setPage(page);
  const handleSearch = (text) => setSearch(text);

  return (
    <>
      <Nav
        title={`My projects`}
        rightComponent={<ActionsContainer><Search onSearch={handleSearch} /><Button onClick={handleAddProject} icon={<AiOutlinePlus size='20px' />} label='Add project' /> </ActionsContainer>}
      />

      <Main>
        {isValidating && <Spinner size='xl' />}
        {/* Desktop */ !isValidating && isLG && <ProjectsTable projects={data?.result?.list} />}
        {/* Mobile */ !isValidating && !isLG && <ProjectsCards projects={data?.result?.list} />}
        {!isValidating && <Pagination totalPages={data?.result?.totalPages} page={page} onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} onPageJump={handlePageJump} />}
      </Main>
    </>
  );
}
