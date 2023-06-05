<template>
  <div class="sm:px-0 mx-auto mt-12">
    <div class="flex flex-col md:flex-row justify-center text-black items-center w-11/12 mx-auto">

      <div>
      <!-- <ConnectWallet theme="white" /> -->
      <w3m-core-button></w3m-core-button>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 mt-4 mx-auto">
      <div id="card" class="border-4 rounded-xl border-blue w-full md:w-12/12 bg-gray-100">
        <div class="flex flex-row md:flex-row justify-between items-center space-x-4 p-6">
          <div class="text-black text-center">
            <p class="text-3xl font-bold">Staking period:</p>
            <span class="text-[#ff742e] text-3xl font-bold uppercase">
              {{ selectedValue }} months
            </span>
          </div>
          <div class="text-[#2EAA23] px-6 text-xl rounded-xl font-bold border-2 border-[#38C12C] text-center">
            <span>
              {{ lockAPRsFront !== undefined && lockAPRsFront !== 0 ? `${lockAPRsFront / Math.pow(10, 18)}%` : `7%` }}
            </span>
            <p class="">APR</p>
            <div></div>
          </div>
        </div>
        <div class="px-6">
          <div class="text-black w-full border-2 rounded-xl border-gray-400 bg-white p-4">
            <p class="text-center text-2xl font-bold">
              STAKE OR WITHDRAW
            </p>
            <div class="mt-2">
              <div class="flex flex-col px-2 sm:px-16">
                <div class="relative flex items-stretch w-full mb-4">
                  <input
                    type="number"
                    class="border border-gray-300 px-3 py-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    :value="Math.ceil(amount / Math.pow(10, 18))"
                    @input="handleInputChange"
                  />
                  <button
                    @click="handleMaxAmountClick"
                    class="px-4 py-2 rounded-r-lg absolute right-0 top-0 bottom-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Max
                  </button>
                </div>
                <div>
                  <select
                    id="lockedperiod"
                    :value="selectedValue"
                    @change="handleSelectChange"
                    class="bg-gray-50 border text-2xl border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                  </select>
                </div>
              </div>
              <div class="flex mt-4 text-white font-bold text-2xl flex-col sm:flex-row items-center justify-between space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
                <button @click="stakeTokens" class="bg-[#FD5A08] w-full p-2 px-4 rounded-xl">
                  Stake
                </button>
                <button @click="unstakeTokens" class="bg-[#48CF3C] w-full p-2 px-4 rounded-xl">
                  Withdraw
                </button>
              </div>
              <div class="flex mt-4 text-white font-bold text-2xl flex-col sm:flex-row items-center justify-between space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
                <button @click="resyncTokens" class="bg-[#66C0F6]  p-2 px-4 rounded-xl w-full">
                  Compound
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 mb-6 mt-8">
          <div class="text-black px-4 border-2 border-gray-400 bg-white rounded-xl p-4">
            <p class="text-center text-2xl font-semibold uppercase">
              Pending rewards:
            </p>
            <div class="my-2 px-2 sm:px-16">
              <div class="flex justify-center flex-row items-center space-x-4 p-4 border-2 rounded-xl border-gray-400">
                <p class="text-xl font-semibold">
                  <span class="mr-2">
                    {{ viewUnpaidDividends !== undefined && viewUnpaidDividends !== 0 ? Math.ceil(viewUnpaidDividends / Math.pow(10, 18)) : 0 }}
                  </span>
                  SDX TOKENS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { abi } from "./stakingABI.js";
import { nftabi } from "./nftABI.js";
import { tokenabi } from "./tokenABI.js";

/* wallet connect config */
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig, prepareWriteContract, writeContract, readContract, getAccount, fetchBalance } from '@wagmi/core'

import { bsc } from '@wagmi/core/chains'

const chains = [bsc]
const projectId = '495ea6fee27ebd14da507e3a91c54ca0'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

import { parseGwei } from 'viem'

export default {
  name: "Home",
  mounted() {
    this.initWeb3();
  },

  data() {
    return {
      contractAddress: "0x9f1fF7D34666f2182bcf0E14898889bDeDAcFd87",
      contractAddressNFT: "0x6489265Bf18185cA693017E7448bD77E8F80A524",
      contractAddressToken: "0x510AeB87665D3fCE5395a62045C5B7aE8990bf35",
      address: "",
      web3: null,
      provider: null,
      stakingActive: "",
      viewUnpaidDividends: 0,
      viewTotalDividends: 0,
      lockAPRs: "7",
      lockAPRsFront: 0,
      balanceOf: "",
      balanceOfToken: "",
      selectedValue: "6",
      userLock: "0",
      amount: 0,
      contract: null,
      contractNFT: null,
      contractToken: null,
    };
  },
  watch: {
  selectedValue(newVal) {
    if (newVal === "6") {
      this.lockAPRsFront = this.lockAPRs[0].toString();
    }
    if (newVal === "12") {
      this.lockAPRsFront = this.lockAPRs[1].toString();
    }
  }
},
created() {
  this.getlockAPRs(); // Call initially

  setInterval(() => {
    this.getlockAPRs(); // Call every 5 seconds
    this.getBalanceOfToken()
    this.getuserInfo()
  }, 1000);
},
  methods: {


    async getuserInfo() {
      let info = getAccount()
      info.address;
      this.address = info.address;
    },


    async getUserLock() {
      this.nftCount = await readContract({
        address: this.contractAddress,
          abi: abi,
          functionName: 'userLock',
          value: this.address
      })
        this.userLock = userLock;
    },
    async getViewUnpaidDividends() {
      this.viewUnpaidDividends = await readContract({
        address: this.contractAddress,
          abi: abi,
          functionName: 'viewUnpaidDividends',
          value: this.address
      })
      this.viewUnpaidDividends = viewUnpaidDividends;
    },
    async getViewTotalDividends() {
      this.viewTotalDividends = await readContract({
        address: this.contractAddress,
          abi: abi,
          functionName: 'viewTotalDividends',
          value: this.address
      })
      this.viewTotalDividends = viewTotalDividends;
    },
    async getStakingActive() {
       let stakingActive = await readContract({
        address: this.contractAddress,
          abi: abi,
          functionName: 'stakingActive'
      })
      // let stakingActive = await this.contract.methods.stakingActive().call();
      if (stakingActive == false) {
        stakingActive = "Offline";
      } else {
        stakingActive = "Active";
      }
      this.stakingActive = stakingActive;
    },
    async getBalanceOf() {
      let balanceOf = await readContract({
        address: this.contractAddress,
          abi: abi,
          functionName: 'balanceOf',
          value: this.address
      })
      this.balanceOf = balanceOf;
    },
    async getBalanceOfToken() {
      let balanceOfToken = await readContract({
        address: this.contractAddressToken,
          abi: tokenabi,
          functionName: 'balanceOf',
          args: [this.address]
      })
      this.balanceOfToken = balanceOfToken;
    },
    async getlockAPRs() {
      let lockAPRs6 = await readContract({
          address: this.contractAddress,
          abi: abi,
          functionName: 'lockAPRs',
          args: [6]
      })
      let lockAPRs12 = await readContract({
        address: this.contractAddress,
          abi: abi,
          functionName: 'lockAPRs',
          args: [12]
      })


      let combine = [];
      let lockAPR = [];

      combine = combine.concat(lockAPRs6, lockAPRs12);
      if (this.balanceOf == 0) {
        lockAPR.push(combine[0]);
        lockAPR.push(combine[4]);
      }

      this.lockAPRs = lockAPR;
    },
    handleSelectChange(event) {
      const newValue = event.target.value;
      this.selectedValue = newValue;
      if (this.selectedValue == 6) {
        this.lockAPRsFront = 6;
      }
      if (this.selectedValue == 12) {
        this.lockAPRsFront = 12;
      }
    },
    handleMaxAmountClick() {
      console.log(this.balanceOfToken)
      this.amount = Math.floor(this.balanceOfToken.toString());
    },
    handleInputChange(event) {
      const newValue = parseInt(event.target.value);
      this.amount = newValue;
    },
    async stakeTokens() {
      try {

        const { hash } = await writeContract({
          address: this.contractAddress,
          abi: abi,
          functionName: 'stakeTokens',
          args: [this.amount, this.selectedValue],
        })
        console.log(hash)
        // const stakeToken = await this.contract.methods
        //   .stakeTokens(this.amount, this.selectedValue)
        //   .send({ from: this.address });
        console.log("Stake successful:", hash);
      } catch (error) {
        console.error("Stake failed:", error);
      }
    },
    async unstakeTokens() {
      try {
        const { hash } = await writeContract({
          address: this.contractAddress,
          abi: abi,
          functionName: 'withdrawTokens',
        })
        // const stakeToken = await this.contract.methods.withdrawTokens().send({ from: this.address });
        console.log("Stake successful:", hash);
      } catch (error) {
        console.error("Stake failed:", error);
      }
    },
    async resyncTokens() {
      try {
        const { hash } = await writeContract({
          address: this.contractAddress,
          abi: abi,
          functionName: 'resyncUserInfo',
        })
        // const resyncTokens = await this.contract.methods.resyncUserInfo().send({ from: this.address });
        console.log("Stake successful:", hash);
      } catch (error) {
        console.error("Stake failed:", error);
      }
    },
    }
};
</script>

<style scoped>
.container {
  padding: 0 2rem;
}

.main {
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title a {
  color: #f213a4;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.connect {
  margin-bottom: 2rem;
}

.description {
  margin-top: 3rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
}

.card {
  background-color: #fd5a08 !important;
  color: white !important;
  width: 375px !important;
  height: 100px !important;
  font-weight: 700 !important;
  font-size: 1.5em !important;
  border-radius: 20px;
  margin-bottom: 0px;

}

.card:hover,
.card:focus,
.card:active {
  background-color: #272c34;
  color: #0ea5e9;
  border-color: #0ea5e9;
}

.card h2 {}

.card p {}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

.card,
.footer {
  border-color: #222;
}

.code {
  background: #111;
}

.logo img {
  filter: invert(1);
}


@media screen and (max-width: 1025px) {
  .card {
    background-color: #fd5a08 !important;
    color: white !important;
    width: 275px !important;
    height: 100px !important;
    font-weight: 700 !important;
    font-size: 1.3em !important;

    border-radius: 10px;

  }
}

@media screen and (max-width: 426px) {
  .card {
    background-color: #fd5a08 !important;
    color: white !important;
    width: 275px !important;
    height: 100px !important;
    font-weight: 700 !important;
    font-size: 1.2em !important;

    margin-bottom: 30px;
    border-radius: 10px;

  }
}

@media screen and (max-width: 321px) {
  .card {
    background-color: #fd5a08 !important;
    color: white !important;
    width: 175px !important;
    height: 100px !important;
    font-weight: 700 !important;
    font-size: 1.2em !important;

    border-radius: 10px;
    margin-bottom: 30px;
  }
}

.tw-connect-wallet {
  background: #69C1F6 !important;
}

.tw-connected-wallet {
  background: #69C1F6 !important;

}
</style>