const setFillingType = (item) => {
  switch (item) {
    case "Грибы":
      return "mushrooms";
    case "Чеддер":
      return "cheddar";
    case "Салями":
      return "salami";
    case "Ветчина":
      return "ham";
    case "Ананас":
      return "ananas";
    case "Бекон":
      return "bacon";
    case "Лук":
      return "onion";
    case "Чили":
      return "chile";
    case "Халапеньо":
      return "jalapeno";
    case "Маслины":
      return "olives";
    case "Томаты":
      return "tomatoes";
    case "Лосось":
      return "salmon";
    case "Моцарелла":
      return "mozzarella";
    case "Пармезан":
      return "parmesan";

    default:
      return "blue_cheese";
  }
};

export const formatFilling = (arr) => {
  return arr.map((el) => {
    return {
      ...el,
      type: setFillingType(el.name),
    };
  });
};
