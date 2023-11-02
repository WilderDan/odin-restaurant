const NavItem = (name, callback) => {
  const li = document.createElement("li");
  li.id = name;
  li.innerText = name;
  li.addEventListener("click", () => callback(name));

  return li;
};

export default NavItem;
