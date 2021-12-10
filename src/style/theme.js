const theme = {
    components: {
        Button: {
            base: {
                fontWeight: 500,
                borderRadius: "6px"
            },
            variants: {
                solid: {
                    default: {
                        border: "none",
                        bachgroundColor: "#E0E0E0",
                        "&:hover": {
                            bachgroundColor: "#AEAEAE",
                        }
                    }
                }
            },
            sizes: {
                md: {
                    fontSize: "14px",
                    padding: "0.57rem 1.14rem"
                }
            },
            default: {
                size: "md",
                variant: "solid",
                color: "default"
            }
        }
    }
};

export default theme;