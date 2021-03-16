import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((r) => r.json());
const Home = () => {
  const { data, error } = useSWR(`/api/curriculo`, fetcher);

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