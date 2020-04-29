/* eslint-disable camelcase */
// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalStore } from '../../store';
import { getPoster } from '../../store/modules/poster/actions';

export const PosterPage = () => {
  const { state, dispatch } = useGlobalStore();

  const { posterId } = useParams();

  const { poster: posterResult } = state;

  const { poster, event, users } = posterResult;

  useEffect(() => {
    dispatch(getPoster({ posterId }));
  }, [dispatch, posterId]);

  return (
    <div className="app-body">
      <div className="col-12">
        <div className="poster-card poster-card--full">
          <div className="image-container">
            <img width="100%" src={poster?.thumb_url_medium} alt="" />
          </div>
          <div className="poster-card-body">
            <h2
              role="presentation"
              className="h2 text-center"
            >
              {poster.title}
            </h2>
            <div>{poster.paper_abstract}</div>
            <div className="mt-3">
              Authors:
              <div className="scrollable">
                {users?.map((author) => (
                  <div key={author.id} className="authors">
                    {author.full_name}
                  </div>
                ))}
              </div>
            </div>
            {poster?.keywords?.length > 0 && (
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
              <h6>{event.name}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
