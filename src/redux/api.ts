import type {Issue} from './IssuesSlice';

type ResponseKind = 'success' | 'failure';

type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};

export const fetchIssues = async (
  page: number,
  count: number,
): Promise<NetworkResponse<Issue[]>> => {
  const response = await fetch(
    `https://api.github.com/repos/facebook/react-native/issues?page=${page}&per_page=${count}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  if (response.ok) {
    const json = await response.json();

    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
