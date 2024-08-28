import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type CmsUser {
    id: ID!
    name: String!
  }

  type CmsPageMetaTag {
    key: String!
    value: String!
    type: String!
  }

  type CmsHtmlField {
    raw: String!
    html: String!
  }

  type CmsImageVersion {
    size: String!
    url: String!
    width: Int!
    height: Int!
  }

  type CmsImage {
    alt: String!
    sizes: [CmsImageVersion!]!
  }

  type CmsTextCard {
    title: String
    copy: String!
    image: CmsImage!
  }

  type CmsPageIntroComponent {
    options: CmsComponentOptions!
    label: String!
    html: CmsHtmlField!
    alignment: String!
  }

  type CmsComponentOptions {
    displayLabel: Boolean!
  }

  type CmsLayoutBlockOptions {
    width: Int!
  }

  type CmsLayoutBlock {
    name: String!
    options: CmsLayoutBlockOptions!
    components: [CmsPageIntroComponent!]!
  }

  type CmsSectionLayoutSettings {
    key: String!
    value: String!
  }

  type CmsLayoutSection {
    type: String!
    settings: [CmsSectionLayoutSettings!]!
    blocks: [CmsLayoutBlock!]!
  }

  type CmsPageContent {
    pageType: String!
    published: Boolean!
    id: ID!
    title: String!
    fullWidthLayout: Boolean!
    secondaryBackground: Boolean!
    createdAt: String!
    author: CmsUser!
    metaTags: [CmsPageMetaTag!]!
    sections: [CmsLayoutSection!]!
  }

  type CmsPage {
    id: ID!
    type: String!
    locale: String!
    pageContent: CmsPageContent!
  }

  type Route {
    path: String!
    page: CmsPage!
  }

  type Query {
    routeByPath(path: String!): Route!
  }
`;

// Example resolvers
const resolvers = {
  Query: {
    routeByPath: (_: any, { path }: { path: string }) => {
      // Mock data for the demonstration
      return {
        path,
        page: {
          id: "3920",
          type: "CmsPage",
          locale: "en_GB",
          pageContent: {
            pageType: "BASIC",
            published: true,
            id: "3920",
            title: "Collection",
            fullWidthLayout: false,
            secondaryBackground: true,
            createdAt: "2022-04-01T13:35:25.000Z",
            author: {
              id: "98",
              name: "jgrayson",
            },
            metaTags: [
              {
                key: "title",
                value: "Prescription Collection at Your Pharmacy | Hey Pharmacist",
                type: "Value",
              },
              {
                key: "description",
                value: "Find out about Hey Pharmacist's NHS repeat prescription pick-up service...",
                type: "Value",
              },
              {
                key: "canonical",
                value: "https://heypharmacist.co.uk/repeat-prescriptions/collection",
                type: "Link",
              },
            ],
            sections: [
              {
                type: "onecol",
                settings: [
                  {
                    key: "section_full_width",
                    value: "1",
                  },
                  {
                    key: "section_colour",
                    value: "0",
                  },
                ],
                blocks: [
                  {
                    name: "content",
                    options: {
                      width: 100,
                    },
                    components: [
                      {
                        options: {
                          displayLabel: false,
                        },
                        label: "Collection from your local pharmacy",
                        html: {
                          raw: "<p>We know how important visiting your local pharmacy can be...</p>",
                          html: "<p>We know how important visiting your local pharmacy can be...</p>",
                        },
                        alignment: "center",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      };
    },
  },
};

// Exporting the schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
