import { AuthFields, NewsType } from '../types'
import { newsApiUrl } from '../const'

const mockUsersData: AuthFields[] = [
  {
    login: 'Admin',
    password: '12345',
  }
]

const mockFetch = async (params: AuthFields): Promise<void> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return mockUsersData.filter(item => item.login === params.login && item.password === params.password).length
				? resolve() : reject()
		}, 500)
	})
}

export const fetchData = async (params: AuthFields): Promise<boolean> => {
	return mockFetch(params)
		.then(() => true)
		.catch(() => false)
}

export const fetchNews = async (): Promise<NewsType[]> => {
  return fetch(newsApiUrl)
    .then((resp) => resp.json())
    .then((data: any) => data.articles)
		.catch((err) => {
			// tslint:disable-next-line: no-console
			console.error(err)
			return []
		})
}