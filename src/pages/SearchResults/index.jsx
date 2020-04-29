import React, { useState, useEffect } from 'react';
import './SearchResultsPage.scss';
import { useHistory } from 'react-router-dom';
import { useGlobalStore } from '../../store';
import { searchPosters } from '../../store/modules/search/actions';

export const SearchResultsPage = () => {
  const { state, dispatch } = useGlobalStore();
  const history = useHistory();

  const { search } = state;

  const [collection, setCollection] = useState({
    limit: 0,
    offset: 0,
    total: 0,
    items: [],
  });
  const { searchQuery } = search;

  useEffect(() => {
    setCollection(search.results.collection);
  }, [search.results.collection]);

  const { paginatedPosters } = state.search;

  const handlePagination = async (direction = 'prev') => {
    if (direction === 'next') {
      return collection.total > collection.offset + collection.limit && dispatch(
        searchPosters({
          query: searchQuery,
          offset: collection.offset + collection.limit,
          limit: collection.limit,
        }),
      );
    }


    return collection.offset > 0 && dispatch(
      searchPosters({
        query: searchQuery,
        offset: collection.offset - collection.limit,
        limit: collection.limit,
      }),
    );
  };

  return (
    <div className="app-body row">
      {paginatedPosters.map((poster) => (
        <div key={poster.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="poster-card">
            <div className="image-container">
              <img width="100%" src={poster.thumb_url_medium} alt="" />
            </div>
            <div className="poster-card-body">
              <h2 role="presentation" onClick={() => history.push(`/poster/${poster.id}`)} className="title text-fade">{poster.title}</h2>
              <div className="mt-3">
                Authors:
                <div className="scrollable">
                  {poster.authorsData.map((author) => (
                    <div key={author.id} className="authors">
                      {author.name}
                    </div>
                  ))}
                </div>
              </div>
              {poster.keywords.length > 0 && (
                <div className="mt-2">
                  Key Words:
                  <div className="scrollable">
                    {poster.keywords.map((keyword) => (
                      <div key={keyword} className="keyword">
                        {keyword}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="event-name mt-2">
                Event Name:
                <h6>{poster.eventName}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}

      {paginatedPosters.length > 0 && (
      <div className="d-flex justify-content-between w-100">
        <button
          onClick={() => handlePagination('prev')}
          type="button"
          disabled={collection.offset <= 0}
          className={`btn btn-light ${collection.offset <= 0 ? 'invisible' : 'visible'}`}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => handlePagination('next')}
          disabled={collection.offset + collection.limit > collection.total}
          className={`btn btn-primary ${collection.offset + collection.limit > collection.total ? 'invisible' : 'visible'}`}
        >
          Next
        </button>
      </div>
      )}
    </div>
  );
};
