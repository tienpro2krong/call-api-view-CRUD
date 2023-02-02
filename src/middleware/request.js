exports.request = (data) => {
  if (data.status === 200) {
    return data.data.data;
  } else {
    return "nodata";
  }
};
