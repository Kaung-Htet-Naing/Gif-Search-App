import React from 'react';
import Enter from './Enter.svg';

export function Search({ search, setSearch, fetchData, setTitle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(search);
    fetchData(search);
    setSearch('');
  };
  return (
    <div>
      <form className='gif-search' onSubmit={handleSubmit}>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className='gif-btn-submit' type='submit'>
          <img className='svg' src={Enter} alt='enter' />
        </button>
      </form>
    </div>
  );
}
