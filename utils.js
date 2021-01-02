const fsPromises = require('fs/promises')
const chalk = require('chalk')

exports.makeDirs = async function (baseDir, name, kebabName = undefined) {
  const dirName = kebabName === undefined ? name : kebabName
  const make = [
    // doing these in two passes so console output is more granular
    `./${baseDir}`,
    `./${baseDir}/${dirName}`
  ]
  console.log(chalk.magentaBright(`baseDir: ${baseDir}`))

  for (const dir of make) {
    try {
      await fsPromises.access(`${dir}`)
      console.log(chalk.yellowBright(`${dir}/ exists`))
    } catch {
      console.log(chalk.magentaBright(`creating ${dir}/...`))
      try {
        // create dir if it doesn't exist
        await fsPromises.mkdir(`./${dir}`, { recursive: true })
        console.log(chalk.greenBright(`${dir}/ created`))
      } catch (err) {
        console.error(chalk.redBright(`ERROR (makeDirs): ${err}`))
      }
    }
  }
}

exports.makeFile = async function (
  baseDir,
  name,
  files,
  file = undefined,
  kebabName = undefined
) {
  // file ex: files.functional
  let template = {}
  let isConfig = false
  if (file !== undefined) {
    // aac
    template = files[file]
  } else {
    // aap
    template.boilerplate = files[name]
    template.extension = `jsx`
    isConfig = true
  }

  const fileName = kebabName === undefined ? name : kebabName // TODO rename fileName since we use it for the dir sometimes
  const fullName = isConfig ? fileName + '.boilerplate' : fileName

  try {
    await fsPromises.access(
      `./${baseDir}/${fileName}/${fullName}.${template.extension}`
    )
    console.log(chalk.yellowBright(`${fullName}.${template.extension} exists`))
  } catch (err) {
    console.log(
      chalk.magentaBright(
        `${fullName}.${template.extension} doesn't exist, creating...`
      )
    )
    try {
      await fsPromises.writeFile(
        `${baseDir}/${fileName}/${fullName}.${template.extension}`,
        `${template.boilerplate}`
      )
      console.log(
        chalk.greenBright(`${fullName}.${template.extension} created`)
      )
    } catch (err) {
      console.error(chalk.redBright('Error Writing File', err))
    }
  }
}
