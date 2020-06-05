import { Utils } from '@semo/core'

export const disabled = false // Set to true to disable this command temporarily
export const command = 'test'
export const desc = 'Test command placeholder'
// export const aliases = ''
// export const middleware = (argv) => {}

export const builder = function (yargs: any) {
  // yargs.option('option', { default, describe, alias })
  // yargs.commandDir('test')
}

export const handler = async function (argv: any) {
  Utils.info(`You see this command because this is a placeholder command, will do nothing.`)
  Utils.info(`You can use ${Utils.chalk.green('semo create command application/test --extend=application')} in your project to override this command.`)
  Utils.info(`If you don't need this command and don't want to see it, you can set ${Utils.chalk.green('disabled = true')} to hide this command.`)
}
