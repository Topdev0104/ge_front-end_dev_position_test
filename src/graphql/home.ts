export const graphqlSetting = (page: number, perView: number) => ({
  url: "https://graphql.anilist.co",
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
        query ( $page: Int, $perPage: Int) {
            Page (page: $page, perPage: $perPage) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                }
                media {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                }
            }
        }
    `,
      variables: {
        page: page,
        perPage: perView,
      },
    }),
  },
});
