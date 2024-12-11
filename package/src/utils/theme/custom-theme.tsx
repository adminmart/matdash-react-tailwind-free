const customTheme = {
  button: {
    base: "group relative flex items-stretch justify-center text-center p-0.5 text-center font-medium rounded-md",
    fullSized: "w-full",
    color: {
      primary: "bg-primary text-white hover:bg-primaryemphasis",
      secondary: "bg-secondary text-white ",
      error: "bg-error text-white ",
      warning: "bg-warning text-white ",
      info: "bg-info text-white hover:bg-primaryemphasis",
      sky: "bg-sky text-white hover:bg-primaryemphasis",
      success: "bg-success text-white ",
      muted: "bg-muted text-dark dark:text-white dark:bg-darkmuted ",
      lighterror:
        "bg-lighterror dark:bg-darkerror text-error hover:bg-error hover:text-white",
      lightprimary:
        "bg-lightprimary text-primary hover:bg-primary dark:hover:bg-primary hover:text-white",
      lightsecondary:
        "bg-lightsecondary dark:bg-darksecondary text-secondary hover:bg-secondary dark:hover:bg-secondary hover:text-white",
      lightsuccess:
        "bg-lightsuccess dark:bg-darksuccess text-success hover:bg-success dark:hover:bg-success hover:text-white",
      lightinfo:
        "bg-lightinfo dark:bg-darkinfo text-info hover:bg-info dark:hover:bg-info hover:text-white",
      lightwarning:
        "bg-lightwarning dark:bg-darkwarning text-warning hover:bg-warning dark:hover:bg-warning hover:text-white",
      outlineprimary:
        "border border-primary bg-transparent text-primary hover:bg-primary dark:hover:bg-primary hover:text-white ",
      outlinesecondary:
        "border border-secondary bg-transparent text-secondary hover:bg-secondary dark:hover:bg-secondary hover:text-white ",
      outlinewhite:
        "border border-white bg-transparent text-white hover:bg-white dark:hover:bg-white hover:text-primary ",
      transparent:
        "bg-transparent hover:bg-lightprimary dark:hover:bg-darkprimary hover:text-primary p-0",
      white:
        "bg-white dark:bg-darkgray text-primary hover:bg-dark hover:text-white dark:text-white dark:hover:bg-dark font-semibold ",
    },
    outline: {
      color: {
        primary: "border bg-transparent text-primary",
        secondary: "border bg-transparent text-secondary",
        success: "border bg-transparent text-success",
        info: "border bg-transparent text-info",
        warning: "border bg-transparent text-warning",
        error: "border bg-transparent text-error",
        white: "border bg-transparent text-white",
        dark: "border bg-transparent text-dark",
        default: "border-1",
      },
      off: "",
      on: "transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit",
    },
    pill: {
      off: "rounded-md",
      on: "rounded-md",
    },
    inner: {
      base: "flex items-center gap-2 transition-all duration-150 justify-center",
    },

    size: {
      xs: "px-3 py-1.5 text-xs ",
      lg: "px-9 py-2.5 text-sm ",
    },
  },

  card: {
    root: {
      base: "flex rounded-tw  shadow-md dark:shadow-none bg-white dark:bg-darkgray p-[30px] relative w-full break-words",
      children: "flex h-full flex-col justify-center gap-2 p-0",
    },
  },

  badge: {
    root: {
      base: "flex h-fit w-fit items-center font-medium text-xs",
      color: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white ",
        info: "bg-info text-white",
        success: "bg-success text-white",
        warning: "bg-warning text-white ",
        error: "bg-error text-white ",
        lightsuccess: "bg-lightsuccess dark:bg-lightsuccess text-success",
        lightprimary: "bg-lightprimary dark:bg-lightprimary text-primary",
        lightwarning: "bg-lightwarning dark:bg-lightwarning text-warning",
        lightinfo: "bg-lightinfo dark:bg-lightinfo text-info",
        lightsecondary:
          "bg-lightsecondary dark:bg-lightsecondary text-secondary",
        lighterror: "bg-lighterror dark:bg-lighterror text-error",
        white: "bg-white dark:bg-darkmuted text-dark dark:text-white",
        muted: "bg-muted dark:bg-darkmuted text-dark dark:text-white",
      },
    },
    icon: {
      off: "rounded-sm px-2.5 py-1",
      on: "rounded-full py-[5px] px-[10px]",
      size: {
        xs: "h-3 w-3",
        sm: "h-3.5 w-3.5",
      },
    },
  },

  drawer: {
    root: {
      base: "fixed z-40 overflow-y-auto bg-white dark:bg-darkgray p-0 transition-transform",
    },
    header: {
      inner: {
        closeButton:
          "absolute end-2.5 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-lightgray dark:bg-darkmuted text-primary",
        closeIcon: "h-4 w-4",
        titleText:
          "mb-4 inline-flex items-center text-base font-semibold text-bodytext",
      },
    },
  },

  modal: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-lg bg-white dark:bg-darkgray",
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    },
    body: {
      base: "flex-1 overflow-auto p-6",
      popup: "pt-0",
    },
    header: {
      base: "flex items-center justify-between  p-6",
      popup: "border-b-0 p-2",
      title: "text-xl font-semibold text-dark dark:text-white leading-[normal]",
      close: {
        base: "ltr:ml-auto rtl:mr-auto items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center gap-3 p-6 pt-2",
      popup: "border-none",
    },
  },

  dropdown: {
    arrowIcon: "ml-2 h-4 w-4",
    content: "focus:outline-none",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-dark dark:bg-dark",
          light: "bg-white",
          auto: "bg-white dark:bg-dark",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit  items-center focus:outline-none  shadow-md dark:shadow-dark-md text-start rounded-sm overflow-hidden",
      content: "py-2 text-sm text-bodytext focus:outline-none",
      header: "block px-4 py-2 text-ld",
      item: {
        container: "focus:outline-none",
        base: "flex w-full cursor-pointer items-center justify-start px-4  py-2 text-sm text-ld hover:text-primary bg-hover focus:outline-none ",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "bg-dark text-white dark:bg-dark",
        light: "border-none bg-white",
        auto: "border-none bg-white text-ld dark:border-none dark:bg-dark dark:text-white focus:outline-none",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  },

  table: {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full  bg-transparent drop-shadow-md ",
      wrapper: "relative",
    },
    head: {
      base: "group/head text-sm font-medium capitalize text-dark dark:text-white border-b border-ld",
      cell: {
        base: "font-semibold px-4 py-4   dark:bg-transparent",
      },
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-4 py-4 dark:bg-transparent",
      },
    },
    row: {
      base: "group/row bg-transparent ",
      hovered: "bg-hover dark:bg-transparent",
      striped:
        "odd:bg-transparent  even:bg-gray-50 odd:dark:bg-dark even:dark:bg-gray-700",
    },
  },

  progress: {
    base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
    color: {
      success: "bg-success",
      secondary: "bg-secondary",
      warning: "bg-warning",
      error: "bg-error",
      info: "bg-info",
      primary: "bg-primary",
    },
    size: {
      sm: "h-1",
      md: "h-1.5",
      lg: "h-4",
      xl: "h-6",
    },
  },

  checkbox: {
    root: {
      base: "rounded border-2 cursor-pointer ",
      color: {
        default: "text-primary",
        primary: "text-primary",
        secondary: "text-secondary",
        error: "text-error",
      },
    },
  },

  breadcrumb: {
    root: {
      base: "",
      list: "flex items-center justify-between w-full",
    },
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
        on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
      },
      icon: "mr-2 h-4 w-4",
    },
  },
  label: {
    root: {
      base: "text-sm font-semibold text-dark dark:text-white",
      disabled: "opacity-100",
    },
  },

  alert: {
    base: "flex flex-col gap-2 p-4 text-sm",
    borderAccent: "border-t-4",
    color: {
      primary: "bg-primary text-white border-yellow-500",
      secondary: "bg-secondary text-white border-yellow-500",
      success: "bg-success text-white border-yellow-500",
      info: "bg-info text-white border-yellow-500",
      warning: "bg-warning text-dark border-yellow-500 dark:text-yellow-800",
      error: "bg-error text-white border-yellow-500",
      dark: "bg-dark text-white dark:bg-dark border-yellow-500",
      lightsuccess:
        "bg-lightsuccess dark:bg-lightsuccess text-success border-success",
      lightprimary:
        "bg-lightprimary dark:bg-lightprimary text-primary border-primary",
      lightwarning:
        "bg-lightwarning dark:bg-lightwarning text-warning border-yellow-500",
      lightinfo: "bg-lightinfo dark:bg-lightinfo text-info border-info",
      lightsecondary:
        "bg-lightsecondary dark:bg-lightsecondary text-secondary border-secondary",
      lighterror: "bg-lighterror dark:bg-lighterror text-error border-error",
    },
    icon: "mr-3 inline h-5 w-5 flex-shrink-0",
    rounded: "rounded-lg",
    wrapper: "flex items-center",
  },

  navbar: {
    collapse: {
      base: "w-full md:w-auto",
      list: "flex gap-2 items-center",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "text-base py-1.5 px-4 hover:text-primary dark:hover:text-primary text-bodytext hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer ",
      active: {
        on: "bg-lightprimaary text-white dark:text-white",
        off: "text-dark dark:text-white",
      },
    },
  },

  textarea: {
    base: "block w-full rounded-md border text-sm disabled:cursor-not-allowed disabled:opacity-50 bg-transparent",
    colors: {
      gray: "border border-ld text-dark  focus:border-primary focus:ring-0  dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-0",
    },
  },

  hr: {
    root: {
      base: "my-8 h-px border-0 bg-gray-200 dark:bg-gray-700",
    },
    text: {
      base: "inline-flex relative w-full items-center justify-center",
      hrLine: "my-3 h-px w-full border-0 bg-border dark:bg-darkborder",
      text: "absolute left-1/2 -translate-x-1/2 bg-white px-3 md:text-[15px] text-[13px] font-normal text-bodytext dark:bg-darkgray dark:text-white",
    },
  },

  sidebar: {
    root: {
      inner: "bg-white dark:bg-transparent rounded-none",
    },
    item: {
      base: "flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal text-link  hover:text-primary dark:text-white  dark:hover:text-primary",
      content: {
        base: "flex-1 whitespace-nowrap px-0",
      },
      active:
        "bg-lightprimary !text-primary dark:bg-lightprimary !dark:text-primary ",
    },

    collapse: {
      button:
        "group flex gap-3 items-center  rounded-lg px-4 py-3 mb-1 text-[15px] leading-[normal] font-normal text-link  hover:text-primary dark:text-white w-full dark:hover:text-primary",
      icon: {
        base: "h-6 w-6 text-link text-base",
      },
      label: {
        base: "flex justify-start flex-1 max-w-36 overflow-hidden truncate",
      },
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-ld pt-4 first:mt-0 first:border-t-0 first:pt-0 sidebar-nav ",
    },
  },


  listGroup: {
    root: {
      base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white",
    },
    item: {
      base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
      link: {
        base: "flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
        active: {
          off: "hover:bg-lightprimary  focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
          on: "bg-cyan-700 text-white dark:bg-gray-800",
        },
        disabled: {
          off: "",
          on: "cursor-not-allowed bg-primary text-white hover:bg-lightprimary hover:text-gray-900 focus:text-gray-900",
        },
        href: {
          off: "",
          on: "",
        },
        icon: "mr-2 h-4 w-4 fill-current",
      },
    },
  },
};

export default customTheme;
