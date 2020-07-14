import path from 'path'
import os from 'os'

export = (Utils) => {
  const hook_hook = new Utils.Hook('semo', {
    before_command: 'Hook triggered before command execution.',
    after_command: 'Hook triggered after command execution.',
    component: 'Hook triggered when needing to fetch components',
    hook: 'Hook triggered in hook command.',
    repl: 'Hook triggered in repl command.',
    repl_command: 'Define custom repl command.',
    status: 'Hook triggered in status command.',
    create_project_template: 'Hook triggered in create command.'
  })
  
  const hook_repl = new Utils.Hook('semo', () => {
    const corePkgInfo = Utils.loadCorePackageInfo()
    return { VERSION: corePkgInfo.version }
  })

  const hook_create_project_template = new Utils.Hook('semo', () => {
    const argv: any = Utils.getInternalCache().get('argv')
    const scriptName = argv && argv.scriptName ? argv.scriptName : 'semo'
    return scriptName === 'semo' ? {
      semo_starter_plugin_typescript: {
        repo: 'https://github.com/semojs/semo-starter-plugin-typescript.git',
        branch: 'master',
        alias: ['semo-plugin-starter-typescript', 'plugin-typescript']
      },
      semo_starter_application_simple_typescript: {
        repo: 'https://github.com/semojs/semo-starter-application-simple-typescript.git',
        branch: 'master',
        alias: ['semo-starter-application-simple-typescript', 'application-simple']
      }
    } : {}
  })
  
  const hook_status = new Utils.Hook('semo', async () => {
    let info = JSON.parse(
      await Utils.envinfo.run(
        {
          System: ['OS', 'Shell'],
          Binaries: ['Node', 'Yarn', 'npm']
        },
        { json: true }
      )
    )
  
    let kvs = {}
    const appConfig = Utils.getApplicationConfig({
      cwd: path.resolve(__dirname, '../../')
    })
    kvs = Object.assign(
      kvs,
      Utils._.pickBy(
        {
          version: appConfig.version,
          location:
            appConfig.applicationDir.indexOf(process.env.HOME) === 0
              ? appConfig.applicationDir.replace(process.env.HOME, '~')
              : appConfig.applicationDir,
          os: info.System.OS,
          node: info.Binaries.Node ? info.Binaries.Node.version : null,
          npm: info.Binaries.npm ? info.Binaries.npm.version : null,
          yarn: info.Binaries.Yarn ? info.Binaries.Yarn.version : null,
          hostname: os.hostname(),
          home: process.env.HOME,
          shell: info.System.Shell.path
        },
        Utils._.identity
      )
    )
  
    return kvs
  })

  return { hook_hook, hook_status, hook_repl, hook_create_project_template }
}


