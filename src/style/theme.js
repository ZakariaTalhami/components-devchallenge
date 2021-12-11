const theme = {
  components: {
    Button: {
      base: {
        fontWeight: 500,
        borderRadius: '6px',
        color: '#3F3F3F',
        cursor: 'pointer',
      },
      variants: {
        solid: {
          base: {
            border: 'none',
          },
          default: {
            backgroundColor: '#E0E0E0',
            '&:hover, &:focus': {
              backgroundColor: '#AEAEAE',
            },
          },
          primary: {
            color: '#FFFFFF',
            backgroundColor: '#2962FF',
            '&:hover, &:focus': {
              backgroundColor: '#0039CB',
            },
          },
          secondary: {
            color: '#FFFFFF',
            backgroundColor: '#455A64',
            '&:hover, &:focus': {
              backgroundColor: '#1C313A',
            },
          },
          danger: {
            color: '#FFFFFF',
            backgroundColor: '#D32F2F',
            '&:hover, &:focus': {
              backgroundColor: '#9A0007',
            },
          },
        },
        outline: {
          base: {
            border: '1px solid',
            background: 'none',
          },
          default: {
            color: '#AEAEAE',
            borderColor: '#AEAEAE',
            background: 'none',
            '&:hover, &:focus': {
              backgroundColor: '#AEAEAE1a',
            },
          },
          primary: {
            color: '#2962FF',
            borderColor: '#2962FF',
            '&:hover, &:focus': {
              backgroundColor: '#2962FF1a',
            },
          },
          secondary: {
            color: '#455A64',
            borderColor: '#455A64',
            '&:hover, &:focus': {
              backgroundColor: '#455A641a',
            },
          },
          danger: {
            color: '#D32F2F',
            borderColor: '#D32F2F',
            '&:hover, &:focus': {
              backgroundColor: '#D32F2F1a',
            },
          },
        },
        text: {
          base: {
            border: 'none',
            background: 'none',
          },
          default: {
            color: '#AEAEAE',
            '&:hover, &:focus': {
              backgroundColor: '#AEAEAE1a',
            },
          },
          primary: {
            color: '#2962FF',
            '&:hover, &:focus': {
              backgroundColor: '#2962FF1a',
            },
          },
          secondary: {
            color: '#455A64',
            '&:hover, &:focus': {
              backgroundColor: '#455A641a',
            },
          },
          danger: {
            color: '#D32F2F',
            '&:hover, &:focus': {
              backgroundColor: '#D32F2F1a',
            },
          },
        },
      },
      sizes: {
        sm: {
          fontSize: '14px',
          padding: '0.42rem 0.85rem',
        },
        md: {
          fontSize: '14px',
          padding: '0.57rem 1.14rem',
        },
        lg: {
          fontSize: '14px',
          padding: '0.78rem 1.57rem',
        },
      },
      boxShadow: {
        boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)',
      },
      default: {
        size: 'md',
        variant: 'solid',
        color: 'default',
        shadowed: false,
      },
    },
  },
};

export default theme;
