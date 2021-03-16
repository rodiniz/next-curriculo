import useSWR from 'swr';
const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : `https://next-curriculo.vercel.app`;
const fetcher = (url) => fetch(url).then((r) => r.json());
export async function getStaticProps() {
  const curriculo = await fetcher(`${server}/api/curriculo`)
  return { props: { curriculo } }
}
const Home = (props) => {
  const { data ,error} = useSWR(`${server}/api/curriculo`, fetcher, { initialData: props.curriculo })
  if (error) return <div>failed to load</div>;

  return (
    <div>
      <h1>Customer</h1>
      <hr />
      {data ? (
        <div>
          <p className="name">
             {data.Resumo}
          </p>
        
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Home;