type itemType = {
  data: string;
  expireTime: number;
};

export const lStorage = (
  key: string,
  data: string,
  time: number,
  arr: itemType[]
) => {
  const expireTime = Date.now() + time;
  const item: itemType = {
    data,
    expireTime,
  };
  arr.push(item);
  localStorage.setItem(key, JSON.stringify(item));
};
