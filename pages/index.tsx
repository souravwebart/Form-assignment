import Head from "next/head";
import axios from "axios";
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import HomeComponent from "../Component/homeComponent";
import error from "next/error";

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>ADmyBRAND India</title>
      </Head>
      <HomeComponent data={data} />
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
