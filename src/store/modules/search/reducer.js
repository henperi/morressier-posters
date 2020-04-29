/* eslint-disable camelcase */
import { types } from './types';

/**
* @typedef {{
    limit: number,
    offset: number,
    total: number,
    items: string[] // array of poster ids
  }} Collection
*/

/**
* @typedef {{
    end_date: string,
    id: string,
    language: string,
    location: string,
    name: string,
    short_name: string,
    start_date: string,
    venue: string,
    website_url: string,
  }} Event
*/

/**
 * @typedef {{
    id: string,
    title: string,
    full_name: string,
    picture_url: string,
    is_activated: boolean,
    organization: string,
    department: string,
    organization_location: string,
}} User
*/

/**
 * @typedef {{
    authors: string[], // array of MorressierUser ids
    author_names: string[], // array of MorressierUser ids
    event: string, // MorressierEvent id
    eventName?: string, // MorressierEvent id
    id: string,
    keywords?: string[],
    paper_abstract?: string,
    public_access_enabled: boolean,
    submission_completed: boolean,
    title: string,
    uploaded_at: string,
    thumb_url: string,
    thumb_url_medium: string,
    thumb_url_large: string,
    authorsData?: {name: string, id: string}[]
}} Poster
*/

/**
 * @typedef {{
  collection: Collection,
  events: Event[],
  posters: Poster[],
  users: User[]
}} Results
*/

/**
 * @type {{ searchQuery: string, paginatedPosters: Poster[], results: Results}}
 */
export const searchInitialState = {
  searchQuery: '',
  paginatedPosters: [],
  results: {
    collection: {
      limit: 0,
      offset: 0,
      total: 0,
      items: [],
    },
    events: [],
    posters: [],
    users: [],
  },
};

export const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };

    case types.SET_SEARCH_RESULTS: {
      const getEventName = (eventId) => {
        const event = action.payload.results.events.find((thisEvent) => thisEvent.id === eventId);

        return event?.name;
      };

      const getAuthorNames = (authorIdList) => {
        const authorNames = authorIdList.map((authorId) => {
          const author = action.payload.results.users.find((user) => user.id === authorId);

          return {
            id: author?.id,
            name: author?.full_name,
          };
        });

        return authorNames;
      };

      const posters = action.payload.results.posters.map((poster) => ({
        ...poster,
        eventName: getEventName(poster.event),
        authorsData: getAuthorNames(poster.authors),
      }));

      return {
        ...state,
        paginatedPosters: [...posters],
        results: action.payload.results,
      };
    }

    case types.CLEAR_SEARCH_RESULTS: {
      return {
        ...state,
        paginatedPosters: [],
        results: searchInitialState.results,
      };
    }

    default:
      return state;
  }
};
