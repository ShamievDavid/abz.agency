import { useEffect, useState } from 'react';
import './App.scss';
import { ThreeBlocks, Loader, AddPostButton, AddPostForm } from 'components';
import { useFetch } from 'hooks';

const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const { loadData, data, loading, error } = useFetch();
  const [addPost, setAddPost] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await loadData(POST_ENDPOINT);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      {loading && <Loader />}
      {error && <div>Error Component</div>}
      <ThreeBlocks data={data} />
      <AddPostButton setAddPost={setAddPost} />
      {addPost && <AddPostForm setAddPost={setAddPost} />}
    </div>
  );
}

export default App;
