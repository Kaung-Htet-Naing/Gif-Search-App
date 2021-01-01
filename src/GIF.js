import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Right from './arrowRight.svg';
import Left from './arrowLeft.svg';
import Reset from './reset.svg';
import { Search } from './Search';
import { fetchTrending } from './Giftrending';

const Gif = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('Gif');
  const [loader, setLoader] = useState(true);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(40);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState('');
  const [trending, setTrending] = useState(false);
  const [trendSearch, setTrendSearch] = useState(false);

  async function fetchData(title) {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&offset=${offset}`;

    const fetchGif = await axios(URL);

    if (fetchGif.status === 200) {
      setData(fetchGif.data.data);
      setTotalCount(fetchGif.data.pagination.total);
      setLoader(false);
      if (trending) {
        setTrending(false);
        setOffset(0);
      }
      setTrendSearch(false);
    }
  }

  useEffect(() => {
    if (trending) {
      fetchTrending(
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
      );
    }
    if (!trending) {
      fetchData(title);
    }
  }, [offset]);

  const onTop = () => {
    let options = { top: 0, left: 0, behavior: 'smooth' };
    window.scrollTo(options);
  };

  const handleNext = () => {
    setLoader(true);
    setOffset(offset + limit);
    onTop();
  };

  const handlePrev = () => {
    setLoader(true);
    setOffset(offset - limit);
    onTop();
  };

  const handleDownload = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      let urlCreator = window.URL || window.webkitURL;
      let imageUrl = urlCreator.createObjectURL(this.response);
      let tag = document.createElement('a');
      tag.href = imageUrl;
      tag.download = title.charAt(0).toUpperCase() + title.slice(1);
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  };

  const content = () => {
    switch (true) {
      case loader:
        return <div>Loading...</div>;
      case data.length > 0:
        return data.map((g, index) => {
          console.log(g);
          return (
            <div className='gif-card' key={g.id}>
              <img
                onClick={() => handleDownload(g.images.fixed_height.url)}
                className='image'
                src={g.images.fixed_width.url}
                alt='gif'
              />
            </div>
          );
        });
      default:
        return data;
    }
  };

  return (
    <div>
      <header>
        <a href='/catalog' style={{ textDecoration: 'none' }}>
          <h1 className='gif-title-h1'> Gif Search</h1>
        </a>
        <div style={{ color: 'white' }}>
          <strong>Search ==> </strong> {title}
        </div>
        <Search search={search} setSearch={setSearch} fetchData={fetchData} setTitle={setTitle} />
        <a href='/catalog'>
          <img className='svg' src={Reset} alt='reset' />
        </a>
      </header>
      <button
        className='gif-btn-trending'
        onClick={() =>
          fetchTrending(
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
          )
        }
      >
        Trending
      </button>
      <div className='gif-wrap'>{content()}</div>
      <div className='pagination'>
        {totalCount === 0 ? (
          ''
        ) : offset < limit ? (
          <img onClick={handleNext} className='svg' src={Right} alt='right' />
        ) : offset >= totalCount ? (
          <img onClick={handlePrev} className='svg' src={Left} alt='left' />
        ) : (
          <div>
            <img onClick={handlePrev} className='svg' src={Left} alt='left' />
            <img onClick={handleNext} className='svg' src={Right} alt='right' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gif;
