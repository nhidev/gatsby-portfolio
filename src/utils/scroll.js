const isSmoothScrollSupported = true;

 const toTop = () => {
  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, 0);
  }
};

 const to = (ycoordinate) => {
  if (isSmoothScrollSupported) {
    window.scroll({
      top: ycoordinate,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, ycoordinate);
  }
};

 const toElement = (element) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      element.scrollIntoView();
    }
  }
};

export  {
  toTop,
  to,
  toElement
};
