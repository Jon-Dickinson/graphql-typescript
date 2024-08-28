export const resolvers = {
  Query: {
    routeByPath: async (_: any, args: { path: string }) => {
     
      return {
        path: args.path,
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
                value: "Find out about Hey Pharmacist's NHS repeat prescription pick-up service and how you can use it to easily collect your medication at your local pharmacy.",
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
                      // Add more components as needed
                    ],
                  },
                ],
              },
              // Add more sections as needed
            ],
          },
        },
      };
    },
  },
};
