import  tw from 'twin.macro';

const Container = tw.div`h-full w-full flex justify-center items-center p-12 lg:p-24`;
const Text = tw.h1`text-lg md:text-xl font-semibold`;

export default function Custom404() {
  return <Container><Text>404 - Page Not Found</Text></Container>
}