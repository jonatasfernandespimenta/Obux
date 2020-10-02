exports.moreThan18Years = (birth) => {
  const date18years = new Date().setFullYear(new Date().getFullYear() - 18);
  return birth <= date18years;
};
