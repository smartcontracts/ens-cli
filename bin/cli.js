#!/usr/bin/env node

const { program } = require('commander')
const { ethers } = require('ethers')

const { version } = require('../package.json')

program
  .name('ens')
  .description('CLI for interacting with the Ethereum Name Service')
  .version(version)

program
  .command('resolve <name>')
  .description('Resolve an ENS name to an address')
  .action(async (name) => {
    const provider = new ethers.providers.InfuraProvider()
    const address = await provider.resolveName(name)
    console.log(address)
  })

program.parse()
