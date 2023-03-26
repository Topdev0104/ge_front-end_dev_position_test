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
                media(startDate_greater: 2020, sort: START_DATE, genre:"Action") {
                    id
                    title {
                        native
                    }
                    siteUrl
                    startDate {
                      year
                      month
                      day
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
