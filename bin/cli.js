#!/usr/bin/env node

const { program } = require('commander')
const { ethers } = require('ethers')

program
  .name('ens')
  .description('CLI for interacting with the Ethereum Name Service')
  .version('1.0.0')

program
  .command('resolve <name>')
  .description('Resolve an ENS name to an address')
  .action(async (name) => {
    const provider = new ethers.providers.InfuraProvider()
    const address = await provider.resolveName(name)
    console.log(address)
  })

program.parse()
