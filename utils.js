function capitalize(name) {
  return name.replace(/./, name[0].toUpperCase());
}

module.exports = capitalize;