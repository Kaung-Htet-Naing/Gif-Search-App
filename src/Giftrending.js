import axios from 'axios';

export const fetchTrending = async (
  limit,
  offset,
  setOffset,
  setTrending,
  setData,
  setLoader,
  setTotalCount,
  content,
  setTrendSearch,
  title,
  setTitle
) => {
  try {
    let URL = `https://api.giphy.com/v1/gifs/trending?&api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&offset=${offset}`;
    let fetchGif = await axios(URL);
    let fetchRes = await fetchGif;
    if (fetchRes.status === 200) {
      setData(fetchRes.data.data);
      setTotalCount(fetchRes.data.pagination.total_count);
      setLoader(false);
      setTrending(true);
      if (title !== 'Trending') {
        setTitle('Trending');
        if (offset > 0) {
          setOffset(0);
        }
      }
      content();
      setTrendSearch(false);
    }
  } catch (error) {
    if (error) throw error;
  }
};
