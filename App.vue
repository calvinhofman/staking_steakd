<template>
	<div class="sm:px-0 mx-auto mt-12">
		<div class="successAlert" id="alertBox">
			{{ alertMessage }}
		</div>
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
							{{ lockAPRsFront !== undefined && lockAPRsFront !== 0 ? `${lockAPRsFront}%` : `7%` }}
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
									<input type="text"
										class="border border-gray-300 px-3 py-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
										v-model="amount" @input="handleInputChange" />
									<button @click="handleMaxAmountClick"
										class="px-4 py-2 rounded-r-lg absolute right-0 top-0 bottom-0 focus:outline-none focus:ring-2 focus:ring-blue-500">
										Max
									</button>
								</div>
								<div class="flex flex-col items-center my-4 w-full">
									<input type="range"	:value="sliderValue" min="0" @input="updateSliderValue"	:max="this.balanceOfToken" step="1" class="w-full">
									<div class="buttons w-full flex flex-row justify-between mt-4 px-10 mx-auto">
										<button @click="setPercentage(25)"
											class="px-6 py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">25%</button>
										<button @click="setPercentage(50)"
											class="px-6 py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">50%</button>
									</div>
									<div class="buttons w-full flex flex-row justify-between mt-4 px-10 mx-auto">
										<button @click="setPercentage(75)"
											class="px-6 py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">75%</button>
										<button @click="setPercentage(100)"
											class="px-5 py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">100%</button>
									</div>
								</div>
								<div>
									<select id="lockedperiod" v-model="selectedLockPeriod" @change="handleSelectChange"
										class="bg-gray-50 border text-2xl border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
										<option value="" disabled selected>Select period</option>

										<option value="6">6 months</option>
										<option value="12">12 months</option>
									</select>
								</div>
							</div>
							<div
								class="flex mt-4 text-white font-bold text-2xl flex-col sm:flex-row items-center justify-between space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
								<button @click="stakeTokens" :disabled="!userWallet" class="bg-[#FD5A08] w-full p-2 px-4 rounded-xl">
									Stake
								</button>
								<button @click="unstakeTokens" :disabled="!userWallet || balanceOfToken == 0"
									class="bg-[#48CF3C] w-full p-2 px-4 rounded-xl">
									Withdraw
								</button>
							</div>
							<div
								class="flex mt-4 text-white font-bold text-2xl flex-col sm:flex-row items-center justify-between space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
								<button @click="resyncTokens" :disabled="!userWallet" class="bg-[#66C0F6]	p-2 px-4 rounded-xl w-full">
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
										{{ viewUnpaidDividends !== undefined && viewUnpaidDividends !== 0 ? formatNumber(viewUnpaidDividends) : 0 }}
									</span>
									SDX TOKENS
								</p>
							</div>
							<div class="flex flex-row justify-between">
								<p>locked amount:</p> <p>{{ formatNumber(stakedAmount) }}</p>
							</div>
							<div v-if="nftCount !== null && nftCount !== 0">
								<div class="flex flex-row justify-between">
									<p>NFTs:</p>
									<p>{{ nftCount }}</p>
								</div>
								<div class="flex flex-row justify-between">
									<p>{{ formatNumber(this.nftBonusAmount) }}</p>
									<p> qualify for bonus 4%</p>
								</div>
							</div>
							<div v-if="endDate !== null" class="flex flex-row justify-between">
								<p>end date:</p>
								<p>{{ this.endDate }} </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { nftABI, stakingABI, tokenABI } from './abis.js'

/* wallet connect config */
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig, writeContract, waitForTransaction, watchAccount } from '@wagmi/core'

import { bsc } from '@wagmi/core/chains'

const chains = [bsc]
const projectId = 'bf13f5490d12eaaa6a13a1b1038e8155'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: w3mConnectors({ projectId, version: 1, chains }),
	publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

import Web3 from "web3";
const w3Provider = new Web3("https://bsc-dataseed.binance.org/")

const stakingAddr = "0x9f1fF7D34666f2182bcf0E14898889bDeDAcFd87"
const stakingContract = new w3Provider.eth.Contract(stakingABI, stakingAddr)
const nftAddr = "0x6489265Bf18185cA693017E7448bD77E8F80A524"
const nftContract = new w3Provider.eth.Contract(nftABI, nftAddr)
const tokenAddr = "0x510AeB87665D3fCE5395a62045C5B7aE8990bf35"
const tokenContract = new w3Provider.eth.Contract(tokenABI, tokenAddr)

export default {
	name: "SDX-Staking",
	data() {
		return {
			userWallet: "",
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
			selectedLockPeriod: '',
			contract: null,
			contractNFT: null,
			contractToken: null,
			bonusThreshold: 0,
			nftCount: 0,
			nftBonusAmount: 0,
			endDate: null,
			stakedAmount:0,
			sliderValue: 0,

			alertMessage: "Alert Box",
		};
	},
	created() {
		this.getlockAPRs();

		setInterval(() => { this.getuserInfo(); }, 10000);
	},
	mounted() {
		const alertBox = document.getElementById('alertBox');

		watchAccount((curAccount) => {
			if(curAccount.address) {
				this.userWallet = curAccount.address;
				this.getuserInfo();
			} else {
				this.userWallet = null;
				this.clearUserInfo();
			}
		});
	},

	methods: {
		showAlertBox(alertType, setMessage) {
			this.alertMessage = setMessage;
			if(alertType == 'error') {
				alertBox.className = "errorAlert";
				setTimeout(()=> { alertBox.style.display = 'none'; } ,4000);
			} else if(alertType == 'process') {
				this.alertMessage = "Transaction Processing"
				alertBox.className = "processAlert";
			} else {
				alertBox.className = "successAlert";
				setTimeout(()=> { alertBox.style.display = 'none'; } ,4000);
			}
			alertBox.style.display = 'block';
		},

		formatNumber(num) {
            return Number(num).toLocaleString("en-US", { maximumFractionDigits: 0 });
        },

		updateSliderValue(event) {
			this.sliderValue = event.target.value;
			this.amount = this.formatNumber(event.target.value);
		},

		setPercentage(percentage) {
			let percentageValue = this.balanceOfToken * percentage / 100;
			this.sliderValue = percentageValue;
			this.amount = this.formatNumber(percentageValue);
		},

		async getuserInfo() {
			if(this.userWallet > 0) {

				let get_nftCount = await nftContract.methods.balanceOf(this.userWallet).call();
				this.nftCount = get_nftCount;

				let get_balanceOfToken = await tokenContract.methods.getUserUnstaked(this.userWallet).call();
				let get_stakedAmount = await stakingContract.methods.getUserStaked(this.userWallet).call();
				this.stakedAmount = Web3.utils.fromWei(get_stakedAmount, 'ether');
				this.balanceOfToken = Web3.utils.fromWei(get_balanceOfToken, 'ether');

				let get_userLock = await stakingContract.methods.userLock(this.userWallet).call();
				if (get_userLock[2]) {
					const date = new Date(get_userLock[2].toString() * 1000);
					const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
					const formattedDate = date.toLocaleString('en-US', options);
					this.endDate = formattedDate.toString();
				} else {
					this.endDate = null;
				}
				this.userLock = get_userLock;
                if(this.stakedAmount > 0) {
                    let get_viewUnpaidDividends = await stakingContract.methods.viewUnpaidDividends(this.userWallet).call();
                    this.viewUnpaidDividends = Web3.utils.fromWei(get_viewUnpaidDividends, 'ether');
                }
			}
		},

		clearUserInfo() {
			this.nftCount = 0;
			this.stakedAmount = 0;
			this.balanceOfToken = 0;
			this.userLock = "0";
			this.viewUnpaidDividends = 0;
		},

		async getStakingActive() {
			let get_stakingActive = await stakingContract.methods.stakingActive().call();
			if (get_stakingActive == false) {
				get_stakingActive = "Offline";
			} else {
				get_stakingActive = "Active";
			}
			this.stakingActive = get_stakingActive;
		},

		async getlockAPRs() {
			this.lockAPRs = []
			let get_lockAPRs6 = await stakingContract.methods.lockAPRs(6).call();
			let get_lockAPRs12 = await stakingContract.methods.lockAPRs(12).call();
			this.lockAPRs.push(Web3.utils.fromWei(get_lockAPRs6[0], 'ether'));
			this.lockAPRs.push(Web3.utils.fromWei(get_lockAPRs12[0], 'ether'));
			
			let get_bonusThreshold = await stakingContract.methods.bonusThreshold().call();
			this.bonusThreshold = get_bonusThreshold;
		},

		handleSelectChange(event) {
			const newValue = event.target.value;
			this.selectedValue = newValue;
			if (newValue === "6") {
				this.lockAPRsFront = this.lockAPRs[0].toString();
			}
			if (newValue === "12") {
				this.lockAPRsFront = this.lockAPRs[1].toString();
			}
		},

		handleMaxAmountClick() {
			this.amount = this.formatNumber(this.balanceOfToken);
		},

		handleInputChange() {
			let stakeAmount = this.amount.replace(/,/g, '');
			const formattedValue = Number(stakeAmount).toLocaleString('en-US');
			this.amount = formattedValue;
		},

		async stakeTokens() {
			this.showAlertBox('process', '');
			try {
				let stakeAmount = Web3.utils.toWei(this.amount.replace(/,/g, ''), 'ether');
				const { hash } = await writeContract({
					address: stakingAddr,
					abi: stakingABI,
					functionName: 'stakeTokens',
					args: [Web3.utils.toWei(stakeAmount, 'ether'), this.selectedValue],
				})
				const data = await waitForTransaction({ confirmations: 2, hash, })
				this.showAlertBox('success', 'Staking was successful');

				console.log("Stake successful:", hash);
				this.getuserInfo();
			} catch (error) {
				console.error("Stake failed:", error);
				this.showAlertBox('error', 'An error has occurred');
			}
		},

		async unstakeTokens() {
			this.showAlertBox('process', '');
			try {
				const { hash } = await writeContract({
					address: stakingAddr,
					abi: stakingABI,
					functionName: 'withdrawTokens',
				})
				const data = await waitForTransaction({ confirmations: 1, hash, })
				this.showAlertBox('success', 'Withdraw was successful');

				console.log("Stake successful:", hash);
				this.getuserInfo();
			} catch (error) {
				console.error("Stake failed:", error);
				this.showAlertBox('error', 'An error has occurred');
			}
		},

		async resyncTokens() {
			this.showAlertBox('process', '');
			try {
				const { hash } = await writeContract({
					address: stakingAddr,
					abi: stakingABI,
					functionName: 'resyncUserInfo',
				})
				const data = await waitForTransaction({ confirmations: 1, hash, })
				this.showAlertBox('success', 'Compounding was successful');

				console.log("Stake successful:", hash);
				this.getuserInfo();
			} catch (error) {
				console.error("Stake failed:", error);
				this.showAlertBox('error', 'An error has occurred');
			}
		},
	}
};
</script>

<style>
.errorAlert {
	background-color: rgb(255, 128, 128);
	display: none;
	position: fixed;
	top: 0;
	text-align: center;
	width: 100%;
	z-index: 2;
	font-size: 30px;
}
.successAlert {
	background-color: rgb(128, 255, 128);
	display: none;
	position: fixed;
	top: 0;
	text-align: center;
	width: 100%;
	z-index: 2;
	font-size: 30px;
}
.processAlert {
	background-color: rgb(255, 255, 128);
	display: none;
	position: fixed;
	top: 0;
	text-align: center;
	width: 100%;
	z-index: 2;
	font-size: 30px;
}
</style>