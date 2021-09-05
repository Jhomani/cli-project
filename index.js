const fs = require('fs');
const redux = require('./container/redux');
const indexContainer = require('./container/index');
const indexPage = require('./page/index');
const capitalize = require('./utils');
const styles = require('./container/styles');

const addContainer = ({ name, module, pageName }) => {

  let folderName = `${process.cwd()}/src/containers/${capitalize(module)}Module`

  try {
    let content;

    if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);
    folderName += `/${capitalize(name)}`
    if (fs.existsSync(folderName)) return console.log('\x1b[31m%s\x1b[0m', `The ${name} coninater already exist`);

    fs.mkdirSync(folderName);
    fs.mkdirSync(`${folderName}/redux`);
    fs.mkdirSync(`${folderName}/components`);
    fs.mkdirSync(`${folderName}/styles`);

    for (let key in redux) {
      content = redux[key](name);
      fs.writeFileSync(`${folderName}/redux/${key}.js`, content);
    }

    content = indexContainer(name);
    fs.writeFileSync(`${folderName}/index.js`, content);

    content = styles(name);
    fs.writeFileSync(`${folderName}/styles/index.styles.js`, content);

    content = indexPage(name, module);
    fs.writeFileSync(`${process.cwd()}/src/pages/${module.toLowerCase()}/${pageName}.js`, content);

    console.log('\x1b[32m%s\x1b[0m', 'Good! we created all container default structure');
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', 'Oh man, we have problems sorry.');
  }
}

// Export All Methods
module.exports = {
  addContainer,
}
