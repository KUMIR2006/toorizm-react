export const formatNumber = (price: number) => {
  return price.toLocaleString('ru-RU', {
    style: 'decimal',
    useGrouping: true,
  });
};
