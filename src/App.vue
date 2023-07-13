<template>
	<div class="">
		<div class="sdxHeader">
			<div class=" w-[1087px] mx-auto ">
				<a href="https://www.steakd.com" class="sdxHeaderLink">
					<img src="./images/Steakd_dashboard_logo_PNG.png" class="sdxHeaderLogo mt-2.5 lg:mt-2" />
				</a>
			</div>
		</div>

		<div class="sm:px-0 mx-auto mt-12 lg:w-[1087px]  ">
			<div
				class="flex lg:flex-row mx-auto  flex-col justify-between items-center custom_width lg:space-x-8 border-2 border-[#3396FF] py-4 px-4 rounded-lg bg-gray-100">
				<div class="flex sm:flex-row  flex-col items-center  space-x-2 justify-center ">
					<div class="mx-auto pl-0.5 w-12/12 flex justify-center">
						<w3m-core-button></w3m-core-button>
					</div>
					<div class=" flex flex-row space-x-2 font-bold text-sm sm:text-xl  justify-center items-center">
						<p>Status:</p>
						<p :class="{ 'text-[#3396FF]': userWallet !== null, 'text-red-500 ': userWallet === null }">
							{{ userWallet !== null ? 'CONNECTED' : 'NOT CONNECTED' }}
						</p>
					</div>
				</div>
				<div class="flex flex-rw w-12/12 space-x-2 justify-center text-sm sm:text-xl "> <span
						class="font-semibold">SDX Balance:</span><span> {{
							formatNumber(fullBalanceOfToken.toString()) }}</span></div>
				<div class="flex flex-rw w-12/12 space-x-2 justify-center text-sm sm:text-xl"><span
						class="font-semibold">Currently staking at: {{ totalAPR !== null ?
							totalAPR : 0 }}%
						APR</span>
				</div>
			</div>

			<div class="flex lg:flex-row flex-col pb-4 lg:space-x-4  bg-gray-100 mt-4 border-4 border-gray-200 rounded-lg">
				<div class="lg:w-[39%] mobile_extra">
					<p class="font-bold text-xl text-center">STAKE OR WITHDRAW</p>
					<div
						class="flex  flex-col py-4 px-4 border-gray-300 bg-[#E6E6E6] border-2 rounded-2xl  pt-10 lg:h-[35.6rem]">
						<div class="flex lg:flex-row lg:text-xl text-[1rem]  mx-auto items-center lg:space-x-3">
							<div
								class="border-[.13rem]  rounded-lg border-[#26AF1A] bg-white text-[#26AF1A] px-2 lg:px-6 py-2 font-bold  text-center">
								{{ lockAPRsFront !== undefined && lockAPRsFront !== 0 ? `${lockAPRsFront}%` : `7% ` }}
								<br />
								APR</div>
							<p class="text-xl font-extrabold text-[#26AF1A]">+</p>
							<div
								class="border-[.13rem] rounded-lg border-[#26AF1A] bg-white text-[#26AF1A] px-1 py-2 font-bold  text-center">
								{{ (nftCount !== undefined && nftCount !== 0) ? `${lockAPRsFrontBonus}% ` : '0%' }} NFT
								<br /> BONUS
							</div>
							<p class="text-xl font-extrabold text-[#26AF1A]">=</p>
							<div
								class="border-[.13rem] rounded-lg border-[#26AF1A] bg-white text-orange-600 px-1 py-2 font-bold  text-center">
								{{ lockAPRsFrontTotal !== undefined && lockAPRsFrontTotal !== 0 ? `${lockAPRsFrontTotal}%` :
									`7% ` }} APR
								<br /> TOTAL
							</div>
						</div>
						<div class="desktop">
							<div
								class="relative flex items-center w-full  mb-4 mt-4 border-2 bg-white p-2 px-[0.6rem] border-gray-400 rounded-lg">
								<img class="w-12 h-12 imageinput" :src="tokenImage" alt="" srcset="">
								<input type="text"
									class=" px-3 py-2 input_mobile focus:outline-none border-none font-bold focus:ring-2 focus:ring-blue-500 w-full"
									v-model="amount" @input="handleInputChange" />
								<button @click="handleMaxAmountClick"
									class="px-4 py-2 rounded-r-lg input_mobile_gone font-semibold text-gray-400 absolute right-0 top-0 bottom-0 focus:outline-none focus:ring-2 focus:ring-blue-500">
									MAX
								</button>
							</div>
							<input type="range" class=" w-full" :value="sliderValue" min="0" @input="updateSliderValue"
								:max="this.balanceOfToken" step="1">
						</div>
						<div class="flex flex-row items-center mb-6 w-full ">
							<div class="buttons  flex flex-row  mt-2  mx-auto font-bold">
								<button @click="setPercentage(25)"
									class="mobilepercentage py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">25%</button>
								<button @click="setPercentage(50)"
									class="mobilepercentage py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">50%</button>
								<button @click="setPercentage(75)"
									class="mobilepercentage py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">75%</button>
								<button @click="setPercentage(100)"
									class="mobilepercentage py-2 mx-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">100%</button>
							</div>
						</div>
						<select id="lockedperiod" v-model="selectedLockPeriod" @change="handleSelectChange"
							class="bg-gray-50 selecter border-[.09rem] font_size border-red-400  text-gray-900 rounded-lg focus:ring-blue-500 focus:border-red-400 block w-10/12 mx-auto p-2.5 dark:bg-white dark:border-red-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-red-400">
							<option value="" disabled selected>Select period (6 or 12 months)</option>

							<option value="6">6 months</option>
							<option value="12">12 months</option>
						</select>

						<div
							class="flex mt-4 text-white font-bold text-2xl flex-col sm:flex-col items-center justify-between  space-y-4 w-10/12 mx-auto">
							<button @click="stakeTokens" :disabled="!userWallet"
								class="bg-[#FD5A08] w-full button p-2 px-4 rounded-xl align-middle py-3 uppercase">
								Stake
							</button>
							<button @click="unstakeTokens" :disabled="!userWallet"
								class="bg-[#26AF1A] w-full button p-2 px-4 rounded-xl align-middle py-3 uppercase">
								Withdraw
							</button>
						</div>
					</div>
				</div>
				<div class="lg:w-3/12 mobile margin-mobile">
					<p class="font-bold text-xl uppercase text-center">Incredibulls Mint</p>

					<div class="flex  lg:h-[35.6rem] flex-col px-4 border-gray-300 border-2 rounded-2xl">
						<div class="flex flex-col justify-start font-semibold text-2xl mx-auto">
							<div class="mt-4 text-[#FD5A08]">
								Quantity
								<input class="w-12 text-center border-[.09rem] border-[#FD5A08] text-black" type="number"
									v-model="quantity" />
							</div>

						</div>

						<div class="flex flex-col  justify-between font-bold text-xl lg:text-2xl mx-auto">
							<div>
								<div class="mx-auto">
									<div class=" text-base text-gray-400 font-normal text-center mt-2 mb-1">
										Each NFT is .3 BNB
									</div>
									<div class="mx-auto flex justify-center" v-if="quantitywithprice <= bnbAmount">
										<button @click="handleClick"
											class="bg-[#FD5A08] px-4 py-1 my-1 rounded-xl w-full text-xl text-white">
											MINT NFT <br>
											{{ formattedPrice }}
										</button>
									</div>
									<div v-else>
										<button @click="handleClick" class="bg-[#FD5A08] my-1 p-1 rounded-xl w-full text-white">
											MINT NFT <br>
											{{ formattedPrice }}
										</button>
										<!-- Display a message or alternative content when the condition is not met -->
										<p v-if="!this.userWallet" class="text-center text-[red] text-base">Please connect your
											wallet to Mint</p>
										<p v-if="this.bnbAmount " class="text-center text-[red] text-base">Insufficient BNB balance</p>
									</div>

									<div class="flex flex-row mx-auto justify-center items-center border-2 border-gray-400 my-2 rounded-xl py-2">
											<img class="w-[5rem]"
												src="https://steakdincredibulls.com/images/cow.png" alt="">
										<div class="flex flex-col">
											<div class="text-base ">INCREDIBULLS <br> MINTED</div>
											<div class="text-[#fd5a08] text-base">
												{{ nftCounts }}/{{ maxTokenID }}
											</div>
										</div>
									</div>
									<h4 class="text-lg text-center">INCREDIBULLS NFTs IN YOUR WALLET</h4>
									<div
						class="text-6xl mt-1 text-orange-500 text-center font-bold border-2 border-gray-400 rounded-lg bg-white w-4/12 mx-auto pb-2">
						{{ nftCount }}</div>
					<div class="text-[#26AF1A] mb-1 text-sm text-center font-bold mt-4">
						<p>CURRENT SDX THAT <br /> QUALIFIES FOR BONUS 4% </p>
					</div>
					<div
						class="border-[.09rem] mb-4 border-[#26AF1A] rounded-lg text-center px-4 py-2 bg-white font-bold text-gray-400 pb-1 text-base">
						<span >{{ formatNumber(this.nftBonusAmount) }}</span>
					</div>
								</div>
							</div>
						</div>
						<!-- <img class="w-[5.8rem] mx-auto" src="https://steakdincredibulls.com/images/cow.png" alt="">
					<p class="text-center font-bold text-lg">INCREDIBULLS NFTs <br /> IN WALLET</p>
					<div
						class="text-6xl mt-2 text-orange-500 text-center font-bold border-2 border-gray-400 rounded-lg bg-white w-4/12 mx-auto pb-2">
						{{ nftCount }}</div>
					<div class="text-[#26AF1A] mb-2 text-sm text-center font-bold mt-4">
						<p>CURRENT SDX THAT <br /> QUALIFIES FOR BONUS 4% </p>
					</div>
					<div
						class="border-[.09rem] border-[#26AF1A] rounded-lg text-center px-4 py-2 bg-white font-bold text-gray-400 pb-1 text-xl">
						<span >{{ formatNumber(this.nftBonusAmount) }}</span>
					</div>
					<div
						class="flex my-10 text-white font-bold text-xl flex-col sm:flex-col items-center justify-between  w-12/12 mx-auto">
						<div class="text-white w-full mx-auto">
							<a class=" bg-gray-400 p-3 rounded-xl button" target="_blank" href="https://steakd.com/incredibulls/">ADD MORE
								NFTs</a>
						</div>

					</div> -->
					</div>
				</div>
				<div class="lg:w-[31.8%] mt-8  mobile">
					<div class="text-xl font-bold flex flex-row text-[#26AF1A]">
						<p class="mt-1">Earned SDX REWARDS</p>
						<div class="spin1"></div>
						<!-- <div class="spinner mt-[.4rem]">
						<div class="dot dot1"></div>
						<div class="dot dot2"></div>
						<div class="dot dot3"></div>
						<div class="dot dot4"></div>
					</div> -->
					</div>

					<div class="flex flex-col pr-[0.5em]">
						<div class="border-[.09rem] border-gray-600 rounded-lg text-[#26AF1A] p-2 px-3 bg-white">
							<span class="text-3xl font-bold">{{ viewUnpaidDividends !== undefined && viewUnpaidDividends !==
								0 ?
								formatNumber(viewUnpaidDividends) : 0 }}</span>
						</div>
						<div
							class="flex mt-4 text-white font-bold text-2xl flex-col sm:flex-row items-center justify-between space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
							<button @click="resyncTokens" :disabled="!userWallet"
								class="bg-[#66C0F6] py-3 px-2 rounded-xl w-full">
								COMPOUND EARNED
							</button>
						</div>
						<div class="mt-8">
							<p class="text-xl font-bold text-gray-500 ">TOTAL STAKED SDX</p>
							<div
								class="border-[.09rem] bg-white py-2 border-gray-500 p-2 px-3 rounded-lg font-bold text-3xl text-gray-500">
								{{ formatNumber(stakedAmount) }}</div>
							<div class="mt-4 text-base text-gray-500 font-semibold">

								<template v-if="!(userWallet && viewUnpaidDividends)">
								</template>
								<template v-else>
									<span>
										<p>END DATE:</p> {{ this.endDate }}
									</span>
								</template>
							</div>
							<div class="mt-4  text-red-300 font-semibold font_custom ">
								<p>NOTE: If you withdraw before the period <br /> ends there will be a 1% fee.</p>
							</div>
							<div class="successAlert " id="alertBox">
								{{ alertMessage }}
							</div>

						</div>
					</div>
				</div>
			</div>

			<!-- <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 mt-4 mx-auto">
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
									<input type="range" class=" w-full" :value="sliderValue" min="0" @input="updateSliderValue"
						:max="this.balanceOfToken" step="1">
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
								<button @click="stakeTokens" :disabled="!userWallet"
									class="bg-[#FD5A08] w-full p-2 px-4 rounded-xl">
									Stake
								</button>
								<button @click="unstakeTokens" :disabled="!userWallet"
									class="bg-[#48CF3C] w-full p-2 px-4 rounded-xl">
									Withdraw
								</button>
							</div>
							<div
								class="flex mt-4 text-white font-bold text-2xl flex-col sm:flex-row items-center justify-between space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
								<button @click="resyncTokens" :disabled="!userWallet"
									class="bg-[#66C0F6]	p-2 px-4 rounded-xl w-full">
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
							<div
								class="flex justify-center flex-row items-center space-x-4 p-4 border-2 rounded-xl border-gray-400">
								<p class="text-xl font-semibold">
									<span class="mr-2">
										{{ viewUnpaidDividends !== undefined && viewUnpaidDividends !== 0 ?
											formatNumber(viewUnpaidDividends) : 0 }}
									</span>
									SDX TOKENS
								</p>
							</div>
							<div class="flex flex-row justify-between">
								<p>locked amount:</p>
								<p>{{ formatNumber(stakedAmount) }}</p>
							</div>
							<div v-if="nftCount != 0">
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
		</div> -->
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { nftABI, stakingABI, tokenABI } from './abis.js'
import tokenImage from './images/Steakd_Logo_Coin-500x500-1.png'
/* wallet connect config */
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig, writeContract, readContract, waitForTransaction, watchAccount,fetchBalance } from '@wagmi/core'

import { bsc } from '@wagmi/core/chains'

const chains = [bsc]
const projectId = 'bf13f5490d12eaaa6a13a1b1038e8155'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: w3mConnectors({ projectId, chains }),
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
			lockAPRsFrontBonus: 0,
			balanceOf: "",
			balanceOfToken: "",
			selectedValue: "6",
			totalAPR: null,
			tokenImage: tokenImage,
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
			stakedAmount: 0,
			sliderValue: 0,
			fullBalanceOfToken: 0,
			alertMessage: "Alert Box",
			quantity: 0,
			price: 0,
			count: null,
			data: null,
			maxTokenID: 0,
			nftCounts: 0,
			bnbAmount: 0,
			quantitywithprice: 0,
			account: '',
			bnbbalance: '',
		};
	},
	created() {
		this.getlockAPRs();

		setInterval(() => { this.getuserInfo(); }, 10000);
	},
	mounted() {
		watchAccount((curAccount) => {
			if (curAccount.address) {
				this.userWallet = curAccount.address;
				this.getuserInfo();
			} else {
				this.userWallet = null;
				this.clearUserInfo();
			}
		});
	},
	computed: {
		showMintButton() {

			return this.quantitywithprice <= this.bnbAmount;
		},
		formattedPrice() {
			if (this.price === null) {
				return '';
			}
			if (this.price.toString() === '0') {
				return '(0.00 BNB)';
			}
			return `(${(this.price.toString() * this.quantity) / Math.pow(10, 18)} BNB)`;
		},
	},
	watch: {
    quantitywithprice(newValue, oldValue) {
		console.log(this.bnbAmount)
			console.log(this.quantitywithprice)
      console.log('quantitywithprice changed:', newValue);
      this.updateShowMintButton();
    },
    bnbAmount(newValue, oldValue) {
      console.log('bnbAmount changed:', newValue);
      this.updateShowMintButton();
    },
    quantity(newValue, oldValue) {
      // This will be called whenever `quantity` changes
      console.log('quantity changed:', newValue);
      // Perform any desired action here, such as updating the price based on the new quantity
      this.updatePrice();
    },
  },
	methods: {
		showAlertBox(alertType, setMessage) {
			this.alertMessage = setMessage;
			if (alertType == 'error') {
				alertBox.className = "errorAlert";
				setTimeout(() => { alertBox.style.display = 'none'; }, 4000);
			} else if (alertType == 'process') {
				this.alertMessage = "PROCESSING. PLEASE CHECK YOUR CRYPTO WALLET"
				alertBox.className = "processAlert";
			} else {
				alertBox.className = "successAlert";
				setTimeout(() => { alertBox.style.display = 'none'; }, 4000);
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
			let get_maxTokenID = await nftContract.methods.maxTokenID().call();
			let get_nftCounts = await nftContract.methods.nftCount().call();
			this.maxTokenID = get_maxTokenID.toString();
			this.nftCounts = get_nftCounts.toString();
			console.log(get_nftCounts.toString())


			const balance = await fetchBalance({
				address: this.userWallet,
			})
			this.bnbbalance = balance
			console.log(this.bnbbalance)

			if (this.userWallet > 0) {

				let get_nftCount = await nftContract.methods.balanceOf(this.userWallet).call();
				let get_bonusThreshold = await stakingContract.methods.bonusThreshold().call();
				this.bonusThreshold = get_bonusThreshold;
				this.nftCount = get_nftCount;

				let formattedBonus = Web3.utils.fromWei(get_bonusThreshold, 'ether')

				this.nftBonusAmount = (formattedBonus.toString() * get_nftCount.toString());

				let get_balanceOfToken = await tokenContract.methods.getUserUnstaked(this.userWallet).call();
				let get_stakedAmount = await stakingContract.methods.getUserStaked(this.userWallet).call();
				this.stakedAmount = Web3.utils.fromWei(get_stakedAmount, 'ether');
				this.balanceOfToken = Web3.utils.fromWei(get_balanceOfToken, 'ether');
				this.fullBalanceOfToken = parseFloat(this.stakedAmount) + parseFloat(this.balanceOfToken);

				let get_userLock = await stakingContract.methods.userLock(this.userWallet).call();


				if (get_userLock[0] == 6 && get_userLock['bonusBalance'] !== 0 || this.nftCount > 0) {
					this.totalAPR = 11
				}

				if (get_userLock[0] == 12 && get_userLock['bonusBalance'] !== 0 || this.nftCount > 0) {
					this.totalAPR = 12
				}

				if (get_userLock[0] == 6 && get_userLock['bonusBalance'] == 0) {
					this.totalAPR = 7
				}
				if (get_userLock[0] == 12 && get_userLock['bonusBalance'] == 0) {
					this.totalAPR = 8
				}

				if (get_userLock[2]) {

					const date = new Date(get_userLock[2].toString() * 1000);
					console.log(date)
					const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
					const formattedDate = date.toLocaleString('en-US', options);
					this.endDate = formattedDate.toString();
				} else {
					this.endDate = null;
				}
				this.userLock = get_userLock;
				if (this.stakedAmount > 0) {
					let get_viewUnpaidDividends = await stakingContract.methods.viewUnpaidDividends(this.userWallet).call();
					this.viewUnpaidDividends = Web3.utils.fromWei(get_viewUnpaidDividends, 'ether');
				}
				if (this.selectedValue === "6") {
					if (this.nftCount > 0) {
						this.lockAPRsFront = this.lockAPRs[2].toString()

					} else {
						this.lockAPRsFront = this.lockAPRs[0].toString();

					}
					this.lockAPRsFrontBonus = this.lockAPRs[1].toString()
					this.lockAPRsFrontTotal = this.lockAPRs[2].toString()
				}
				if (this.selectedValue === "12") {
					if (this.nftCount > 0) {
						this.lockAPRsFront = this.lockAPRs[4].toString()
					} else {
						this.lockAPRsFront = this.lockAPRs[3].toString();

					}
					this.lockAPRsFrontBonus = this.lockAPRs[5].toString()
					this.lockAPRsFrontTotal = this.lockAPRs[4].toString()

				}
			}
		},

		clearUserInfo() {
			this.nftCount = 0;
			this.stakedAmount = 0;
			this.balanceOfToken = 0;
			this.userLock = "0";
			this.viewUnpaidDividends = 0;
			this.fullBalanceOfToken = 0;
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
			if (this.nftCount) {
				this.lockAPRs.push(Web3.utils.fromWei((get_lockAPRs6[2] - get_lockAPRs6[0]), 'ether'))
			} else {
				this.lockAPRs.push(0)
			}
			if (this.nftCount) {
				this.lockAPRs.push(Web3.utils.fromWei(get_lockAPRs6[2], 'ether'))
			} else {
				this.lockAPRs.push(Web3.utils.fromWei(get_lockAPRs6[0], 'ether'));
			}
			this.lockAPRs.push(Web3.utils.fromWei(get_lockAPRs12[0], 'ether'));
			if (this.nftCount > 0) {
				this.lockAPRs.push(Web3.utils.fromWei(get_lockAPRs12[2], 'ether'))
			} else {
				this.lockAPRs.push(Web3.utils.fromWei(get_lockAPRs12[0], 'ether'));
			}
			if (this.nftCount > 0) {
				this.lockAPRs.push(Web3.utils.fromWei((get_lockAPRs12[2] - get_lockAPRs12[0]), 'ether'))
			} else {
				this.lockAPRs.push(0)
			}

		},

		handleSelectChange(event) {
			const newValue = event.target.value;
			this.selectedValue = newValue;
			console.log(this.lockAPRs)
			if (newValue === "6") {
				if (this.nftCount > 0) {
					this.lockAPRsFront = this.lockAPRs[2].toString()

				} else {
					this.lockAPRsFront = this.lockAPRs[0].toString();

				}
				this.lockAPRsFrontBonus = this.lockAPRs[1].toString()
				this.lockAPRsFrontTotal = this.lockAPRs[2].toString()
			}
			if (newValue === "12") {
				if (this.nftCount > 0) {
					this.lockAPRsFront = this.lockAPRs[4].toString()
				} else {
					this.lockAPRsFront = this.lockAPRs[3].toString();

				}
				this.lockAPRsFrontBonus = this.lockAPRs[5].toString()
				this.lockAPRsFrontTotal = this.lockAPRs[4].toString()

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
			this.showAlertBox('process', 'PROCESSING. PLEASE CHECK YOUR CRYPTO WALLET');
			try {
				let stakeAmount = Web3.utils.toWei(this.amount.replace(/,/g, ''), 'ether');
				let trueMax = await tokenContract.methods.getUserUnstaked(this.userWallet).call();
				if (stakeAmount > trueMax) {
					stakeAmount = trueMax;
				}
				const { hash } = await writeContract({
					address: stakingAddr,
					abi: stakingABI,
					functionName: 'stakeTokens',
					args: [stakeAmount, this.selectedValue],
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
			this.showAlertBox('process', 'PROCESSING. PLEASE CHECK YOUR CRYPTO WALLET');
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
			this.showAlertBox('process', 'PROCESSING. PLEASE CHECK YOUR CRYPTO WALLET');
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

		async updatePrice() {
		this.price = await readContract({
			address: nftAddr,
			abi: nftABI,
			functionName: 'mintPrice',
			// You can pass the updated quantity as an argument if necessary
			arguments: [this.quantity],
		});
		this.quantitywithprice = (this.price.toString() * this.quantity) / Math.pow(10, 18);
		console.log(this.quantitywithprice)
		},

		async handleClick() {
			try {
		const price = Number(this.price); // Convert the string to a number
        const quantity = Number(this.quantity); // Convert the string to a number
        const { hash } = await writeContract({
          address: this.bullAddress,
          abi: nftABI,
          functionName: 'mintNFT',
          args: [this.userWallet, this.quantity],
          value: (price * quantity).toString(),
        })
        // Contract execution succeeded, open the modal
        this.nftAmount = this.nftCount + this.quantity
			} catch (error) {
				console.log(this.quantity)
				console.log(this.price)

				console.log(error)
			}
		},
		updateShowMintButton() {
      console.log('Updating showMintButton');
      this.$forceUpdate();
    },
	}
};
</script>

<style>
.errorAlert {
	background-color: rgb(253, 255, 128);
	display: none;
	text-align: center;
	z-index: 2;
	color: red !important;
	font-size: 16px;
	font-weight: 600;
	width: 90%;
	padding: 10px;
	margin-top: 10px;
}

.successAlert {
	background-color: rgb(128, 255, 128);
	display: none;
	text-align: center;
	z-index: 2;
	font-size: 16px;
	font-weight: 600;
	width: 90%;
	padding: 10px;
	margin-top: 10px;
}

.processAlert {
	background-color: rgb(255, 255, 128);
	display: none;
	color: red !important;
	z-index: 2;
	font-size: 16px;
	font-weight: 600;
	width: 90%;
	padding: 10px;
	margin-top: 10px;
}


.spinner {
	width: 60px;
	height: 20px;
	position: relative;
	z-index: 0;
}

.dot {
	border-radius: 100%;
	background: black;
	width: 20px;
	height: 20px;
	position: absolute;
}

@keyframes dotOne {
	0% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(-200px);
		background-color: #cccccc;
		z-index: -20;
	}

	25% {
		left: 0%;
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	50% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(0);
		background-color: #26AF1A;
		z-index: 20;
	}

	75% {
		left: calc(100% - 20px);
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	100% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(-200px);
		background-color: #cccccc;
		z-index: -20;
	}
}

@keyframes dotTwo {
	0% {
		left: 0%;
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	25% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(0);
		background-color: #26AF1A;
		z-index: 20;
	}

	50% {
		left: calc(100% - 20px);
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	75% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(-200px);
		background-color: #cccccc;
		z-index: -20;
	}

	100% {
		left: 0%;
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}
}

@keyframes dotThree {
	0% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(0);
		background-color: #26AF1A;
		z-index: 20;
	}

	25% {
		left: calc(100% - 20px);
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	50% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(-200px);
		background-color: #cccccc;
		z-index: -20;
	}

	75% {
		left: 0%;
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	100% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(0);
		background-color: #26AF1A;
		z-index: 20;
	}
}

@keyframes dotFour {
	0% {
		left: calc(100% - 20px);
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	25% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(-200px);
		background-color: #cccccc;
		z-index: -20;
	}

	50% {
		left: 0%;
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}

	75% {
		left: calc(50% - 10px);
		transform: perspective(200px) translateZ(0);
		background-color: #26AF1A;
		z-index: 20;
	}

	100% {
		left: calc(100% - 20px);
		transform: perspective(200px) translateZ(-100px);
		background-color: #666666;
		z-index: 0;
	}
}

.dot1 {
	animation: dotOne 2s linear infinite;
}

.dot2 {
	animation: dotTwo 2s linear infinite;
	transform: translateX(-20px);
}

.dot3 {
	animation: dotThree 2s linear infinite;
}

.dot4 {
	animation: dotFour 2s linear infinite;
}


.spin1,
.spin2 {
	margin: 7px 10px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 3px solid #ccc;
	animation: spin 1.5s linear infinite;
}

.spin1 {
	border-bottom-color: #26AF1A;
}

.spin2 {
	border-bottom-color: #26AF1A;
	border-top-color: #26AF1A;
}

.spin3 {
	margin-top: 100px;
	margin-bottom: 300px;
	display: flex;
	position: relative;
	justify-content: center;
}

.spin3 div {
	position: absolute;
	border-radius: 50%;
	border: 3px solid transparent;
	animation: spin linear infinite;
	border-bottom-color: #26AF1A;
}

.spin3 .c1 {
	width: 80px;
	height: 80px;
	animation-duration: 0.85s;
}

.spin3 .c2 {
	top: -10px;
	width: 100px;
	height: 100px;
	animation-duration: 0.95s;
}

.spin3 .c3 {
	top: -20px;
	width: 120px;
	height: 120px;
	animation-duration: 1.05s;
}

@keyframes spin {
	from {
		transform: rotate(0);
	}

	to {
		transform: rotate(360deg);
	}
}

.sdxHeader {
	display: flex;
	background-color: #FD5A08;
	height: 80px;
	width: 100%;
	padding: 10px;
}

.sdxHeaderLink {
	display: flex;
}

.sdxHeaderLogo {
	max-height: 60px;
	object-fit: scale-down;
}


.mobile {
	padding: 0px 0px;
}

.mobile_extra {
	padding-left: 25px;
}


.mobilepercentage {
	padding: 0px 10px;
}


.input_mobile {
	font-size: 1.25rem
		/* 20px */
	;
	line-height: 1.75rem
		/* 28px */
	;
}


.margin-mobile{
	margin: 0px 0px;
}

@media only screen and (max-width: 768px) {

	.mobile {
		padding: 0px 27px !important;
	}

	.mobile_extra {
		padding: 0px 27px;

	}

	.mobilepercentage {
		padding: 0px 5px;
	}

	.font_size {
		font-size: 15px;
	}

	.margin-mobile{
	margin: 20px 0px;
}

}


@media only screen and (max-width: 426px) {

	.custom_width {
		width: 85%;
	}



	.mobilepercentage {
		padding: 0px 10.5px;
		font-size: 14px;
	}

	.font_size {
		font-size: 10px;
	}

	.font_custom {
		font-size: 12px;
	}


	.input_mobile {
		font-size: 0.9rem
			/* 20px */
		;
		line-height: 1rem
			/* 28px */
		;
	}

	.input_mobile_gone {
		display: none;
	}

	.imageinput {
		width: 30px;
		height: 30px;
	}

}


@media only screen and (max-width: 360px) {

	.mobilepercentage {
		padding: 0px 8px;
		font-size: 11px;
	}

}

@media only screen and (max-width: 320px) {

	.mobilepercentage {
		padding: 0px 7px;
		font-size: 9px;
	}

}

@media only screen and (max-width: 290px) {



	.mobilepercentage {
		padding: 0px 5px;
		font-size: 7px;
	}

	.font_size {
		font-size: 6px;
	}

	.button {
		font-size: 15px;
	}

}</style>