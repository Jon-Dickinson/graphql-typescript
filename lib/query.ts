// lib/query.ts
import { gql } from "@apollo/client";

export const GET_ROUTE_BY_PATH = gql`
  query GetRouteByPath($path: String!) {
    routeByPath(path: $path) {
      path
      page {
        id
        type
        locale
        pageContent {
          pageType
          published
          id
          title
          fullWidthLayout
          secondaryBackground
          createdAt
          author {
            id
            name
          }
          metaTags {
            key
            value
            type
          }
          sections {
            type
            settings {
              key
              value
            }
            blocks {
              name
              options {
                width
              }
              components {
                label
                html {
                  raw
                  html
                }
                alignment
              }
            }
          }
        }
      }
    }
  }
`;
