export const parseList = response => {
    if (response.status !== 200) throw Error(response.message);
    let list = response.data;
    if (typeof list !== 'object') {
      list = [];
    }
    return list;
  };
