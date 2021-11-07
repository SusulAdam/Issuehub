import type {Issue, OneIssue} from './IssuesSlice';

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

export const fetchOneIssue = async (
  url: string,
): Promise<NetworkResponse<OneIssue>> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();

  if (response.ok) {
    return {
      body: json,
      kind: 'success',
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
