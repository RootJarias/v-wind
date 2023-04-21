/*
Notes: 
  - Meta Key should be newRouteName
  - To compose route name should be '<UserType>Route::<my-new-route>'
  - To compose meta:
    meta: {
      title: '<App Name> - <Page Name>',
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
        {
          property: 'og:description',
          content: 'This is a example meta description.',
        },
      ],
    },
*/

const appName = 'V-Wind';

const meta = {
  base: {
    home: {
      title: `${appName} - Home`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
      ],
    },
    updates: {
      title: `${appName} - Updates`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
      ],
    },
    aboutUs: {
      title: `${appName} - About Us`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
      ],
    },
    components: {
      title: `${appName} - Components`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
      ],
      modules: {
        buttons: {
          title: `${appName} - Components :: Buttons`,
        },
        cards: {
          title: `${appName} - Components :: Cards`,
        },
      },
    },
    layouts: {
      title: `${appName} - Layouts`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
      ],
    },
    utilities: {
      title: `${appName} - Utilities`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
      ],
    },
    tools: {
      title: `${appName} - Tools`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
      ],
    },
  },
};

export default meta;
